/**
 * Copyright (c) 2006-2016, JGraph Ltd
 */
/**
 * No CSS and resources available in embed mode. Parameters and docs:
 * https://desk.draw.io/solution/articles/16000042542-how-to-embed-html-
 */
GraphViewer = function(container, xmlNode, graphConfig)
{
	this.init(container, xmlNode, graphConfig);
};

// Editor inherits from mxEventSource
mxUtils.extend(GraphViewer, mxEventSource);

/**
 * Redirects editing to absolue URLs.
 */
GraphViewer.prototype.editBlankUrl = 'https://www.draw.io/';

/**
 * Base URL for relative images.
 */
GraphViewer.prototype.imageBaseUrl = 'https://www.draw.io/';

/**
 * Redirects editing to absolue URLs.
 */
GraphViewer.prototype.toolbarHeight = (document.compatMode == 'BackCompat') ? 28 : 30;

/**
 * Redirects editing to absolue URLs.
 */
GraphViewer.prototype.lightboxChrome = true;

/**
 * Redirects editing to absolue URLs.
 */
GraphViewer.prototype.lightboxZIndex = 999;

/**
 * Redirects editing to absolue URLs.
 */
GraphViewer.prototype.toolbarZIndex = 999;

/**
 * If automatic fit should be enabled if zoom is disabled. Default is true.
 */
GraphViewer.prototype.autoFit = true;

/**
 * Specifies if zooming in for auto fit is allowed. Default is false.
 */
GraphViewer.prototype.allowZoomIn = false;

/**
 * Whether the title should be shown as a tooltip if the toolbar is disabled.
 * Default is false.
 */
GraphViewer.prototype.showTitleAsTooltip = false;

/**
 * Specifies if the constructur should delay the rendering if the container
 * is not visible by default.
 */
GraphViewer.prototype.checkVisibleState = true;

/**
 * Defines the minimum height of the container. Default is 28.
 */
GraphViewer.prototype.minHeight = 28;

/**
 * Defines the minimum width of the container. Default is 100.
 */
GraphViewer.prototype.minWidth = 100;

/**
 * Initializes the viewer.
 */
GraphViewer.prototype.init = function(container, xmlNode, graphConfig)
{
	this.graphConfig = (graphConfig != null) ? graphConfig : {};
	this.autoFit = (this.graphConfig['auto-fit'] != null) ?
		this.graphConfig['auto-fit'] : this.autoFit;
	this.allowZoomIn = (this.graphConfig['allow-zoom-in'] != null) ?
		this.graphConfig['allow-zoom-in'] : this.allowZoomIn;
	this.checkVisibleState = (this.graphConfig['check-visible-state'] != null) ?
		this.graphConfig['check-visible-state'] : this.checkVisibleState;
	this.toolbarItems = (this.graphConfig.toolbar != null) ?
		this.graphConfig.toolbar.split(' ') : [];
	this.zoomEnabled = mxUtils.indexOf(this.toolbarItems, 'zoom') >= 0;
	this.layersEnabled = mxUtils.indexOf(this.toolbarItems, 'layers') >= 0;
	this.lightboxEnabled = mxUtils.indexOf(this.toolbarItems, 'lightbox') >= 0;
	this.lightboxClickEnabled = this.graphConfig.lightbox != false;
	this.initialWidth = (container != null) ? container.style.width : null;
	this.widthIsEmpty = (this.initialWidth != null) ? this.initialWidth == '' : true;
	this.currentPage = parseInt(this.graphConfig.page) || 0;
	this.pageId = this.graphConfig.pageId;
	this.editor = null;

	if (this.graphConfig['toolbar-position'] == 'inline')
	{
		this.minHeight += this.toolbarHeight;
	}
	
	if (xmlNode != null)
	{
		this.xmlDocument = xmlNode.ownerDocument;
		this.xmlNode = xmlNode;
		this.xml = mxUtils.getXml(xmlNode);

		if (container != null)
		{
			var render = mxUtils.bind(this, function()
			{
				this.graph = new Graph(container);
				this.graph.transparentBackground = false;
				
				if (this.graphConfig.move)
				{
					this.graph.isMoveCellsEvent = function(evt)
					{
						return true;
					};
				}
		
				// Adds lightbox and link handling for shapes
				if (this.lightboxClickEnabled)
				{
					container.style.cursor = 'pointer';
				}
				
				// Hack for using EditorUi methods on the graph instance
				this.editor = new Editor(true, null, null, this.graph);
				this.editor.editBlankUrl = this.editBlankUrl;
				this.graph.lightbox = true;
				this.graph.centerZoom = false;
				this.graph.autoExtend = false;
				this.graph.autoScroll = false;
				this.graph.setEnabled(false);
				
				if (this.graphConfig['toolbar-nohide'] == true)
				{
					this.editor.defaultGraphOverflow = 'visible'; 					
				}
				
				//Extract graph model from html & svg formats 
				this.xmlNode = this.editor.extractGraphModel(this.xmlNode, true);
				
				// Handles relative images
				var self = this;
				
				this.graph.getImageFromBundles = function(key)
				{
					return self.getImageUrl(key);
				};
		
				if (mxClient.IS_SVG)
				{
					// LATER: Add shadow for labels in graph.container (eg. math, NO_FO), scaling
					this.editor.graph.addSvgShadow(this.graph.view.canvas.ownerSVGElement, null, true);
				}
				
				// Adds page placeholders
				if (xmlNode.nodeName == 'mxfile')
				{
					var diagrams = xmlNode.getElementsByTagName('diagram');
					
					if (diagrams.length > 0)
					{
						//Find the page index if the pageId is provided
						if (this.pageId != null)
						{
							for (var i = 0; i < diagrams.length; i++)
							{
								if (this.pageId == diagrams[i].getAttribute('id'))
								{
									this.currentPage = i;
									break;
								}
							}
						}
						
						var graphGetGlobalVariable = this.graph.getGlobalVariable;
						var self = this;
						
						this.graph.getGlobalVariable = function(name)
						{
							var diagram = diagrams[self.currentPage];
							
							if (name == 'page')
							{
								return diagram.getAttribute('name') || 'Page-' + (self.currentPage + 1);
							}
							else if (name == 'pagenumber')
							{
								return self.currentPage + 1;
							}
							
							return graphGetGlobalVariable.apply(this, arguments);
						};
					}
				}
				
				this.diagrams = [];
				var lastXmlNode = null;
				
				this.selectPage = function(number)
				{
					if(this.handlingResize)
						return;
					
					this.currentPage = mxUtils.mod(number, this.diagrams.length);
					this.updateGraphXml(mxUtils.parseXml(Graph.decompress(mxUtils.getTextContent(
						this.diagrams[this.currentPage]))).documentElement);
				};
				
				this.selectPageById = function(id)
				{
					var found = false;
					
					for (var i = 0; i < this.diagrams.length; i++)
					{
						if (this.diagrams[i].getAttribute('id') == id)
						{
							this.selectPage(i);
							found = true;
							break;
						}
					}
					
					return found;
				};
				
				var update = mxUtils.bind(this, function()
				{
					if (this.xmlNode == null || this.xmlNode.nodeName != 'mxfile')
					{
						this.diagrams = [];
					}
					if (this.xmlNode != lastXmlNode)
					{
						this.diagrams = this.xmlNode.getElementsByTagName('diagram');
						lastXmlNode = this.xmlNode;
					}
				});
				
				// LATER: Add event for setGraphXml
				this.addListener('xmlNodeChanged', update);
				update();
	
				// Passes current page via urlParams global variable
				// to let the parser know which page we're using
				urlParams['page'] = self.currentPage;

				this.graph.getModel().beginUpdate();
				try
				{
					// Required for correct parsing of fold parameter
					urlParams['nav'] = (this.graphConfig.nav != false) ? '1' : '0';
					
					this.editor.setGraphXml(this.xmlNode);
					this.graph.border = (this.graphConfig.border != null) ? this.graphConfig.border : 8;
					this.graph.view.scale = this.graphConfig.zoom || 1;
				}
				finally
				{
					this.graph.getModel().endUpdate();
				}
		
				// Adds left-button panning only if scrollbars are visible
				this.graph.panningHandler.useLeftButtonForPanning = true;
				this.graph.panningHandler.isForcePanningEvent = function(me)
				{
					return !mxEvent.isPopupTrigger(me.getEvent()) &&
						this.graph.container.style.overflow == 'auto';
				};
				this.graph.panningHandler.usePopupTrigger = false;
				this.graph.panningHandler.pinchEnabled = false;
				this.graph.panningHandler.ignoreCell = true;
				this.graph.setPanning(false);
		
				this.addSizeHandler();
				this.showLayers(this.graph);
				this.addClickHandler(this.graph);
				this.graph.setTooltips(this.graphConfig.tooltips != false);
				this.graph.initialViewState = {
					translate: this.graph.view.translate.clone(),
					scale: this.graph.view.scale
				};
				
				var self = this;
				
				this.graph.customLinkClicked = function(href)
				{
					var done = true;
					
					if (href.substring(0, 13) == 'data:page/id,')
					{
						var comma = href.indexOf(',');
						
						if (!self.selectPageById(href.substring(comma + 1)))
						{
							done = false;
							alert(mxResources.get('pageNotFound') || 'Page not found');
						}
					}
					else
					{
						this.handleCustomLink(href);
					}
					
					return done;
				};
				
				if (this.graphConfig.toolbar != null)
				{
					this.addToolbar();
				}
				else if (this.graphConfig.title != null && this.showTitleAsTooltip)
				{
					container.setAttribute('title', this.graphConfig.title);
				}
				
				this.fireEvent(new mxEventObject('render'));
			});

			var MutObs = window.MutationObserver ||
				window.WebKitMutationObserver ||
				window.MozMutationObserver;
			
			if (this.checkVisibleState && container.offsetWidth == 0 && typeof MutObs !== 'undefined')
			{
				// Delayed rendering if inside hidden container and event available
				var par = this.getObservableParent(container);
			
				var observer = new MutObs(mxUtils.bind(this, function(mutation)
				{
					if (container.offsetWidth > 0)
					{
						observer.disconnect();
						render();
					}
				}));
				
				observer.observe(par, {attributes: true});
			}
			else
			{
				// Immediate rendering in all other cases
				render();
			}
		}
	}
};

