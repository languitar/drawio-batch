/**
 * Plugin for embed mode in Confluence Connect post version 1.4.8
 */
Draw.loadPlugin(function(ui)
{
	// Extracts macro data from JSON protocol
	var macroData = {};
	
	mxEvent.addListener(window, 'message', mxUtils.bind(this, function(evt)
	{
		var data = evt.data;

		try
		{
			data = JSON.parse(data);
			
			if (data.action == 'load')
			{
				if (data.macroData != null) 
				{
					macroData = data.macroData;

					if (ui.format != null)
					{
						ui.format.refresh();
					}
					
					//Prefetch comments
					ui.getComments(function(){}, function(){});
				}
				
				macroData.diagramDisplayName = data.title;
			}
		}
		catch (e)
		{
			data = null;
		}
	}));

	var renameAction = ui.actions.get("rename"); 

	renameAction.visible = true;
	
	renameAction.isEnabled = function()
	{
		return macroData.diagramDisplayName != null;
	}
	
	renameAction.funct = function()
	{
		var dlg = new FilenameDialog(ui, macroData.diagramDisplayName || "",
				mxResources.get('rename'), function(newName)
		{
			if (newName != null && newName.length > 0)
			{
				macroData.diagramDisplayName = newName;
				var parent = window.opener || window.parent;
				parent.postMessage(JSON.stringify({event: 'rename', name: newName}), '*'); 
				//Update file name in the UI
				var tmp = document.createElement('span');
				mxUtils.write(tmp, mxUtils.htmlEntities(newName));
				
				if (ui.embedFilenameSpan != null)
				{
					ui.embedFilenameSpan.parentNode.removeChild(ui.embedFilenameSpan);
				}

				ui.buttonContainer.appendChild(tmp);
				ui.embedFilenameSpan = tmp;
			}
		}, mxResources.get('rename'), function(name)
		{
			var err = "";
			if (name == null || name.length == 0)
			{
				err = 'Filename too short';
			}
			else if (/[&\*+=\\;/{}|\":<>\?~]/g.test(name))
			{        
				err = 'Invalid characters \\ / | : { } < > & + ? = ; * " ~';
			}
			else
			{
				return true;
			}
			
			ui.showError(mxResources.get('error'), err, mxResources.get('ok'));
			return false;
		});
		ui.showDialog(dlg.container, 300, 80, true, true);
		dlg.init();
	}

	// Returns modified macro data to client
	var uiCreateLoadMessage = ui.createLoadMessage;
	
	ui.createLoadMessage = function(eventName)
	{
		var msg = uiCreateLoadMessage.apply(this, arguments);
		
		if (eventName == 'export')
		{
			msg.macroData = macroData;
			msg.comments = confComments;
		}

		return msg;
	};

	// Adds new section for confluence cloud
	var diagramFormatPanelInit = DiagramFormatPanel.prototype.init;
	
	DiagramFormatPanel.prototype.init = function()
	{
		this.container.appendChild(this.addViewerOptions(this.createPanel()));
		
		diagramFormatPanelInit.apply(this, arguments);
	};

	// Adds viewer config to style options and refreshes
	DiagramFormatPanel.prototype.addViewerOptions = function(div)
	{
		var ui = this.editorUi;
		var editor = ui.editor;
		var graph = editor.graph;
	
		div.appendChild(this.createTitle(mxResources.get('viewerSettings')));	
		
		// Viewer simple
		div.appendChild(this.createOption(mxResources.get('simpleViewer'), function()
		{
			return macroData.simple == '1';
		}, function(checked)
		{
			macroData.simple = (checked) ? '1' : '0';
		}));

		// Viewer lightbox
		div.appendChild(this.createOption(mxResources.get('lightbox'), function()
		{
			return macroData.lbox != '0';
		}, function(checked)
		{
			macroData.lbox = (checked) ? '1' : '0';
		}));

		// Toolbar
		var stylePanel = this.createPanel();
		stylePanel.style.position = 'relative';
		stylePanel.style.borderWidth = '0px';
		stylePanel.style.marginLeft = '0px';
		stylePanel.style.paddingTop = '8px';
		stylePanel.style.paddingBottom = '4px';
		stylePanel.style.fontWeight = 'normal';
		stylePanel.className = 'geToolbarContainer';

		mxUtils.write(stylePanel, mxResources.get('toolbar'));
		
		// Adds toolbar options
		var tbSelect = document.createElement('select');
		tbSelect.style.position = 'absolute';
		tbSelect.style.right = '20px';
		tbSelect.style.width = '97px';
		tbSelect.style.marginTop = '-2px';
		
		var opts = [{value: 'top', title: mxResources.get('top')},
			{value: 'inline', title: mxResources.get('embed')},
			{value: 'hidden', title: mxResources.get('hidden')}]
		var validTb = false;

		for (var i = 0; i < opts.length; i++)
		{
			validTb = validTb || macroData.tbstyle == opts[i].value;
			var tbOption = document.createElement('option');
			tbOption.setAttribute('value', opts[i].value);
			mxUtils.write(tbOption, opts[i].title);
			tbSelect.appendChild(tbOption);
		}
		
		tbSelect.value = (validTb) ? macroData.tbstyle : 'top';
		stylePanel.appendChild(tbSelect);
		div.appendChild(stylePanel);
		
		mxEvent.addListener(tbSelect, 'change', function(evt)
		{
			macroData.tbstyle = tbSelect.value;
			mxEvent.consume(evt);
		});

		// Links
		stylePanel = stylePanel.cloneNode(false);
		stylePanel.style.paddingTop = '4px';
		mxUtils.write(stylePanel, mxResources.get('links'));
		
		// Adds links options
		var linksSelect = document.createElement('select');
		linksSelect.style.position = 'absolute';
		linksSelect.style.right = '20px';
		linksSelect.style.width = '97px';
		linksSelect.style.marginTop = '-2px';

		var opts = [{value: 'auto', title: mxResources.get('automatic')},
			{value: 'blank', title: mxResources.get('openInNewWindow')},
			{value: 'self', title: mxResources.get('openInThisWindow')}]
		var validLinks = false;

		for (var i = 0; i < opts.length; i++)
		{
			validLinks = validLinks || macroData.links == opts[i].value;
			var linkOption = document.createElement('option');
			linkOption.setAttribute('value', opts[i].value);
			mxUtils.write(linkOption, opts[i].title);
			linksSelect.appendChild(linkOption);
		}
		
		linksSelect.value = (validLinks) ? macroData.links : 'auto';
		stylePanel.appendChild(linksSelect);
		div.appendChild(stylePanel);
		
		mxEvent.addListener(linksSelect, 'change', function(evt)
		{
			macroData.links = linksSelect.value;
			mxEvent.consume(evt);
		});

		// Zoom
		var zoomOpt = this.createRelativeOption(mxResources.get('zoom'), null, null, function(input)
		{
			var value = (input.value == '') ? 100 : parseInt(input.value);
			value = Math.max(0, (isNaN(value)) ? 100 : value);
			input.value = value + ' %';
			macroData.zoom = value / 100;
		}, function(input)
		{
			input.value = (parseFloat(macroData.zoom || 1) * 100) + '%';
		});
		
		zoomOpt.style.fontWeight = 'normal';
		zoomOpt.style.paddingBottom = '6px';
		zoomOpt.style.paddingTop = '6px';
		zoomOpt.style.border = 'none';
		
		div.appendChild(zoomOpt);
		
		return div;
	};
	
	if (ui.format != null)
	{
		ui.format.refresh();
	}
	
	//Adding Link to Confluence Page Anchor
	
	var origLinkDialog = LinkDialog;
	
	LinkDialog = function(editorUi, initialValue, btnLabel, fn, showPages)
	{
		function modFn(link, selDoc)
		{
			if (anchorRadio.checked)
			{
				fn('data:confluence/anchor,' + anchorInput.value);
			}
			else 
			{
				fn(link, selDoc);
			}
		};
		
		origLinkDialog.call(this, editorUi, initialValue, btnLabel, modFn, showPages);
		
		var inner = this.container.querySelector('.geTitle');
		
		var lbl = document.createElement('div');
		mxUtils.write(lbl, mxResources.get('confAnchor', null, 'Confluence Page Anchor') + ':');
		inner.appendChild(lbl);
		
		var anchorRadio = document.createElement('input');
		anchorRadio.style.cssText = 'margin-right:8px;margin-bottom:8px;';
		anchorRadio.setAttribute('value', 'url');
		anchorRadio.setAttribute('type', 'radio');
		anchorRadio.setAttribute('name', 'current-linkdialog');
		
		var anchorInput = document.createElement('input');
		anchorInput.setAttribute('placeholder', mxResources.get('confAnchor', null, 'Confluence Page Anchor'));
		anchorInput.setAttribute('type', 'text');
		anchorInput.style.marginTop = '6px';
		anchorInput.style.width = '420px';
		anchorInput.style.backgroundImage = 'url(\'' + Dialog.prototype.clearImage + '\')';
		anchorInput.style.backgroundRepeat = 'no-repeat';
		anchorInput.style.backgroundPosition = '100% 50%';
		anchorInput.style.paddingRight = '14px';

		var cross = document.createElement('div');
		cross.setAttribute('title', mxResources.get('reset'));
		cross.style.position = 'relative';
		cross.style.left = '-16px';
		cross.style.width = '12px';
		cross.style.height = '14px';
		cross.style.cursor = 'pointer';
		
		// Workaround for inline-block not supported in IE
		cross.style.display = (mxClient.IS_VML) ? 'inline' : 'inline-block';
		cross.style.top = ((mxClient.IS_VML) ? 0 : 3) + 'px';
		
		// Needed to block event transparency in IE
		cross.style.background = 'url(\'' + editorUi.editor.transparentImage + '\')';

		mxEvent.addListener(cross, 'click', function()
		{
			anchorInput.value = '';
			anchorInput.focus();
		});
		
		if (initialValue != null && initialValue.substring(0, 23) == 'data:confluence/anchor,')
		{
			inner.querySelector('input[type="text"]').value = '';
			anchorInput.setAttribute('value', initialValue.substring(23));
			anchorRadio.setAttribute('checked', 'checked');
			anchorRadio.defaultChecked = true;
		}
		
		mxEvent.addListener(anchorInput, 'focus', function()
		{
			anchorRadio.setAttribute('checked', 'checked');
			anchorRadio.checked = true;
		});
		
		mxEvent.addListener(anchorInput, 'keypress', function(e)
		{
			if (e.keyCode == 13 && anchorRadio.checked) //We cannot get other inputs precisely
			{
				editorUi.hideDialog();
				fn('data:confluence/anchor,' + anchorInput.value);
			}
		});
		
		inner.appendChild(anchorRadio);
		inner.appendChild(anchorInput);
		inner.appendChild(cross);
		
		var origInit = this.init;
		
		this.init = function()
		{
			origInit.call(this);
			
			if (anchorRadio.checked)
			{
				anchorInput.focus();
			}
		};
	};

	mxUtils.extend(LinkDialog, origLinkDialog);
	
	ui.showLinkDialog = function(value, btnLabel, fn)
	{
		var dlg = new LinkDialog(this, value, btnLabel, fn, true);
		this.showDialog(dlg.container, 480, 165, true, true);
		dlg.init();
	};
	
	//Viewer also had to change this in viewer (Graph.prototype.customLinkClicked)
	var origHandleCustomLink = ui.handleCustomLink;
	
	//This code is similar to AC.gotoAnchor but we don't have access to AC here
	ui.handleCustomLink = function(href)
	{
		if (href.substring(0, 23) == 'data:confluence/anchor,')
		{
			var anchor = href.substring(23);
			
			var newWin = window.open();
			
			if (anchor)
			{
				ui.remoteInvoke('getPageInfo', [false], null, function(info)
				{
					var url = info.url;
					
					if (url != null)
					{
						//remove any hash
						var hash = url.indexOf('#');
						
						if (hash > -1)
						{
							url = url.substring(0, hash);
						}
						
						newWin.location = url + '#' + encodeURI(info.title.replace(/\s/g, '') + '-' + anchor.replace(/\s/g, ''));
					}
				}, function()
				{
					throw new Error('Unexpected Error');
				});
			}
			else
			{
				throw new Error('Empty Anchor');
			}
		}
		else
		{
			origHandleCustomLink.call(ui, href);
		}
	};
	
	var origGetLinkTitle = ui.getLinkTitle;
	
	ui.getLinkTitle = function(href)
	{
		if (href.substring(0, 23) == 'data:confluence/anchor,')
		{
			return mxResources.get('anchor', null, 'Anchor') + ': ' + href.substring(23);
		}
		else
		{
			return origGetLinkTitle.call(ui, href);
		}
	};
	
	//Comments

	function setModified()
	{
		ui.editor.setStatus(mxUtils.htmlEntities(mxResources.get('unsavedChanges')));
		ui.editor.setModified(true);	
	};
	
	var confUser = null;
	var confComments = null;
	
	ui.getCurrentUser = function()
	{
		if (confUser == null)
		{
			ui.remoteInvoke('getCurrentUser', null, null, function(user)
			{
				confUser = new DrawioUser(user.id, user.email, user.displayName, user.pictureUrl);
			}, function()
			{
				//ignore such that next call we retry
			});
			
			//Return a dummy user until we have the actual user in order for UI to be populated
			return new DrawioUser(Date.now(), null, 'Anonymous');
		}
		
		return confUser;
	};
	
	
	ui.commentsSupported = function()
	{
		return true;
	};
	
	ui.commentsRefreshNeeded = function()
	{
		return false;
	};

	function confCommentToDrawio(cComment, pCommentId)
	{
		var comment = new DrawioComment(null, cComment.id, cComment.content, 
				cComment.modifiedDate, cComment.createdDate, cComment.isResolved,
				new DrawioUser(cComment.user.id, cComment.user.email,
						cComment.user.displayName, cComment.user.pictureUrl), pCommentId);
		
		for (var i = 0; cComment.replies != null && i < cComment.replies.length; i++)
		{
			comment.addReplyDirect(confCommentToDrawio(cComment.replies[i], cComment.id));
		}
		
		return comment;
	};
			
	ui.getComments = function(success, error)
	{
		if (confComments == null)
		{
			ui.remoteInvoke('getComments', [macroData.contentId], null, function(comments)
			{
				confComments = [];
				
				for (var i = 0; i < comments.length; i++)
				{
					confComments.push(confCommentToDrawio(comments[i]));
				}
				
				success(confComments);
			}, error);
		}
		else
		{
			success(confComments);
		}
	};

	ui.addComment = function(comment, success, error)
	{
		setModified();
		success(confUser.id + ':' + Date.now()); 
	};
			
	ui.newComment = function(content, user)
	{
		return new DrawioComment(null, null, content, Date.now(), Date.now(), false, user); //remove file information
	};
	
	//In Confluence, comments are part of the file (specifically custom contents), so needs to mark as changed with every change
	DrawioComment.prototype.addReply = function(reply, success, error, doResolve, doReopen)
	{
		setModified();
		success();
	};

	DrawioComment.prototype.editComment = function(newContent, success, error)
	{
		setModified();
		success();
	};

	DrawioComment.prototype.deleteComment = function(success, error)
	{
		setModified();
		success();
	};
	
	//Prefetch current user 
	ui.getCurrentUser();
});
