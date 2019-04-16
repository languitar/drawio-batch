/**
 * $Id: ProxyServlet.java,v 1.4 2013/12/13 13:18:11 david Exp $
 * Copyright (c) 2011-2012, JGraph Ltd
 */
package com.mxgraph.online;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.net.UnknownHostException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.apphosting.api.DeadlineExceededException;
import com.mxgraph.online.Utils.UnsupportedContentException;

/**
 * Servlet implementation ProxyServlet
 */
@SuppressWarnings("serial")
public class ProxyServlet extends HttpServlet
{
	private static final Logger log = Logger
			.getLogger(HttpServlet.class.getName());

	/**
	 * Buffer size for content pass-through.
	 */
	private static int BUFFER_SIZE = 3 * 1024;
	
	/**
	 * GAE deadline is 30 secs so timeout before that to avoid
	 * HardDeadlineExceeded errors.
	 */
	private static final int TIMEOUT = 29000;
	
	/**
	 * A resuable empty byte array instance.
	 */
	private static byte[] emptyBytes = new byte[0];

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ProxyServlet()
	{
		super();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException
	{
		String urlParam = request.getParameter("url");

		if (checkUrlParameter(urlParam))
		{
			// build the UML source from the compressed request parameter
			String ref = request.getHeader("referer");
			String ua = request.getHeader("User-Agent");
			String dom = getCorsDomain(ref, ua);

			try(OutputStream out = response.getOutputStream())
			{
				request.setCharacterEncoding("UTF-8");
				response.setCharacterEncoding("UTF-8");

				URL url = new URL(urlParam);
				URLConnection connection = url.openConnection();
				connection.setConnectTimeout(TIMEOUT);
				connection.setReadTimeout(TIMEOUT);
				
				response.setHeader("Cache-Control", "private, max-age=86400");

				// Workaround for 451 response from Iconfinder CDN
				connection.setRequestProperty("User-Agent", "draw.io");

				if (dom != null && dom.length() > 0)
				{
					response.addHeader("Access-Control-Allow-Origin", dom);
				}

				// Status code pass-through and follow redirects
				if (connection instanceof HttpURLConnection)
				{
					((HttpURLConnection) connection)
							.setInstanceFollowRedirects(true);
					int status = ((HttpURLConnection) connection)
							.getResponseCode();
					int counter = 0;

					// Follows a maximum of 6 redirects 
					while (counter++ <= 6
							&& (status == HttpURLConnection.HTTP_MOVED_PERM
									|| status == HttpURLConnection.HTTP_MOVED_TEMP))
					{
						url = new URL(connection.getHeaderField("Location"));
						connection = url.openConnection();
						((HttpURLConnection) connection)
								.setInstanceFollowRedirects(true);
						connection.setConnectTimeout(TIMEOUT);
						connection.setReadTimeout(TIMEOUT);

						// Workaround for 451 response from Iconfinder CDN
						connection.setRequestProperty("User-Agent", "draw.io");
						status = ((HttpURLConnection) connection)
								.getResponseCode();
					}

					if (status >= 200 && status <= 299)
					{
						response.setStatus(status);
						
						// Copies input stream to output stream
						InputStream is = connection.getInputStream();
						byte[] head = (contentAlwaysAllowed(urlParam)) ? emptyBytes
								: Utils.checkStreamContent(is);
						response.setContentType("application/octet-stream");
						String base64 = request.getParameter("base64");
						copyResponse(is, out, head,
								base64 != null && base64.equals("1"));
					}
					else
					{
						response.setStatus(HttpURLConnection.HTTP_PRECON_FAILED);
					}
				}
				else
				{
					response.setStatus(HttpURLConnection.HTTP_UNSUPPORTED_TYPE);
				}

				out.flush();

				log.log(Level.FINEST, "processed proxy request: url="
						+ ((urlParam != null) ? urlParam : "[null]")
						+ ", referer=" + ((ref != null) ? ref : "[null]")
						+ ", user agent=" + ((ua != null) ? ua : "[null]"));
			}
			catch (DeadlineExceededException e)
			{
				response.setStatus(HttpServletResponse.SC_REQUEST_TIMEOUT);
			}
			catch (UnknownHostException | FileNotFoundException e)
			{
				// do not log 404 and DNS errors
				response.setStatus(HttpServletResponse.SC_NOT_FOUND);
			}
			catch (UnsupportedContentException e)
			{
				response.setStatus(HttpServletResponse.SC_FORBIDDEN);
				log.log(Level.SEVERE, "proxy request with invalid content: url="
						+ ((urlParam != null) ? urlParam : "[null]")
						+ ", referer=" + ((ref != null) ? ref : "[null]")
						+ ", user agent=" + ((ua != null) ? ua : "[null]"));
			}
			catch (Exception e)
			{
				response.setStatus(
						HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
				log.log(Level.FINE, "proxy request failed: url="
						+ ((urlParam != null) ? urlParam : "[null]")
						+ ", referer=" + ((ref != null) ? ref : "[null]")
						+ ", user agent=" + ((ua != null) ? ua : "[null]"));
				e.printStackTrace();
			}
		}
		else
		{
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			log.log(Level.SEVERE,
					"proxy request with invalid URL parameter: url="
							+ ((urlParam != null) ? urlParam : "[null]"));
		}
	}

	/**
	 * Dynamically generated CORS header for known domains.
	 * @throws IOException 
	 */
	protected void copyResponse(InputStream is, OutputStream out, byte[] head,
			boolean base64) throws IOException
	{
		if (base64)
		{
			try (BufferedInputStream in = new BufferedInputStream(is,
					BUFFER_SIZE))
			{
				ByteArrayOutputStream os = new ByteArrayOutputStream();
			    byte[] buffer = new byte[0xFFFF];

				os.write(head, 0, head.length);
				
			    for (int len = is.read(buffer); len != -1; len = is.read(buffer))
			    { 
			        os.write(buffer, 0, len);
			    }

				out.write(mxBase64.encodeToString(os.toByteArray(), false).getBytes());
			}
		}
		else
		{
			out.write(head);
			Utils.copy(is, out);
		}
	}

	/**
	 * Checks if the URL parameter is legal.
	 */
	public boolean checkUrlParameter(String url)
	{
		return url != null
				&& (url.startsWith("http://") || url.startsWith("https://"))
				&& !url.toLowerCase().contains("://metadata.google.internal/");
	}

	/**
	 * Returns true if the content check should be omitted.
	 */
	public boolean contentAlwaysAllowed(String url)
	{
		return url.toLowerCase()
				.startsWith("https://trello-attachments.s3.amazonaws.com/")
				|| url.toLowerCase().startsWith("https://docs.google.com/");
	}

	/**
	 * Gets CORS header for request. Returning null means do not respond.
	 */
	protected String getCorsDomain(String referer, String userAgent)
	{
		String dom = null;

		if (referer != null && referer.toLowerCase()
				.matches("https?://([a-z0-9,-]+[.])*draw[.]io/.*"))
		{
			dom = referer.toLowerCase().substring(0,
					referer.indexOf(".draw.io/") + 8);
		}
		else if (referer != null && referer.toLowerCase()
				.matches("https?://([a-z0-9,-]+[.])*quipelements[.]com/.*"))
		{
			dom = referer.toLowerCase().substring(0,
					referer.indexOf(".quipelements.com/") + 17);
		}
		// Enables Confluence/Jira proxy via referer or hardcoded user-agent (for old versions)
		// UA refers to old FF on macOS so low risk and fixes requests from existing servers
		else if ((referer != null
				&& referer.equals("draw.io Proxy Confluence Server"))
				|| (userAgent != null && userAgent.equals(
						"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:50.0) Gecko/20100101 Firefox/50.0")))
		{
			dom = "";
		}

		return dom;
	}

}