/**
 * 
 */
GraphViewer.prototype.getObservableParent = function(container)
{
	var node = container.parentNode;
	
	while (node != document.body && node.parentNode != null &&
		mxUtils.getCurrentStyle(node).display !== 'none')
	{
		node = node.parentNode;
	}
	
	return node;
};

/**
 * 
 */
GraphViewer.prototype.getImageUrl = function(url)
{
	if (url != null && url.substring(0, 7) != 'http://' &&
		url.substring(0, 8) != 'https://' && url.substring(0, 10) != 'data:image')
	{
		if (url.charAt(0) == '/')
		{
			url = url.substring(1, url.length);
		}
		
		url = this.imageBaseUrl + url;
	}
	
	return url;
};

/**
 * 
 */
GraphViewer.prototype.setXmlNode = function(xmlNode)
{
	this.xmlDocument = xmlNode.ownerDocument;
	this.xml = mxUtils.getXml(xmlNode);
	this.xmlNode = xmlNode;
	
	this.updateGraphXml(xmlNode);
	this.fireEvent(new mxEventObject('xmlNodeChanged'));
};

/**
 * 
 */
GraphViewer.prototype.setFileNode = function(xmlNode)
{
	if (this.xmlNode == null)
	{
		this.xmlDocument = xmlNode.ownerDocument;
		this.xml = mxUtils.getXml(xmlNode);
		this.xmlNode = xmlNode;
	}
	
	this.setGraphXml(xmlNode);
};

/**
 * 
 */
GraphViewer.prototype.updateGraphXml = function(xmlNode)
{
	this.setGraphXml(xmlNode);
	this.fireEvent(new mxEventObject('graphChanged'));
};

/**
 * 
 */
GraphViewer.prototype.setGraphXml = function(xmlNode)
{
	if (this.graph != null)
	{
		this.graph.view.translate = new mxPoint();
		this.graph.view.scale = 1;
		this.graph.getModel().clear();
		this.editor.setGraphXml(xmlNode);
				
		// Restores initial CSS state
		if (this.widthIsEmpty)
		{
			this.graph.container.style.width = '';
			this.graph.container.style.height = '';
		}
		else
		{
			this.graph.container.style.width = this.initialWidth;
		}
		
		this.positionGraph();
		this.graph.initialViewState = {
			translate: this.graph.view.translate.clone(),
			scale: this.graph.view.scale
		};
	}
};

/**
 * 
 */
GraphViewer.prototype.addSizeHandler = function()
{
	var container = this.graph.container;
	var bounds = this.graph.getGraphBounds();
	var updatingOverflow = false;

	if (this.graphConfig['toolbar-nohide'] != true)
	{
		container.style.overflow = 'hidden';
	}
	else
	{
		container.style.overflow = 'visible';
	}
	
	var updateOverflow = mxUtils.bind(this, function()
	{
		if (!updatingOverflow)
		{
			updatingOverflow = true;
			var tmp = this.graph.getGraphBounds();
			
			if (this.graphConfig['toolbar-nohide'] != true)
			{
				if (container.offsetWidth <= tmp.width + 2 * this.graph.border * this.graph.view.scale)
				{
					container.style.overflow = 'auto';
				}
				else
				{
					container.style.overflow = 'hidden';
				}
			}
			else
			{
				container.style.overflow = 'visible';
			}

			if (this.toolbar != null && this.graphConfig['toolbar-nohide'] != true)
			{
				var r = container.getBoundingClientRect();
				
				// Workaround for position:relative set in ResizeSensor
				var origin = mxUtils.getScrollOrigin(document.body)
				var b = (document.body.style.position === 'relative') ? document.body.getBoundingClientRect() :
					{left: -origin.x, top: -origin.y};
				r = {left: r.left - b.left, top: r.top - b.top, bottom: r.bottom - b.top, right: r.right - b.left};
				
				this.toolbar.style.left = r.left + 'px';
				
				if (this.graphConfig['toolbar-position'] == 'bottom')
				{
					this.toolbar.style.top = r.bottom - 1 + 'px';
				}
				else
				{
					if (this.graphConfig['toolbar-position'] != 'inline')
					{
						this.toolbar.style.width = Math.max(this.minToolbarWidth, container.offsetWidth) + 'px';
						this.toolbar.style.top = r.top + 1 + 'px';
					}
					else
					{
						this.toolbar.style.top = r.top + 'px';
					}
				}
			}
			
			updatingOverflow = false;
		}
	});

	var lastOffsetWidth = null;
	var cachedOffsetWidth = null;
	this.handlingResize = false;
	
	// Installs function on instance
	this.fitGraph = mxUtils.bind(this, function(maxScale)
	{
		var cachedOffsetWidth = container.offsetWidth;
		
		if (cachedOffsetWidth != lastOffsetWidth)
		{
			if (!this.handlingResize)
			{
				this.handlingResize = true;

				this.graph.maxFitScale = (maxScale != null) ? maxScale : (this.graphConfig.zoom ||
					((this.allowZoomIn) ? null : 1));
				this.graph.fit(null, null, null, null, false, true);
				this.graph.maxFitScale = null;
				
				var tmp = this.graph.getGraphBounds();
				this.updateContainerHeight(container, Math.max(this.minHeight, tmp.height + 2 * this.graph.border + 1));

				this.graph.initialViewState = {
					translate: this.graph.view.translate.clone(),
					scale: this.graph.view.scale
				};
				
				lastOffsetWidth = cachedOffsetWidth;
				
				// Workaround for fit triggering scrollbars triggering doResize (infinite loop)
				window.setTimeout(mxUtils.bind(this, function()
				{
					this.handlingResize = false;
				}), 0);
			}
		}
	});

	// Fallback for older browsers
	if (GraphViewer.useResizeSensor)
	{
		if (mxClient.IS_QUIRKS || document.documentMode <= 9)
		{
			mxEvent.addListener(window, 'resize', updateOverflow);
			this.graph.addListener('size', updateOverflow);
		}
		else
		{
			new ResizeSensor(this.graph.container, updateOverflow);
		}
	}
	
	if (this.graphConfig.resize || ((this.zoomEnabled || !this.autoFit) && this.graphConfig.resize != false))
	{
		this.graph.minimumContainerSize = new mxRectangle(0, 0, this.minWidth, this.minHeight);
		this.graph.resizeContainer = true;
	}
	else
	{
		// Sets initial size for responsive diagram to stop at actual size
		if (this.widthIsEmpty)
		{
			this.updateContainerWidth(container, bounds.width + 2 * this.graph.border);
		}
		
		this.updateContainerHeight(container, Math.max(this.minHeight, bounds.height + 2 * this.graph.border + 1));

		if (!this.zoomEnabled && this.autoFit)
		{
			var lastOffsetWidth = null;
			var scheduledResize = null;
			var cachedOffsetWidth = null;
			
			var doResize = mxUtils.bind(this, function()
			{
				window.clearTimeout(scheduledResize);
				
				if (!this.handlingResize)
				{
					scheduledResize = window.setTimeout(mxUtils.bind(this, this.fitGraph), 100);
				}
			});
			
			// Fallback for older browsers
			if (GraphViewer.useResizeSensor)
			{
				if (mxClient.IS_QUIRKS || document.documentMode <= 9)
				{
					mxEvent.addListener(window, 'resize', doResize);
				}
				else
				{
					new ResizeSensor(this.graph.container, doResize);
				}
			}
		}
		else if (!(mxClient.IS_QUIRKS || document.documentMode <= 9))
		{
			this.graph.addListener('size', updateOverflow);
		}
	}

	var positionGraph = mxUtils.bind(this, function()
	{
		// Allocates maximum width while setting initial view state
		var prev = container.style.minWidth;
		
		if (this.widthIsEmpty)
		{
			container.style.minWidth = '100%';
		}
		
		if (container.offsetWidth > 0 && (this.allowZoomIn ||
			(bounds.width + 2 * this.graph.border > container.offsetWidth ||
			bounds.height + 2 * this.graph.border > this.graphConfig['max-height'])))
		{
			var maxScale = null;
			
			if (this.graphConfig['max-height'] != null)
			{
				maxScale = this.graphConfig['max-height'] / (bounds.height + 2 * this.graph.border);
			}

			this.fitGraph(maxScale);
		}
		else
		{
			this.graph.view.setTranslate(Math.floor((this.graph.border - bounds.x) / this.graph.view.scale),
				Math.floor((this.graph.border - bounds.y) / this.graph.view.scale));
			lastOffsetWidth = container.offsetWidth;
		}
		
		container.style.minWidth = prev
	});

	if (mxClient.IS_QUIRKS || document.documentMode == 8)
	{
		window.setTimeout(positionGraph, 0);
	}
	else
	{
		positionGraph();
	}

	// Installs function on instance
	this.positionGraph = function()
	{
		bounds = this.graph.getGraphBounds();
		lastOffsetWidth = null;
		positionGraph();
	};
};

/**
 * 
 */
GraphViewer.prototype.updateContainerWidth = function(container, width)
{
	container.style.width = width + 'px';
};

/**
 * 
 */
GraphViewer.prototype.updateContainerHeight = function(container, height)
{
	if (this.zoomEnabled || !this.autoFit || document.compatMode == 'BackCompat' ||
		mxClient.IS_QUIRKS || document.documentMode == 8)
	{
		container.style.height = height + 'px';
	}
};

/**
 * Shows the 
 */
GraphViewer.prototype.showLayers = function(graph, sourceGraph)
{
	var layers = this.graphConfig.layers;
	
	if (layers != null || sourceGraph != null)
	{
		var idx = (layers != null) ? layers.split(' ') : null;
		
		if (sourceGraph != null || idx.length > 0)
		{
			var source = (sourceGraph != null) ? sourceGraph.getModel() : null;
			var model = graph.getModel();
			model.beginUpdate();
			
			try
			{
				var childCount = model.getChildCount(model.root);
				
				// Hides all layers
				for (var i = 0; i < childCount; i++)
				{
					model.setVisible(model.getChildAt(model.root, i),
						(sourceGraph != null) ? source.isVisible(source.getChildAt(source.root, i)) : false);
				}
				
				// Shows specified layers (eg. 0 1 3)
				if (source == null)
				{
					for (var i = 0; i < idx.length; i++)
					{
						model.setVisible(model.getChildAt(model.root, parseInt(idx[i])), true);
					}
				}
			}
			finally
			{
				model.endUpdate();
			}
		}
	}
};

/**
 * 
 */
GraphViewer.prototype.addToolbar = function()
{
	var container = this.graph.container;
	var initialCursor = this.graph.container.style.cursor;
	
	if (this.graphConfig['toolbar-position'] == 'bottom')
	{
		container.style.marginBottom = this.toolbarHeight + 'px';
	}
	else if (this.graphConfig['toolbar-position'] != 'inline')
	{
		container.style.marginTop = this.toolbarHeight + 'px';
	}

	// Creates toolbar for viewer
	var toolbar = container.ownerDocument.createElement('div');
	toolbar.style.position = 'absolute';
	toolbar.style.overflow = 'hidden';
	toolbar.style.boxSizing = 'border-box';
	toolbar.style.whiteSpace = 'nowrap';
	toolbar.style.textAlign = 'left';
	toolbar.style.zIndex = this.toolbarZIndex;
	toolbar.style.backgroundColor = '#eee';
	toolbar.style.height = this.toolbarHeight + 'px';
	this.toolbar = toolbar;
	
	if (this.graphConfig['toolbar-position'] == 'inline')
	{
		mxUtils.setPrefixedStyle(toolbar.style, 'transition', 'opacity 100ms ease-in-out');
		mxUtils.setOpacity(toolbar, 30);
		
		// Changes toolbar opacity on hover
		var fadeThread = null;
		var fadeThread2 = null;
		
		var fadeOut = mxUtils.bind(this, function(delay)
		{
			if (fadeThread != null)
			{
				window.clearTimeout(fadeThread);
				fadeThead = null;
			}
			
			if (fadeThread2 != null)
			{
				window.clearTimeout(fadeThread2);
				fadeThead2 = null;
			}
			
			fadeThread = window.setTimeout(mxUtils.bind(this, function()
			{
			 	mxUtils.setOpacity(toolbar, 0);
				fadeThread = null;
			 	
				fadeThread2 = window.setTimeout(mxUtils.bind(this, function()
				{
					toolbar.style.display = 'none';
					fadeThread2 = null;
				}), 100);
			}), delay || 200);
		});
		
		var fadeIn = mxUtils.bind(this, function(opacity)
		{
			if (fadeThread != null)
			{
				window.clearTimeout(fadeThread);
				fadeThead = null;
			}
			
			if (fadeThread2 != null)
			{
				window.clearTimeout(fadeThread2);
				fadeThead2 = null;
			}
			
			toolbar.style.display = '';
			mxUtils.setOpacity(toolbar, opacity || 30);
		});
		
		mxEvent.addListener(this.graph.container, (mxClient.IS_POINTER) ? 'pointermove' : 'mousemove', mxUtils.bind(this, function(evt)
		{
			if (!mxEvent.isTouchEvent(evt))
			{
				fadeIn(30);
				fadeOut();
			}
		}));
		
		mxEvent.addListener(toolbar, (mxClient.IS_POINTER) ? 'pointermove' : 'mousemove', function(evt)
		{
			mxEvent.consume(evt);
		});
		
		mxEvent.addListener(toolbar, 'mouseenter', mxUtils.bind(this, function(evt)
		{
			fadeIn(100);
		}));

		mxEvent.addListener(toolbar, 'mousemove',  mxUtils.bind(this, function(evt)
		{
			fadeIn(100);
			mxEvent.consume(evt);
		}));

		mxEvent.addListener(toolbar, 'mouseleave',  mxUtils.bind(this, function(evt)
		{
			if (!mxEvent.isTouchEvent(evt))
			{
				fadeIn(30);
			}
		}));
		
		// Shows/hides toolbar for touch devices
		var graph = this.graph;
		var tol = graph.getTolerance();

		graph.addMouseListener(
		{
		    startX: 0,
		    startY: 0,
		    scrollLeft: 0,
		    scrollTop: 0,
		    mouseDown: function(sender, me)
		    {
		    	this.startX = me.getGraphX();
		    	this.startY = me.getGraphY();
			    this.scrollLeft = graph.container.scrollLeft;
			    this.scrollTop = graph.container.scrollTop;
		    },
		    mouseMove: function(sender, me) {},
		    mouseUp: function(sender, me)
		    {
		    	if (mxEvent.isTouchEvent(me.getEvent()))
		    	{
			    	if ((Math.abs(this.scrollLeft - graph.container.scrollLeft) < tol &&
			    		Math.abs(this.scrollTop - graph.container.scrollTop) < tol) &&
			    		(Math.abs(this.startX - me.getGraphX()) < tol &&
			    		Math.abs(this.startY - me.getGraphY()) < tol))
			    	{
			    		if (parseFloat(toolbar.style.opacity || 0) > 0)
			    		{
			    			fadeOut();
			    		}
			    		else
			    		{
			    			fadeIn(30);
			    		}
					}
		    	}
		    }
		});
	}
	
	var tokens = this.toolbarItems;
	var buttonCount = 0;
	
	function addButton(fn, imgSrc, tip, enabled)
	{
		var a = document.createElement('div');
		a.style.borderRight = '1px solid #d0d0d0';
		a.style.padding = '3px 6px 3px 6px';
		mxEvent.addListener(a, 'click', fn);

		if (tip != null)
		{
			a.setAttribute('title', tip);
		}
		
		if (mxClient.IS_QUIRKS)
		{
			a.style.display = 'inline';
		}
		else
		{
			a.style.display = 'inline-block';
		}
		
		var img = document.createElement('img');
		img.setAttribute('border', '0');
		img.setAttribute('src', imgSrc);
		
		if (enabled == null || enabled)
		{
			mxEvent.addListener(a, 'mouseenter', function()
			{
				a.style.backgroundColor = '#ddd';
			});
			
			mxEvent.addListener(a, 'mouseleave', function()
			{
				a.style.backgroundColor = '#eee';
			});

			mxUtils.setOpacity(img, 60);
			a.style.cursor = 'pointer';
		}
		else
		{
			mxUtils.setOpacity(a, 30);
		}
		
		a.appendChild(img);
		toolbar.appendChild(a);
		
		buttonCount++;
		
		return a;
	};

	var layersDialog = null;
	var layersDialogEntered = false;
	var pageInfo = null;
	
	for (var i = 0; i < tokens.length; i++)
	{
		var token = tokens[i];
		
		if (token == 'pages')
		{
			pageInfo = container.ownerDocument.createElement('div');
			pageInfo.style.cssText = 'display:inline-block;position:relative;padding:3px 4px 0 4px;' +
				'vertical-align:top;font-family:Helvetica,Arial;font-size:12px;top:4px;cursor:default;'
			mxUtils.setOpacity(pageInfo, 70);
			
			var prevButton = addButton(mxUtils.bind(this, function()
			{
				this.selectPage(this.currentPage - 1);
			}), Editor.previousImage, mxResources.get('previousPage') || 'Previous Page');

			prevButton.style.borderRightStyle = 'none';
			prevButton.style.paddingLeft = '0px';
			prevButton.style.paddingRight = '0px';
			toolbar.appendChild(pageInfo);

			var nextButton = addButton(mxUtils.bind(this, function()
			{
				this.selectPage(this.currentPage + 1);
			}), Editor.nextImage, mxResources.get('nextPage') || 'Next Page');
			
			nextButton.style.paddingLeft = '0px';
			nextButton.style.paddingRight = '0px';
			
			var lastXmlNode = null;
			
			var update = mxUtils.bind(this, function()
			{
				pageInfo.innerHTML = '';
				mxUtils.write(pageInfo, (this.currentPage + 1) + ' / ' + this.diagrams.length);
				pageInfo.style.display = (this.diagrams.length > 1) ? 'inline-block' : 'none';
				prevButton.style.display = pageInfo.style.display;
				nextButton.style.display = pageInfo.style.display;
			});
			
			// LATER: Add event for setGraphXml
			this.addListener('graphChanged', update);
			update();
		}
		else if (token == 'zoom')
		{
			if (this.zoomEnabled)
			{
				addButton(mxUtils.bind(this, function()
				{
					this.graph.zoomOut();
				}), Editor.zoomOutImage, mxResources.get('zoomOut') || 'Zoom Out');

				addButton(mxUtils.bind(this, function()
				{
					this.graph.zoomIn();
				}), Editor.zoomInImage, mxResources.get('zoomIn') || 'Zoom In');

				addButton(mxUtils.bind(this, function()
				{
					this.graph.view.scaleAndTranslate(this.graph.initialViewState.scale,
						this.graph.initialViewState.translate.x,
						this.graph.initialViewState.translate.y);
				}), Editor.zoomFitImage, mxResources.get('fit') || 'Fit');
			}
		}
		else if (token == 'layers')
		{
			if (this.layersEnabled)
			{
				var model = this.graph.getModel();

				var layersButton = addButton(mxUtils.bind(this, function(evt)
				{
					if (layersDialog != null)
					{
						layersDialog.parentNode.removeChild(layersDialog);
						layersDialog = null;
					}
					else
					{
						layersDialog = this.graph.createLayersDialog();
						
						mxEvent.addListener(layersDialog, 'mouseleave', function()
						{
							layersDialog.parentNode.removeChild(layersDialog);
							layersDialog = null;
						});
						
						var r = layersButton.getBoundingClientRect();

						layersDialog.style.width = '140px';
						layersDialog.style.padding = '2px 0px 2px 0px';
						layersDialog.style.border = '1px solid #d0d0d0';
						layersDialog.style.backgroundColor = '#eee';
						layersDialog.style.fontFamily = 'Helvetica Neue,Helvetica,Arial Unicode MS,Arial';
						layersDialog.style.fontSize = '11px';
						layersDialog.style.zIndex = this.toolbarZIndex + 1;
						mxUtils.setOpacity(layersDialog, 80);
						var origin = mxUtils.getDocumentScrollOrigin(document);
						layersDialog.style.left = origin.x + r.left + 'px';
						layersDialog.style.top = origin.y + r.bottom + 'px';
						
						document.body.appendChild(layersDialog);
					}
				}), Editor.layersImage, mxResources.get('layers') || 'Layers');
				
				model.addListener(mxEvent.CHANGE, function()
				{
					layersButton.style.display = (model.getChildCount(model.root) > 1) ? 'inline-block' : 'none';
				});
				
				layersButton.style.display = (model.getChildCount(model.root) > 1) ? 'inline-block' : 'none';
			}
		}
		else if (token == 'lightbox')
		{
			if (this.lightboxEnabled)
			{
				addButton(mxUtils.bind(this, function()
				{
					this.showLightbox();
				}), Editor.maximizeImage, (mxResources.get('show') || 'Show'));
			}
		}
		else if (this.graphConfig['toolbar-buttons'] != null)
		{
			var def = this.graphConfig['toolbar-buttons'][token];
			
			if (def != null)
			{
				addButton((def.enabled == null || def.enabled) ? def.handler : function() {},
					def.image, def.title, def.enabled);
			}
		}
	}
	
	if (this.graph.minimumContainerSize != null)
	{
		this.graph.minimumContainerSize.width = buttonCount * 34;
	}
	
	if (this.graphConfig.title != null)
	{
		var filename = container.ownerDocument.createElement('div');
		filename.style.cssText = 'display:inline-block;position:relative;padding:3px 6px 0 6px;' +
			'vertical-align:top;font-family:Helvetica,Arial;font-size:12px;top:4px;cursor:default;'
		filename.setAttribute('title', this.graphConfig.title);
		mxUtils.write(filename, this.graphConfig.title);
		mxUtils.setOpacity(filename, 70);
		
		toolbar.appendChild(filename);
	}
	
	this.minToolbarWidth = buttonCount * 34;
	var prevBorder = container.style.border;
	
	var enter = mxUtils.bind(this, function()
	{
		toolbar.style.width = (this.graphConfig['toolbar-position'] == 'inline') ? 'auto' :
			Math.max(this.minToolbarWidth, container.offsetWidth) + 'px';
		toolbar.style.border = '1px solid #d0d0d0';

		if (this.graphConfig['toolbar-nohide'] != true)
		{
			var r = container.getBoundingClientRect();
	
			// Workaround for position:relative set in ResizeSensor
			var origin = mxUtils.getScrollOrigin(document.body)
			var b = (document.body.style.position === 'relative') ? document.body.getBoundingClientRect() :
				{left: -origin.x, top: -origin.y};
			r = {left: r.left - b.left, top: r.top - b.top, bottom: r.bottom - b.top, right: r.right - b.left};
			
			toolbar.style.left = r.left + 'px';

			if (this.graphConfig['toolbar-position'] == 'bottom')
			{
				toolbar.style.top = r.bottom - 1 + 'px';
			}
			else
			{
				if (this.graphConfig['toolbar-position'] != 'inline')
				{
					toolbar.style.marginTop = -this.toolbarHeight + 'px';
					toolbar.style.top = r.top + 1 + 'px';
				}
				else
				{
					toolbar.style.top = r.top + 'px';
				}
			}
			
			if (prevBorder == '1px solid transparent')
			{
				container.style.border = '1px solid #d0d0d0';
			}
			
			document.body.appendChild(toolbar);

			var hideToolbar = mxUtils.bind(this, function()
			{
				if (toolbar.parentNode != null)
				{
					toolbar.parentNode.removeChild(toolbar);
				}
				
				if (layersDialog != null)
				{
					layersDialog.parentNode.removeChild(layersDialog);
					layersDialog = null;
				}
				
				container.style.border = prevBorder;
			});
			
			mxEvent.addListener(document, 'mousemove', function(evt)
			{
				var source = mxEvent.getSource(evt);
				
				while (source != null)
				{
					if (source == container || source == toolbar || source == layersDialog)
					{
						return;
					}
					
					source = source.parentNode;
				}
				
				hideToolbar();
			});
			
			mxEvent.addListener(document, 'mouseleave', function(evt)
			{
				hideToolbar();
			});
		}
		else
		{
			toolbar.style.top = -this.toolbarHeight + 'px';
			container.appendChild(toolbar);
		}
	});
	
	if (this.graphConfig['toolbar-nohide'] != true)
	{
		mxEvent.addListener(container, 'mouseenter', enter);
	}
	else
	{
		enter();
	}
};

/**
 * Adds event handler for links and lightbox.
 */
GraphViewer.prototype.addClickHandler = function(graph, ui)
{
	graph.linkPolicy = this.graphConfig.target || graph.linkPolicy;

	graph.addClickHandler(this.graphConfig.highlight, mxUtils.bind(this, function(evt, href)
	{
		if (href == null)
		{
			var source = mxEvent.getSource(evt);
		
			if (source.nodeName.toLowerCase() == 'a')
			{
				href = source.getAttribute('href');
			}
		}
		
		if (ui != null)
		{
			if (href != null && !(graph.isExternalProtocol(href) || graph.isBlankLink(href)))
			{
				// Hides lightbox if any links are clicked
				// Async handling needed for anchors to work
				window.setTimeout(function()
				{
					ui.destroy();
				}, 0);
			}
		}
		else if (href != null && ui == null && graph.isCustomLink(href) &&
			(mxEvent.isTouchEvent(evt) || !mxEvent.isPopupTrigger(evt)) &&
			graph.customLinkClicked(href))
		{
			mxEvent.consume(evt);
		}
	}), mxUtils.bind(this, function(evt)
	{
		if (ui == null && this.lightboxClickEnabled &&
			(!mxEvent.isTouchEvent(evt) ||
			this.toolbarItems.length == 0))
		{
			this.showLightbox();
		}
	}));
};

/**
 * Adds the given array of stencils to avoid dynamic loading of shapes.
 */
GraphViewer.prototype.showLightbox = function(editable, closable, target)
{
	if (this.graphConfig.lightbox == 'open' || window.self !== window.top)
	{
		if (this.lightboxWindow != null && !this.lightboxWindow.closed)
		{
			this.lightboxWindow.focus();
		}
		else
		{
			editable = (editable != null) ? editable :
				((this.graphConfig.editable != null) ?
					this.graphConfig.editable : true);
			closable = (closable != null) ? closable : true;
			target = (target != null) ? target : 'blank';
			
			var param = {'client': 1, 'lightbox': 1, 'target': target};
		    
			if (editable)
			{
				param.edit = this.graphConfig.edit || '_blank';
			}
		    
			if (closable)
			{
		    		param.close = 1;
			}

			if (this.layersEnabled)
			{
		    		param.layers = 1;
			}
			
			if (this.graphConfig != null && this.graphConfig.nav != false)
			{
				param.nav = 1;
			}
			
			if (this.graphConfig != null && this.graphConfig.highlight != null)
			{
				param.highlight = this.graphConfig.highlight.substring(1);
			}
			
			if (this.currentPage != null && this.currentPage > 0)
			{
				param.page = this.currentPage;
			}

			if (typeof window.postMessage !== 'undefined' && (document.documentMode == null || document.documentMode >= 10))
			{	
				if (this.lightboxWindow == null)
				{
					mxEvent.addListener(window, 'message', mxUtils.bind(this, function(evt)
					{
						if (evt.data == 'ready' && evt.source == this.lightboxWindow)
						{
							this.lightboxWindow.postMessage(this.xml, '*');
						}
					}));					
				}
			}
			else
			{
				// Data is pulled from global variable after tab loads
				param.data = encodeURIComponent(this.xml);
			}
			
			var domain = 'www.draw.io';
			
			if (urlParams['dev'] == '1')
			{
				param.dev = '1';
				param.drawdev = '1';
				domain = 'test.draw.io';
			}
			
		    this.lightboxWindow = window.open('https://' + domain +
		    		'/#P' + encodeURIComponent(JSON.stringify(param)));
		}
	}
	else
	{
		this.showLocalLightbox();
	}
};

/**
 * Adds the given array of stencils to avoid dynamic loading of shapes.
 */
GraphViewer.prototype.showLocalLightbox = function()
{
	var origin = mxUtils.getDocumentScrollOrigin(document);
	var backdrop = document.createElement('div');

	if (mxClient.IS_QUIRKS)
	{
		backdrop.style.position = 'absolute';
		backdrop.style.left = origin.x + 'px';
		backdrop.style.top = origin.y + 'px';
		backdrop.style.width = document.body.offsetWidth + 'px';
		backdrop.style.height = document.body.offsetHeight + 'px';
	}
	else
	{
		backdrop.style.cssText = 'position:fixed;top:0;left:0;bottom:0;right:0;';
	}

	backdrop.style.zIndex = this.lightboxZIndex;
	backdrop.style.backgroundColor = '#000000';
	mxUtils.setOpacity(backdrop, 70);
	
	document.body.appendChild(backdrop);
	
	var closeImg = document.createElement('img');
	closeImg.setAttribute('border', '0');
	closeImg.setAttribute('src', Editor.closeImage);
	
	if (mxClient.IS_QUIRKS)
	{
		closeImg.style.position = 'absolute';
		closeImg.style.right = 32 + 'px';
		closeImg.style.top = origin.y + 32 + 'px';
	}
	else
	{
		closeImg.style.cssText = 'position:fixed;top:32px;right:32px;';
	}
	
	closeImg.style.cursor = 'pointer';
	
	mxEvent.addListener(closeImg, 'click', function()
	{
		ui.destroy();
	});
	
	// LATER: Make possible to assign after instance was created
	urlParams['pages'] = '1';
	urlParams['page'] = this.currentPage;
	urlParams['nav'] = (this.graphConfig.nav != false) ? '1' : '0';
	urlParams['layers'] = (this.layersEnabled) ? '1' : '0';
	
	// PostMessage not working and Permission denied for opened access in IE9-
	if (document.documentMode == null || document.documentMode >= 10)
	{
		Editor.prototype.editButtonLink = this.graphConfig.edit;
		Editor.prototype.editButtonFunc = this.graphConfig.editFunc;
	}
	
	EditorUi.prototype.updateActionStates = function() {};
	EditorUi.prototype.addBeforeUnloadListener = function() {};
	EditorUi.prototype.addChromelessClickHandler = function() {};
	
	// Workaround for lost reference with same ID (cannot override after instance is created)
	Graph.prototype.shadowId = 'lightboxDropShadow';
	
	var ui = new EditorUi(new Editor(true), document.createElement('div'), true);
	ui.editor.editBlankUrl = this.editBlankUrl;
	
	// Workaround for lost reference with same ID
	Graph.prototype.shadowId = 'dropShadow';
	
	// Disables refresh
	ui.refresh = function() {};
	
	// Handles escape keystroke
	var keydownHandler = mxUtils.bind(this, function(evt)
	{
		if (evt.keyCode == 27 /* Escape */)
		{
			ui.destroy();
		}
	});

	var destroy = ui.destroy;
	ui.destroy = function()
	{
		mxEvent.removeListener(document.documentElement, 'keydown', keydownHandler);
		document.body.removeChild(backdrop);
		document.body.removeChild(closeImg);
		document.body.style.overflow = 'auto';
		GraphViewer.resizeSensorEnabled = true;
		
		destroy.apply(this, arguments);
	};
	
	var graph = ui.editor.graph;
	var lightbox = graph.container;
	lightbox.style.overflow = 'hidden';
	
	if (this.lightboxChrome)
	{
		lightbox.style.border = '1px solid #c0c0c0';
		lightbox.style.margin = '40px';

		// Installs the keystroke listener in the target
		mxEvent.addListener(document.documentElement, 'keydown', keydownHandler);
	}
	else
	{
		backdrop.style.display = 'none';
		closeImg.style.display = 'none';
	}
	
	// Handles relative images
	var self = this;
	
	graph.getImageFromBundles = function(key)
	{
		return self.getImageUrl(key);
	};
	
	// Handles relative images in print output and temporary graphs
	var uiCreateTemporaryGraph = ui.createTemporaryGraph;
	
	ui.createTemporaryGraph = function()
	{
		var graph = uiCreateTemporaryGraph.apply(this, arguments);
		
		graph.getImageFromBundles = function(key)
		{
			return self.getImageUrl(key);
		};
		
		return graph;
	};
	
	if (this.graphConfig.move)
	{
		graph.isMoveCellsEvent = function(evt)
		{
			return true;
		};
	}
	
	if (!mxClient.IS_QUIRKS)
	{
		mxUtils.setPrefixedStyle(lightbox.style, 'border-radius', '4px');
		lightbox.style.position = 'fixed';
	}
	
	GraphViewer.resizeSensorEnabled = false;
	document.body.style.overflow = 'hidden';

	// Workaround for possible rendering issues
	if (!mxClient.IS_SF && !mxClient.IS_EDGE)
	{
		mxUtils.setPrefixedStyle(lightbox.style, 'transform', 'rotateY(90deg)');
		mxUtils.setPrefixedStyle(lightbox.style, 'transition', 'all .25s ease-in-out');
	}
	
	this.addClickHandler(graph, ui);

	window.setTimeout(mxUtils.bind(this, function()
	{
		// Disables focus border in Chrome
		lightbox.style.outline = 'none';
		lightbox.style.zIndex = this.lightboxZIndex;
		closeImg.style.zIndex = this.lightboxZIndex;

		document.body.appendChild(lightbox);
		document.body.appendChild(closeImg);
		
		ui.setFileData(this.xml);

		mxUtils.setPrefixedStyle(lightbox.style, 'transform', 'rotateY(0deg)');
		ui.chromelessToolbar.style.bottom = 60 + 'px';
		ui.chromelessToolbar.style.zIndex = this.lightboxZIndex;
		
		// Workaround for clipping in IE11-
		document.body.appendChild(ui.chromelessToolbar);
	
		ui.getEditBlankXml = mxUtils.bind(this, function()
		{
			return this.xml;
		});
	
		if (mxClient.IS_QUIRKS)
		{
			lightbox.style.position = 'absolute';
			lightbox.style.display = 'block';
			lightbox.style.left = origin.x + 'px';
			lightbox.style.top = origin.y + 'px';
			lightbox.style.width = document.body.clientWidth - 80 + 'px';
			lightbox.style.height = document.body.clientHeight - 80 + 'px';
			lightbox.style.backgroundColor = 'white';
			
			ui.chromelessToolbar.style.display = 'block';
			ui.chromelessToolbar.style.position = 'absolute';
			ui.chromelessToolbar.style.bottom = '';
			ui.chromelessToolbar.style.top = origin.y +
				document.body.clientHeight - 100 + 'px';
		}
		
		ui.lightboxFit();
		ui.chromelessResize();
		this.showLayers(graph, this.graph);
		
		// Click on backdrop closes lightbox
		mxEvent.addListener(backdrop, 'click', function()
		{
			ui.destroy();
		});
	}), 0);

	return ui;
};

/**
 * 
 */
GraphViewer.processElements = function(classname)
{
	mxUtils.forEach(GraphViewer.getElementsByClassName(classname || 'mxgraph'), function(div)
	{
		try
		{
			div.innerHTML = '';
			GraphViewer.createViewerForElement(div);
		}
		catch (e)
		{
			div.innerHTML = e.message;
			throw e;
		}
	});
};

/**
 * Adds the given array of stencils to avoid dynamic loading of shapes.
 */
GraphViewer.getElementsByClassName = function(classname)
{
	if (document.getElementsByClassName)
	{
		var divs = document.getElementsByClassName(classname);
		
		// Workaround for changing divs while processing
		var result = [];
		
		for (var i = 0; i < divs.length; i++)
		{
			result.push(divs[i]);
		}
		
		return result;
	}
	else
	{
		var tmp = document.getElementsByTagName('*');
		var divs = [];
	
		for (var i = 0; i < tmp.length; i++)
		{
			var cls = tmp[i].className;

			if (cls != null && cls.length > 0)
			{
				var tokens = cls.split(' ');
				
				if (mxUtils.indexOf(tokens, classname) >= 0)
				{
					divs.push(tmp[i]);
				}
			}
		}

		return divs;
	}
};

/**
 * Adds the given array of stencils to avoid dynamic loading of shapes.
 */
GraphViewer.createViewerForElement = function(element, callback)
{
	var data = element.getAttribute('data-mxgraph');
	
	if (data != null)
	{
		var config = JSON.parse(data);
		
		var createViewer = function(xml)
		{
			var xmlDoc = mxUtils.parseXml(xml);
			var viewer = new GraphViewer(element, xmlDoc.documentElement, config);
			
			if (callback != null)
			{
				callback(viewer);
			}
		};

		if (config.url != null)
		{
			GraphViewer.getUrl(config.url, function(xml)
			{
				createViewer(xml);
			});
		}
		else
		{
			createViewer(config.xml);
		}
	}
};

/**
 * Adds event if grid size is changed.
 */
GraphViewer.initCss = function()
{
	try
	{
		var style = document.createElement('style')
		style.type = 'text/css';
		style.innerHTML = ['div.mxTooltip {',
			'-webkit-box-shadow: 3px 3px 12px #C0C0C0;',
			'-moz-box-shadow: 3px 3px 12px #C0C0C0;',
			'box-shadow: 3px 3px 12px #C0C0C0;',
			'background: #FFFFCC;',
			'border-style: solid;',
			'border-width: 1px;',
			'border-color: black;',
			'font-family: Arial;',
			'font-size: 8pt;',
			'position: absolute;',
			'cursor: default;',
			'padding: 4px;',
			'color: black;}',
			'td.mxPopupMenuIcon div {',
			'width:16px;',
			'height:16px;}',
			'html div.mxPopupMenu {',
			'-webkit-box-shadow:2px 2px 3px #d5d5d5;',
			'-moz-box-shadow:2px 2px 3px #d5d5d5;',
			'box-shadow:2px 2px 3px #d5d5d5;',
			'_filter:progid:DXImageTransform.Microsoft.DropShadow(OffX=2, OffY=2, Color=\'#d0d0d0\',Positive=\'true\');',
			'background:white;',
			'position:absolute;',
			'border:3px solid #e7e7e7;',
			'padding:3px;}',
			'html table.mxPopupMenu {',
			'border-collapse:collapse;',
			'margin:0px;}',
			'html td.mxPopupMenuItem {',
			'padding:7px 30px 7px 30px;',
			'font-family:Helvetica Neue,Helvetica,Arial Unicode MS,Arial;',
			'font-size:10pt;}',
			'html td.mxPopupMenuIcon {',
			'background-color:white;',
			'padding:0px;}',
			'td.mxPopupMenuIcon .geIcon {',
			'padding:2px;',
			'padding-bottom:4px;',
			'margin:2px;',
			'border:1px solid transparent;',
			'opacity:0.5;',
			'_width:26px;',
			'_height:26px;}',
			'td.mxPopupMenuIcon .geIcon:hover {',
			'border:1px solid gray;',
			'border-radius:2px;',
			'opacity:1;}',
			'html tr.mxPopupMenuItemHover {',
			'background-color: #eeeeee;',
			'color: black;}',
			'table.mxPopupMenu hr {',
			'color:#cccccc;',
			'background-color:#cccccc;',
			'border:none;',
			'height:1px;}',
			'table.mxPopupMenu tr {	font-size:4pt;}',
			// Modified to only apply to the print dialog
			'.geDialog { font-family:Helvetica Neue,Helvetica,Arial Unicode MS,Arial;',
			'font-size:10pt;',
			'border:none;',
			'margin:0px;}',
			// These are required for the print dialog
			'.geDialog {	position:absolute;	background:white;	overflow:hidden;	padding:30px;	border:1px solid #acacac;	-webkit-box-shadow:0px 0px 2px 2px #d5d5d5;	-moz-box-shadow:0px 0px 2px 2px #d5d5d5;	box-shadow:0px 0px 2px 2px #d5d5d5;	_filter:progid:DXImageTransform.Microsoft.DropShadow(OffX=2, OffY=2, Color=\'#d5d5d5\', Positive=\'true\');	z-index: 2;}.geDialogClose {	position:absolute;	width:9px;	height:9px;	opacity:0.5;	cursor:pointer;	_filter:alpha(opacity=50);}.geDialogClose:hover {	opacity:1;}.geDialogTitle {	box-sizing:border-box;	white-space:nowrap;	background:rgb(229, 229, 229);	border-bottom:1px solid rgb(192, 192, 192);	font-size:15px;	font-weight:bold;	text-align:center;	color:rgb(35, 86, 149);}.geDialogFooter {	background:whiteSmoke;	white-space:nowrap;	text-align:right;	box-sizing:border-box;	border-top:1px solid #e5e5e5;	color:darkGray;}',
			'.geBtn {	background-color: #f5f5f5;	border-radius: 2px;	border: 1px solid #d8d8d8;	color: #333;	cursor: default;	font-size: 11px;	font-weight: bold;	height: 29px;	line-height: 27px;	margin: 0 0 0 8px;	min-width: 72px;	outline: 0;	padding: 0 8px;	cursor: pointer;}.geBtn:hover, .geBtn:focus {	-webkit-box-shadow: 0px 1px 1px rgba(0,0,0,0.1);	-moz-box-shadow: 0px 1px 1px rgba(0,0,0,0.1);	box-shadow: 0px 1px 1px rgba(0,0,0,0.1);	border: 1px solid #c6c6c6;	background-color: #f8f8f8;	background-image: linear-gradient(#f8f8f8 0px,#f1f1f1 100%);	color: #111;}.geBtn:disabled {	opacity: .5;}.gePrimaryBtn {	background-color: #4d90fe;	background-image: linear-gradient(#4d90fe 0px,#4787ed 100%);	border: 1px solid #3079ed;	color: #fff;}.gePrimaryBtn:hover, .gePrimaryBtn:focus {	background-color: #357ae8;	background-image: linear-gradient(#4d90fe 0px,#357ae8 100%);	border: 1px solid #2f5bb7;	color: #fff;}.gePrimaryBtn:disabled {	opacity: .5;}'].join('\n');
		document.getElementsByTagName('head')[0].appendChild(style);
	}
	catch (e)
	{
		// ignore
	}
};

/**
 * Lookup for URLs.
 */
GraphViewer.cachedUrls = {};

/**
 * Workaround for unsupported CORS in IE9 XHR
 */
GraphViewer.getUrl = function(url, onload, onerror)
{
	if (GraphViewer.cachedUrls[url] != null)
	{
		onload(GraphViewer.cachedUrls[url]);
	}
	else
	{
		var xhr = (navigator.userAgent.indexOf('MSIE 9') > 0) ? new XDomainRequest() : new XMLHttpRequest();
		xhr.open('GET', url);
		
	    xhr.onload = function()
	    {
	    	onload((xhr.getText != null) ? xhr.getText() : xhr.responseText);
		};
		
	    xhr.onerror = onerror;
	    xhr.send();
	}
};

/**
 * Redirects editing to absolue URLs.
 */
GraphViewer.resizeSensorEnabled = true;

/**
 * Redirects editing to absolue URLs.
 */
GraphViewer.useResizeSensor = true;

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function() {

    // Only used for the dirty checking, so the event callback count is limted to max 1 call per fps per sensor.
    // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
    // would generate too many unnecessary events.
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (fn) {
            return window.setTimeout(fn, 20);
        };

    /**
     * Class for dimension change detection.
     *
     * @param {Element|Element[]|Elements|jQuery} element
     * @param {Function} callback
     *
     * @constructor
     */
    var ResizeSensor = function(element, fn) {
    	
    	var callback = function()
    	{
    		if (GraphViewer.resizeSensorEnabled)
    		{
    			fn();
    		}
    	};
    	
        /**
         *
         * @constructor
         */
        function EventQueue() {
            this.q = [];
            this.add = function(ev) {
                this.q.push(ev);
            };

            var i, j;
            this.call = function() {
                for (i = 0, j = this.q.length; i < j; i++) {
                    this.q[i].call();
                }
            };
        }

        /**
         * @param {HTMLElement} element
         * @param {String}      prop
         * @returns {String|Number}
         */
        function getComputedStyle(element, prop) {
            if (element.currentStyle) {
                return element.currentStyle[prop];
            } else if (window.getComputedStyle) {
                return window.getComputedStyle(element, null).getPropertyValue(prop);
            } else {
                return element.style[prop];
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {Function}    resized
         */
        function attachResizeEvent(element, resized) {
            if (!element.resizedAttached) {
                element.resizedAttached = new EventQueue();
                element.resizedAttached.add(resized);
            } else if (element.resizedAttached) {
                element.resizedAttached.add(resized);
                return;
            }

            element.resizeSensor = document.createElement('div');
            element.resizeSensor.className = 'resize-sensor';
            var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
            var styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';

            element.resizeSensor.style.cssText = style;
            element.resizeSensor.innerHTML =
                '<div class="resize-sensor-expand" style="' + style + '">' +
                    '<div style="' + styleChild + '"></div>' +
                '</div>' +
                '<div class="resize-sensor-shrink" style="' + style + '">' +
                    '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' +
                '</div>';
            element.appendChild(element.resizeSensor);

            // FIXME: Should not change element style
            if (getComputedStyle(element, 'position') == 'static') {
                element.style.position = 'relative';
            }

            var expand = element.resizeSensor.childNodes[0];
            var expandChild = expand.childNodes[0];
            var shrink = element.resizeSensor.childNodes[1];

            var reset = function() {
                expandChild.style.width  = 100000 + 'px';
                expandChild.style.height = 100000 + 'px';

                expand.scrollLeft = 100000;
                expand.scrollTop = 100000;

                shrink.scrollLeft = 100000;
                shrink.scrollTop = 100000;
            };

            reset();
            var dirty = false;

            var dirtyChecking = function() {
                if (!element.resizedAttached) return;

                if (dirty) {
                    element.resizedAttached.call();
                    dirty = false;
                }

                requestAnimationFrame(dirtyChecking);
            };

            requestAnimationFrame(dirtyChecking);
            var lastWidth, lastHeight;
            var cachedWidth, cachedHeight; //useful to not query offsetWidth twice

            var onScroll = function() {
              if ((cachedWidth = element.offsetWidth) != lastWidth || (cachedHeight = element.offsetHeight) != lastHeight) {
                  dirty = true;

                  lastWidth = cachedWidth;
                  lastHeight = cachedHeight;
              }
              reset();
            };

            var addEvent = function(el, name, cb) {
                if (el.attachEvent) {
                    el.attachEvent('on' + name, cb);
                } else {
                    el.addEventListener(name, cb);
                }
            };

            addEvent(expand, 'scroll', onScroll);
            addEvent(shrink, 'scroll', onScroll);
        }

        var elementType = Object.prototype.toString.call(element);
        var isCollectionTyped = ('[object Array]' === elementType
            || ('[object NodeList]' === elementType)
            || ('[object HTMLCollection]' === elementType)
            || ('undefined' !== typeof jQuery && element instanceof jQuery) //jquery
            || ('undefined' !== typeof Elements && element instanceof Elements) //mootools
        );

        if (isCollectionTyped) {
            var i = 0, j = element.length;
            for (; i < j; i++) {
                attachResizeEvent(element[i], callback);
            }
        } else {
            attachResizeEvent(element, callback);
        }

        this.detach = function() {
            if (isCollectionTyped) {
                var i = 0, j = element.length;
                for (; i < j; i++) {
                    ResizeSensor.detach(element[i]);
                }
            } else {
                ResizeSensor.detach(element);
            }
        };
    };

    ResizeSensor.detach = function(element) {
        if (element.resizeSensor) {
            element.removeChild(element.resizeSensor);
            delete element.resizeSensor;
            delete element.resizedAttached;
        }
    };

    window.ResizeSensor = ResizeSensor;
})();
