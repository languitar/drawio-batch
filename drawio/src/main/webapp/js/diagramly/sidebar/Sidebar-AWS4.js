(function()
{
	// Adds mockup shapes
	Sidebar.prototype.addAWS4Palette = function()
	{
		var pts = 'points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];';
		var n = pts + 'outlineConnect=0;fontColor=#232F3E;strokeColor=#ffffff;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3E;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n3 = 'outlineConnect=0;gradientColor=none;fontColor=#545B64;strokeColor=none;fillColor=#879196;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n4 = pts + 'outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n5 = 'gradientDirection=north;outlineConnect=0;fontColor=#232F3E;gradientColor=#505863;fillColor=#1E262E;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var gn = 'mxgraph.aws4';
		var sb = this;

		var s = 1;
		var w = s * 100;
		var h = s * 100;
		var w2 = s * 78;
		
		this.addAWS4ArrowsPalette(s, gn, sb);
		this.addAWS4GeneralResourcesPalette(s, gn, sb);
		this.addAWS4IllustrationsPalette(s, n3, gn, sb);
		this.addAWS4GroupsPalette(s, gn, sb, pts);
		this.addAWS4AnalyticsPalette(s, w, h, w2, gn, sb);
		this.addAWS4ApplicationIntegrationPalette(s, w, h, w2, gn, sb);
		this.addAWS4ARVRPalette(s, w, h, w2, gn, sb);
		this.addAWS4CostManagementPalette(s, w, h, w2, gn, sb);
		this.addAWS4BlockchainPalette(s, w, h, w2, gn, sb);
		this.addAWS4BusinessApplicationsPalette(s, w, h, w2, gn, sb);
		this.addAWS4EC2InstanceTypePalette(s, w, h, w2, gn, sb);
		this.addAWS4ComputePalette(s, w, h, w2, gn, sb);
		this.addAWS4CustomerEngagementPalette(s, w, h, w2, gn, sb);
		this.addAWS4DatabasePalette(s, w, h, w2, gn, sb);
		this.addAWS4DesktopAppStreamingPalette(s, w, h, w2, gn, sb);
		this.addAWS4DeveloperToolsPalette(s, w, h, w2, gn, sb);
		this.addAWS4GameTechPalette(s, w, h, w2, gn, sb);
		this.addAWS4InternetOfThingsPalette(s, w, h, w2, gn, sb);
		this.addAWS4MachineLearningPalette(s, w, h, w2, gn, sb);
		this.addAWS4ManagementGovernancePalette(s, w, h, w2, gn, sb);
		this.addAWS4MediaServicesPalette(s, w, h, w2, gn, sb);
		this.addAWS4MigrationTransferPalette(s, w, h, w2, gn, sb);
		this.addAWS4MobilePalette(s, w, h, w2, gn, sb);
		this.addAWS4NetworkContentDeliveryPalette(s, w, h, w2, gn, sb);
		this.addAWS4RoboticsPalette(s, w, h, w2, gn, sb);
		this.addAWS4SatellitePalette(s, w, h, w2, gn, sb);
		this.addAWS4SecurityIdentityCompliancePalette(s, w, h, w2, gn, sb);
		this.addAWS4StoragePalette(s, w, h, w2, gn, sb);
	};
	
	Sidebar.prototype.addAWS4ArrowsPalette = function(s, gn, sb)
	{
		var dt = 'aws amazon web service arrows';
		
		this.addPaletteFunctions('aws4Arrows', 'AWS / Arrows', false,
		[
			this.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;html=1;endArrow=none;elbow=vertical;startArrow=block;startFill=1;strokeColor=#545B64;rounded=0;', 
					s * 100, s * 0, '', 'Default (left)', null, this.getTagsForStencil(gn, '', dt + 'default left').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;html=1;endArrow=block;elbow=vertical;startArrow=none;endFill=1;strokeColor=#545B64;rounded=0;', 
					s * 100, s * 0, '', 'Default (left)', null, this.getTagsForStencil(gn, '', dt + 'default left').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;html=1;endArrow=block;elbow=vertical;startArrow=block;startFill=1;endFill=1;strokeColor=#545B64;rounded=0;', 
					s * 100, s * 0, '', 'Default (double)', null, this.getTagsForStencil(gn, '', dt + 'default double').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;html=1;endArrow=none;elbow=vertical;startArrow=openThin;startFill=0;strokeColor=#545B64;rounded=0;', 
					s * 100, s * 0, '', 'Open (thin, left)', null, this.getTagsForStencil(gn, '', dt + 'open thin left').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;html=1;endArrow=openThin;elbow=vertical;startArrow=none;endFill=0;strokeColor=#545B64;rounded=0;', 
					s * 100, s * 0, '', 'Open (thin, left)', null, this.getTagsForStencil(gn, '', dt + 'open thin left').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;html=1;endArrow=openThin;elbow=vertical;startArrow=openThin;startFill=0;endFill=0;strokeColor=#545B64;rounded=0;', 
					s * 100, s * 0, '', 'Open (thin, double)', null, this.getTagsForStencil(gn, '', dt + 'open thin double').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;html=1;endArrow=none;elbow=vertical;startArrow=open;startFill=0;strokeColor=#545B64;rounded=0;', 
					s * 100, s * 0, '', 'Open (left)', null, this.getTagsForStencil(gn, '', dt + 'open left').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;html=1;endArrow=open;elbow=vertical;startArrow=none;endFill=0;strokeColor=#545B64;rounded=0;', 
					s * 100, s * 0, '', 'Open (left)', null, this.getTagsForStencil(gn, '', dt + 'open left').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;html=1;endArrow=open;elbow=vertical;startArrow=open;startFill=0;endFill=0;strokeColor=#545B64;rounded=0;', 
					s * 100, s * 0, '', 'Open (double)', null, this.getTagsForStencil(gn, '', dt + 'open double').join(' '))
		]);
	};

	Sidebar.prototype.addAWS4GeneralResourcesPalette = function(s, gn, sb)
	{
		var dt = 'aws amazon web service general resources';
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3E;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#5A6C86;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n3 = 'gradientDirection=north;outlineConnect=0;fontColor=#232F3E;gradientColor=#505863;fillColor=#1E262E;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		
		this.addPaletteFunctions('aws4General Resources', 'AWS / General Resources', false,
		[
			 this.createVertexTemplateEntry(n3 + 'resourceIcon;resIcon=' + gn + '.marketplace;',
					 s * 78, s * 78, '', 'Marketplace', null, null, this.getTagsForStencil(gn, 'marketplace', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'aws_cloud;',
					 s * 78, s * 78, '', 'AWS Cloud', null, null, this.getTagsForStencil(gn, 'cloud', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'client;',
					 s * 78, s * 76, '', 'Client', null, null, this.getTagsForStencil(gn, 'client', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'corporate_data_center;',
					 s * 53, s * 78, '', 'Corporate Data Center', null, null, this.getTagsForStencil(gn, 'corporate data center', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'disk;',
					 s * 78, s * 78, '', 'Disk', null, null, this.getTagsForStencil(gn, 'disk', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'forums;',
					 s * 78, s * 76, '', 'Forums', null, null, this.getTagsForStencil(gn, 'forums', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'generic_database;',
					 s * 59, s * 78, '', 'Generic Database', null, null, this.getTagsForStencil(gn, 'generic database', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'internet;',
					 s * 78, s * 48, '', 'Internet', null, null, this.getTagsForStencil(gn, 'internet', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'internet_alt1;',
					 s * 78, s * 75, '', 'Internet', null, null, this.getTagsForStencil(gn, 'internet', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'internet_alt2;',
					 s * 78, s * 78, '', 'Internet Gateway', null, null, this.getTagsForStencil(gn, 'internet gateway', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'mobile_client;',
					 s * 41, s * 78, '', 'Mobile Client', null, null, this.getTagsForStencil(gn, 'mobile client', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'multimedia;',
					 s * 78, s * 73, '', 'Multimedia', null, null, this.getTagsForStencil(gn, 'multimedia', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'office_building;',
					 s * 50, s * 78, '', 'Office Building', null, null, this.getTagsForStencil(gn, 'office building', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'saml_token;',
					 s * 78, s * 78, '', 'SAML Token', null, null, this.getTagsForStencil(gn, 'saml token', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'ssl_padlock;',
					 s * 78, s * 76, '', 'SSL Padlock', null, null, this.getTagsForStencil(gn, 'ssl padlock', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'tape_storage;',
					 s * 78, s * 38, '', 'Tape Storage', null, null, this.getTagsForStencil(gn, 'tape storage', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'traditional_server;',
					 s * 45, s * 78, '', 'Traditional Server', null, null, this.getTagsForStencil(gn, 'traditional server', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'user;',
					 s * 78, s * 78, '', 'User', null, null, this.getTagsForStencil(gn, 'user', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'users;',
					 s * 78, s * 78, '', 'Users', null, null, this.getTagsForStencil(gn, 'users', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'external_toolkit;',
					 s * 68, s * 78, '', 'Toolkit', null, null, this.getTagsForStencil(gn, 'external toolkit', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'external_sdk;',
					 s * 68, s * 78, '', 'SDK', null, null, this.getTagsForStencil(gn, 'external sdk software development kit', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'virtual_private_cloud;',
					 s * 78, s * 48, '', 'Virtual Private Cloud', null, null, this.getTagsForStencil(gn, 'virtual private cloud vpc', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4IllustrationsPalette = function(s, n3, gn, sb)
	{
		var dt = 'aws amazon web service illustrations';
		
		this.addPaletteFunctions('aws4Illustrations', 'AWS / Illustrations', false,
		[
			 this.createVertexTemplateEntry(n3 + 'illustration_users;',
					 s * 100, s * 100, 'users', null, null, null, this.getTagsForStencil(gn, 'users', dt).join(' ')),
			 this.createVertexTemplateEntry(n3 + 'illustration_notification;',
					 s * 100, s * 81, 'notification', null, null, null, this.getTagsForStencil(gn, 'users', dt).join(' ')),
			 this.createVertexTemplateEntry(n3 + 'illustration_devices;',
					 s * 100, s * 73, 'devices', null, null, null, this.getTagsForStencil(gn, 'devices', dt).join(' ')),
			 this.createVertexTemplateEntry(n3 + 'illustration_desktop;',
					 s * 100, s * 91, 'desktop', null, null, null, this.getTagsForStencil(gn, 'desktop', dt).join(' ')),
			 this.createVertexTemplateEntry(n3 + 'illustration_office_building;',
					 s * 100, s * 71, 'office building', null, null, null, this.getTagsForStencil(gn, 'office building', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4GroupsPalette = function(s, gn, sb, pts)
	{
		var n4 = pts + 'outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service groups group';
		
		this.addPaletteFunctions('aws4Groups', 'AWS / Groups', false,
		[
			 this.createVertexTemplateEntry(n4 + 'group;grIcon=' + gn + '.group_aws_cloud_alt;strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;',
					 s * 130, s * 130, 'AWS Cloud', null, null, null, this.getTagsForStencil(gn, 'cloud', dt).join(' ')),
			 this.createVertexTemplateEntry(n4 + 'group;grIcon=' + gn + '.group_aws_cloud;strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;',
					 s * 130, s * 130, 'AWS Cloud', null, null, null, this.getTagsForStencil(gn, 'cloud', dt).join(' ')),
			 this.createVertexTemplateEntry(n4 + 'group;grIcon=' + gn + '.group_region;strokeColor=#147EBA;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#147EBA;dashed=0;',
					 s * 130, s * 130, 'Region', null, null, null, this.getTagsForStencil(gn, 'region', dt).join(' ')),
			 this.createVertexTemplateEntry('fillColor=none;strokeColor=#147EBA;dashed=1;verticalAlign=top;fontStyle=0;fontColor=#147EBA;',
					 s * 130, s * 130, 'Availability Zone', null, null, null, this.getTagsForStencil(gn, 'availability zone', dt).join(' ')),
			 this.createVertexTemplateEntry('fillColor=none;strokeColor=#DD3522;verticalAlign=top;fontStyle=0;fontColor=#DD3522;',
					 s * 130, s * 130, 'Security group', null, null, null, this.getTagsForStencil(gn, 'security', dt).join(' ')),
			 this.createVertexTemplateEntry(n4 + 'groupCenter;grIcon=' + gn + '.group_auto_scaling_group;grStroke=1;strokeColor=#D86613;fillColor=none;verticalAlign=top;align=center;fontColor=#D86613;dashed=1;spacingTop=25;',
					 s * 130, s * 130, 'Auto Scaling group', null, null, null, this.getTagsForStencil(gn, 'auto scaling', dt).join(' ')),
			 this.createVertexTemplateEntry(n4 + 'group;grIcon=' + gn + '.group_vpc;strokeColor=#248814;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#AAB7B8;dashed=0;',
					 s * 130, s * 130, 'VPC', null, null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud', dt).join(' ')),
			 this.createVertexTemplateEntry(n4 + 'group;grIcon=' + gn + '.group_security_group;grStroke=0;strokeColor=#147EBA;fillColor=#E6F2F8;verticalAlign=top;align=left;spacingLeft=30;fontColor=#147EBA;dashed=0;',
					 s * 130, s * 130, 'Private subnet', null, null, null, this.getTagsForStencil(gn, 'private subnet', dt).join(' ')),
			 this.createVertexTemplateEntry(n4 + 'group;grIcon=' + gn + '.group_security_group;grStroke=0;strokeColor=#248814;fillColor=#E9F3E6;verticalAlign=top;align=left;spacingLeft=30;fontColor=#248814;dashed=0;',
					 s * 130, s * 130, 'Public subnet', null, null, null, this.getTagsForStencil(gn, 'public subnet', dt).join(' ')),
			 this.createVertexTemplateEntry(n4 + 'group;grIcon=' + gn + '.group_on_premise;strokeColor=#5A6C86;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#5A6C86;dashed=0;',
					 s * 130, s * 130, 'Server contents', null, null, null, this.getTagsForStencil(gn, 'server contents', dt).join(' ')),
			 this.createVertexTemplateEntry(n4 + 'group;grIcon=' + gn + '.group_corporate_data_center;strokeColor=#5A6C86;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#5A6C86;dashed=0;',
					 s * 130, s * 130, 'Corporate data center', null, null, null, this.getTagsForStencil(gn, 'corporate data center', dt).join(' ')),
			 this.createVertexTemplateEntry(n4 + 'group;grIcon=' + gn + '.group_elastic_beanstalk;strokeColor=#D86613;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#D86613;dashed=0;',
					 s * 130, s * 130, 'Elastic Beanstalk container', null, null, null, this.getTagsForStencil(gn, 'elastic beanstalk container', dt).join(' ')),
			 this.createVertexTemplateEntry(n4 + 'group;grIcon=' + gn + '.group_ec2_instance_contents;strokeColor=#D86613;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#D86613;dashed=0;',
					 s * 130, s * 130, 'EC2 instance contents', null, null, null, this.getTagsForStencil(gn, 'ec2 instance contents', dt).join(' ')),
			 this.createVertexTemplateEntry(n4 + 'group;grIcon=' + gn + '.group_spot_fleet;strokeColor=#D86613;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#D86613;dashed=0;',
					 s * 130, s * 130, 'Spot Fleet', null, null, null, this.getTagsForStencil(gn, 'spot fleet', dt).join(' ')),
			 this.createVertexTemplateEntry(n4 + 'group;grIcon=' + gn + '.group_aws_step_functions_workflow;strokeColor=#CD2264;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#CD2264;dashed=0;',
					 s * 130, s * 130, 'AWS Step Functions workflow', null, null, null, this.getTagsForStencil(gn, 'step function', dt).join(' ')),
			 this.createVertexTemplateEntry('fillColor=none;strokeColor=#5A6C86;dashed=1;verticalAlign=top;fontStyle=0;fontColor=#5A6C86;',
					 s * 130, s * 130, 'Generic group', null, null, null, this.getTagsForStencil(gn, 'generic', dt).join(' ')),
			 this.createVertexTemplateEntry('fillColor=#EFF0F3;strokeColor=none;dashed=0;verticalAlign=top;fontStyle=0;fontColor=#232F3D;',
					 s * 130, s * 130, 'Generic group', null, null, null, this.getTagsForStencil(gn, 'generic', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4AnalyticsPalette = function(s, w, h, w2, gn, sb, pts)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#5A30B5;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service analytics';
		
		this.addPaletteFunctions('aws4Analytics', 'AWS / Analytics', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.athena;',
					 w2, w2, '', 'Athena', null, null, this.getTagsForStencil(gn, 'athena', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.cloudsearch;',
					 w2, w2, '', 'CloudSearch', null, null, this.getTagsForStencil(gn, 'cloudsearch', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elasticsearch_service;',
					 w2, w2, '', 'ElasticSearch Service', null, null, this.getTagsForStencil(gn, 'elasticsearch service', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.emr;',
					 w2, w2, '', 'EMR', null, null, this.getTagsForStencil(gn, 'emr', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.kinesis;',
					 w2, w2, '', 'Kinesis', null, null, this.getTagsForStencil(gn, 'kinesis', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.kinesis_data_analytics;',
					 w2, w2, '', 'Kinesis Data Analytics', null, null, this.getTagsForStencil(gn, 'kinesis data analytics', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.kinesis_data_firehose;',
					 w2, w2, '', 'Kinesis Data Firehose', null, null, this.getTagsForStencil(gn, 'kinesis data firehose', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.kinesis_data_streams;',
					 w2, w2, '', 'Kinesis Data Streams', null, null, this.getTagsForStencil(gn, 'kinesis data streams', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.kinesis_video_streams;',
					 w2, w2, '', 'Kinesis Video Streams', null, null, this.getTagsForStencil(gn, 'kinesis video streams', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.quicksight;',
					 w2, w2, '', 'QuickSight', null, null, this.getTagsForStencil(gn, 'quicksight quick sight', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.redshift;',
					 w2, w2, '', 'Redshift', null, null, this.getTagsForStencil(gn, 'redshift', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.analytics;',
					 w2, w2, '', 'Analytics', null, null, this.getTagsForStencil(gn, 'analytics', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.data_pipeline;',
					 w2, w2, '', 'Data Pipeline', null, null, this.getTagsForStencil(gn, 'data pipeline', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.managed_streaming_for_kafka;',
					 w2, w2, '', 'Managed Streaming for Kafka', null, null, this.getTagsForStencil(gn, 'managed streaming for kafka', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.glue;',
					 w2, w2, '', 'Glue', null, null, this.getTagsForStencil(gn, 'glue', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.lake_formation;',
					 w2, w2, '', 'Lake Formation', null, null, this.getTagsForStencil(gn, 'lake formation', dt).join(' ')),
					 
			 this.createVertexTemplateEntry(n + 'search_documents;',
					 s * 68, s * 78, '', 'Search Documents', null, null, this.getTagsForStencil(gn, 'search documents', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'cluster;',
					 s * 78, s * 78, '', 'EMR Cluster', null, null, this.getTagsForStencil(gn, 'emr cluster', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'emr_engine;',
					 s * 78, s * 59, '', 'EMR Engine', null, null, this.getTagsForStencil(gn, 'emr engine', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'emr_engine_mapr_m3;',
					 s * 78, s * 59, '', 'EMR Engine MapR M3', null, null, this.getTagsForStencil(gn, 'emr engine mapr m3', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'emr_engine_mapr_m5;',
					 s * 78, s * 59, '', 'EMR Engine MapR M5', null, null, this.getTagsForStencil(gn, 'emr engine mapr m5', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'emr_engine_mapr_m7;',
					 s * 78, s * 59, '', 'EMR Engine MapR M7', null, null, this.getTagsForStencil(gn, 'emr engine mapr m7', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'hdfs_cluster;',
					 s * 78, s * 78, '', 'HDFS Cluster', null, null, this.getTagsForStencil(gn, 'hdfs cluster', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'dense_compute_node;',
					 s * 78, s * 78, '', 'Dense Compute Node', null, null, this.getTagsForStencil(gn, 'dense compute node', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'dense_storage_node;',
					 s * 78, s * 78, '', 'Dense Storage Node', null, null, this.getTagsForStencil(gn, 'dense storage node', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'glue_crawlers;',
					 s * 78, s * 78, '', 'Glue Crawlers', null, null, this.getTagsForStencil(gn, 'glue crawlers', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'glue_data_catalog;',
					 s * 72, s * 78, '', 'Glue Data Catalog', null, null, this.getTagsForStencil(gn, 'glue data catalog', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4ApplicationIntegrationPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#BC1356;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service application integration';
		
		this.addPaletteFunctions('aws4Application Integration', 'AWS / Application Integration', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.mq;',
					 w2, w2, '', 'MQ', null, null, this.getTagsForStencil(gn, 'mq', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.sns;',
					 w2, w2, '', 'Simple Notification System', null, null, this.getTagsForStencil(gn, 'sns simple notification system', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.sqs;',
					 w2, w2, '', 'Simple Queue System', null, null, this.getTagsForStencil(gn, 'sqs simple queue system', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.application_integration;',
					 w2, w2, '', 'Application Integration', null, null, this.getTagsForStencil(gn, 'application integration', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.appsync;',
					 w2, w2, '', 'AppSync', null, null, this.getTagsForStencil(gn, 'appsync', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.step_functions;',
					 w2, w2, '', 'Step Functions', null, null, this.getTagsForStencil(gn, 'step functions', dt).join(' ')),
					 
			 this.createVertexTemplateEntry(n + 'email_notification;',
					 s * 78, s * 78, '', 'Email Notification', null, null, this.getTagsForStencil(gn, 'email notification', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'http_notification;',
					 s * 78, s * 78, '', 'HTTP Notification', null, null, this.getTagsForStencil(gn, 'http notification', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'topic;',
					 s * 78, s * 67, '', 'Topic', null, null, this.getTagsForStencil(gn, 'topic', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'message;',
					 s * 76, s * 78, '', 'Message', null, null, this.getTagsForStencil(gn, 'message', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'queue;',
					 s * 78, s * 47, '', 'Queue', null, null, this.getTagsForStencil(gn, 'queue', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4ARVRPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#BC1356;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service ar vr augmented virtual reality';
		
		this.addPaletteFunctions('aws4AR VR', 'AWS / AR & VR', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.sumerian;',
					 w2, w2, '', 'Sumerian', null, null, this.getTagsForStencil(gn, 'sumerian', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.ar_vr;',
					 w2, w2, '', 'AR VR', null, null, this.getTagsForStencil(gn, 'ar vr augmented virtual reality', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4CostManagementPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#277116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service cost management';
		
		this.addPaletteFunctions('aws4Cost Management', 'AWS / Cost Management', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.budgets;',
					 w2, w2, '', 'Budgets', null, null, this.getTagsForStencil(gn, 'budgets', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.cost_and_usage_report;',
					 w2, w2, '', 'Cost and Usage Report', null, null, this.getTagsForStencil(gn, 'cost and usage report', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.cost_explorer;',
					 w2, w2, '', 'Cost Explorer', null, null, this.getTagsForStencil(gn, 'cost explorer', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.cost_management;',
					 w2, w2, '', 'Cost Management', null, null, this.getTagsForStencil(gn, 'cost management', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.reserved_instance_reporting;',
					 w2, w2, '', 'Reserved Instance Reporting', null, null, this.getTagsForStencil(gn, 'reserved instance reporting', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4BlockchainPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D05C17;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service cost management';
		
		this.addPaletteFunctions('aws4Blockchain', 'AWS / Blockchain', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.managed_blockchain;',
					 w2, w2, '', 'Managed Blockchain', null, null, this.getTagsForStencil(gn, 'managed blockchain', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.quantum_ledger_database;',
					 w2, w2, '', 'Quantum Ledger Database', null, null, this.getTagsForStencil(gn, 'quantum ledger database', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.blockchain;',
					 w2, w2, '', 'Blockchain', null, null, this.getTagsForStencil(gn, 'blockchain', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4BusinessApplicationsPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C7131F;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service business applications';
		
		this.addPaletteFunctions('aws4Business Applications', 'AWS / Applications', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.alexa_for_business;',
					 w2, w2, '', 'Alexa for Business', null, null, this.getTagsForStencil(gn, 'alexa for business', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.chime;',
					 w2, w2, '', 'Chime', null, null, this.getTagsForStencil(gn, 'chime', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.workdocs;',
					 w2, w2, '', 'WorkDocs', null, null, this.getTagsForStencil(gn, 'workdocs', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.workmail;',
					 w2, w2, '', 'WorkMail', null, null, this.getTagsForStencil(gn, 'workmail', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.business_application;',
					 w2, w2, '', 'Business Application', null, null, this.getTagsForStencil(gn, 'business application', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4EC2InstanceTypePalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D86613;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service ec2 instance type';
		
		this.addPaletteFunctions('aws4EC2 Instance Types', 'AWS / EC2 Instance Types', false,
		[
			 this.createVertexTemplateEntry(n + 'a1_instance;',
					 s * 48, s * 48, '', 'A1 Instance', null, null, this.getTagsForStencil(gn, 'a1', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'c4_instance;',
					 s * 48, s * 48, '', 'C4 Instance', null, null, this.getTagsForStencil(gn, 'c4', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'c5_instance;',
					 s * 48, s * 48, '', 'C5 Instance', null, null, this.getTagsForStencil(gn, 'c5', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'c5n_instance;',
					 s * 48, s * 48, '', 'C5n Instance', null, null, this.getTagsForStencil(gn, 'c5n', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'd2_instance;',
					 s * 48, s * 48, '', 'D2 Instance', null, null, this.getTagsForStencil(gn, 'd2', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'db_on_instance2;',
					 s * 48, s * 48, '', 'DB on Instance', null, null, this.getTagsForStencil(gn, 'db on database', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'f1_instance;',
					 s * 48, s * 48, '', 'F1 Instance', null, null, this.getTagsForStencil(gn, 'f1', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'g3_instance;',
					 s * 48, s * 48, '', 'G3 Instance', null, null, this.getTagsForStencil(gn, 'g3', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'h1_instance;',
					 s * 48, s * 48, '', 'H1 Instance', null, null, this.getTagsForStencil(gn, 'h1', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'high_memory_instance;',
					 s * 48, s * 48, '', 'High Memory Instance', null, null, this.getTagsForStencil(gn, 'high memory instance', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'i3_instance;',
					 s * 48, s * 48, '', 'I3 Instance', null, null, this.getTagsForStencil(gn, 'i3', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'instance2;',
					 s * 48, s * 48, '', 'Instance', null, null, this.getTagsForStencil(gn, '', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'instances;',
					 s * 48, s * 48, '', 'Instances', null, null, this.getTagsForStencil(gn, '', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'instance_with_cloudwatch2;',
					 s * 48, s * 48, '', 'Instance with CloudWatch', null, null, this.getTagsForStencil(gn, 'instance with cloudwatch', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'm4_instance;',
					 s * 48, s * 48, '', 'M4 Instance', null, null, this.getTagsForStencil(gn, 'm4', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'm5a_instance;',
					 s * 48, s * 48, '', 'M5a Instance', null, null, this.getTagsForStencil(gn, 'm5a', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'm5_instance;',
					 s * 48, s * 48, '', 'M5 Instance', null, null, this.getTagsForStencil(gn, 'm5', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'optimized_instance;',
					 s * 48, s * 48, '', 'Optimized Instance', null, null, this.getTagsForStencil(gn, 'optimized instance', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'p2_instance;',
					 s * 48, s * 48, '', 'P2 Instance', null, null, this.getTagsForStencil(gn, 'p2', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'p3_instance;',
					 s * 48, s * 48, '', 'P3 Instance', null, null, this.getTagsForStencil(gn, 'p3', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'r4_instance;',
					 s * 48, s * 48, '', 'R4 Instance', null, null, this.getTagsForStencil(gn, 'r4', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'r5a_instance;',
					 s * 48, s * 48, '', 'R5a Instance', null, null, this.getTagsForStencil(gn, 'r5a', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'r5_instance;',
					 s * 48, s * 48, '', 'R5 Instance', null, null, this.getTagsForStencil(gn, 'r5', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'spot_instance;',
					 s * 48, s * 48, '', 'Spot Instance', null, null, this.getTagsForStencil(gn, 'spot', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 't2_instance;',
					 s * 48, s * 48, '', 'T2 Instance', null, null, this.getTagsForStencil(gn, 't2', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 't3a_instance;',
					 s * 48, s * 48, '', 'T3a Instance', null, null, this.getTagsForStencil(gn, 't3a', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 't3_instance;',
					 s * 48, s * 48, '', 'T3 Instance', null, null, this.getTagsForStencil(gn, 't3', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 't3_instance;',
					 s * 48, s * 48, '', 'T3 Instance', null, null, this.getTagsForStencil(gn, 't3', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'x1e_instance;',
					 s * 48, s * 48, '', 'X1e Instance', null, null, this.getTagsForStencil(gn, 'x1e', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'x1_instance2;',
					 s * 48, s * 48, '', 'X1 Instance', null, null, this.getTagsForStencil(gn, 'x1', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'z1d_instance;',
					 s * 48, s * 48, '', 'Z1d Instance', null, null, this.getTagsForStencil(gn, 'z1d', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4ComputePalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D05C17;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service compute';
		
		this.addPaletteFunctions('aws4Compute', 'AWS / Compute', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.ec2;',
					 w2, w2, '', 'EC2', null, null, this.getTagsForStencil(gn, 'ec2', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.auto_scaling2;',
					 w2, w2, '', 'Auto Scaling', null, null, this.getTagsForStencil(gn, 'auto scaling', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.ecr;',
					 w2, w2, '', 'Elastic Container Registry', null, null, this.getTagsForStencil(gn, 'elastic container registry ecr', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.ecs;',
					 w2, w2, '', 'Elastic Container Service', null, null, this.getTagsForStencil(gn, 'elastic container service ecs', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.eks;',
					 w2, w2, '', 'Elastic Container Service for Kubernetes', null, null, this.getTagsForStencil(gn, 'elastic container service eks for kubernetes', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.lightsail;',
					 w2, w2, '', 'Lightsail', null, null, this.getTagsForStencil(gn, 'lightsail', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.batch;',
					 w2, w2, '', 'Batch', null, null, this.getTagsForStencil(gn, 'batch', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elastic_beanstalk;',
					 w2, w2, '', 'Elastic Beanstalk', null, null, this.getTagsForStencil(gn, 'elastic beanstalk', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.fargate;',
					 w2, w2, '', 'Fargate', null, null, this.getTagsForStencil(gn, 'fargate', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.lambda;',
					 w2, w2, '', 'Lambda', null, null, this.getTagsForStencil(gn, 'lambda', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.outposts;',
					 w2, w2, '', 'Outposts', null, null, this.getTagsForStencil(gn, 'outposts', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.serverless_application_repository;',
					 w2, w2, '', 'Serverless Application Repository', null, null, this.getTagsForStencil(gn, 'serverless application repository', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.compute;',
					 w2, w2, '', 'Compute', null, null, this.getTagsForStencil(gn, 'compute', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elastic_load_balancing;',
					 w2, w2, '', 'Elastic Load Balancing', null, null, this.getTagsForStencil(gn, 'elastic load balancing', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.vmware_cloud_on_aws;',
					 w2, w2, '', 'VMware Cloud on AWS', null, null, this.getTagsForStencil(gn, 'vmware cloud on aws virtual machine vm', dt).join(' ')),
					 
			 this.createVertexTemplateEntry(n + 'ami;',
					 s * 78, s * 78, '', 'AMI', null, null, this.getTagsForStencil(gn, 'ami', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'auto_scaling2;',
					 s * 78, s * 78, '', 'Auto-Scaling', null, null, this.getTagsForStencil(gn, 'autoscaling auto scaling', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'elastic_ip_address;',
					 s * 78, s * 33, '', 'Elastic IP Address', null, null, this.getTagsForStencil(gn, 'elastic ip itnernet protocol address', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'rescue;',
					 s * 78, s * 78, '', 'Rescue', null, null, this.getTagsForStencil(gn, 'rescue', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'registry;',
					 s * 78, s * 78, '', 'Registry', null, null, this.getTagsForStencil(gn, 'registry', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'container_1;',
					 s * 78, s * 50, '', 'ECS Container', null, null, this.getTagsForStencil(gn, 'ecs elastic container service', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'container_2;',
					 s * 78, s * 50, '', 'ECS Container', null, null, this.getTagsForStencil(gn, 'ecs elastic container service', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'container_3;',
					 s * 78, s * 50, '', 'ECS Container', null, null, this.getTagsForStencil(gn, 'ecs elastic container service', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'container_registry_image;',
					 s * 78, s * 78, '', 'Image', null, null, this.getTagsForStencil(gn, 'image', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'ecs_service;',
					 s * 64, s * 78, '', 'ECS Service', null, null, this.getTagsForStencil(gn, 'ecs elastic container service', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'ecs_task;',
					 s * 59, s * 78, '', 'ECS Task', null, null, this.getTagsForStencil(gn, 'ecs elastic container service task', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'application;',
					 s * 50, s * 78, '', 'Elastic Beanstalk Application', null, null, this.getTagsForStencil(gn, 'elastic beanstalk application', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'deployment;',
					 s * 78, s * 74, '', 'Elastic Beanstalk Deployment', null, null, this.getTagsForStencil(gn, 'elastic beanstalk deployment', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'lambda_function;',
					 s * 78, s * 78, '', 'Lambda Function', null, null, this.getTagsForStencil(gn, 'lambda function', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4CustomerEngagementPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#3334B9;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service customer engagement';
		
		this.addPaletteFunctions('aws4Customer Engagement', 'AWS / Customer Engagement', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.connect;',
					 w2, w2, '', 'Connect', null, null, this.getTagsForStencil(gn, 'connect', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.pinpoint;',
					 w2, w2, '', 'Pinpoint', null, null, this.getTagsForStencil(gn, 'pinpoint', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.simple_email_service;',
					 w2, w2, '', 'Simple Email Service', null, null, this.getTagsForStencil(gn, 'simple email service', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.customer_engagement;',
					 w2, w2, '', 'Customer Engagement', null, null, this.getTagsForStencil(gn, 'customer engagement', dt).join(' ')),
					 
			 this.createVertexTemplateEntry(n + 'email;',
					 s * 78, s * 69, '', 'Simple Email Service', null, null, this.getTagsForStencil(gn, 'simple email service ses', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4DatabasePalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#3334B9;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service db database';
		
		this.addPaletteFunctions('aws4Database', 'AWS / Database', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.aurora;',
					 w2, w2, '', 'Aurora', null, null, this.getTagsForStencil(gn, 'aurora', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.documentdb_with_mongodb_compatibility;',
					 w2, w2, '', 'DocumentDB with MongoDB Compatibility', null, null, this.getTagsForStencil(gn, 'documentdb with mongodb compatibility', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.dynamodb;',
					 w2, w2, '', 'DynamoDB', null, null, this.getTagsForStencil(gn, 'dynamodb', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elasticache;',
					 w2, w2, '', 'ElastiCache', null, null, this.getTagsForStencil(gn, 'elasticache', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.neptune;',
					 w2, w2, '', 'Neptune', null, null, this.getTagsForStencil(gn, 'neptune', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.quantum_ledger_database;',
					 w2, w2, '', 'Quantum Ledger Database', null, null, this.getTagsForStencil(gn, 'quantum ledger database db', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.rds;',
					 w2, w2, '', 'RDS', null, null, this.getTagsForStencil(gn, 'rds', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.rds_on_vmware;',
					 w2, w2, '', 'RDS on VMware', null, null, this.getTagsForStencil(gn, 'rds on vmware', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.redshift;',
					 w2, w2, '', 'Redshift', null, null, this.getTagsForStencil(gn, 'redshift', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.timestream;',
					 w2, w2, '', 'Timestream', null, null, this.getTagsForStencil(gn, 'timestream', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.database_migration_service;',
					 w2, w2, '', 'Database Migration Service', null, null, this.getTagsForStencil(gn, 'database migration service', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.database;',
					 w2, w2, '', 'Database', null, null, this.getTagsForStencil(gn, 'database', dt).join(' ')),
					 
			 this.createVertexTemplateEntry(n + 'attribute;',
					 s * 78, s * 78, '', 'DynamoDB Attribute', null, null, this.getTagsForStencil(gn, 'dynamodb dynamo db database attribute', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'attributes;',
					 s * 78, s * 78, '', 'DynamoDB Attributes', null, null, this.getTagsForStencil(gn, 'dynamodb dynamo db database attributes', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'global_secondary_index;',
					 s * 78, s * 78, '', 'DynamoDB Global Secondary Index', null, null, this.getTagsForStencil(gn, 'global secondary index', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'item;',
					 s * 78, s * 78, '', 'DynamoDB Item', null, null, this.getTagsForStencil(gn, 'item', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'items;',
					 s * 78, s * 78, '', 'DynamoDB Items', null, null, this.getTagsForStencil(gn, 'items', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'table;',
					 s * 78, s * 78, '', 'DynamoDB Table', null, null, this.getTagsForStencil(gn, 'table', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'cache_node;',
					 s * 78, s * 78, '', 'ElastiCache Cache Node', null, null, this.getTagsForStencil(gn, 'elasticache elastic cache node', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'elasticache_for_memcached;',
					 s * 78, s * 69, '', 'ElastiCache for Memcached', null, null, this.getTagsForStencil(gn, 'elasticache for memcached', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'elasticache_for_redis;',
					 s * 78, s * 69, '', 'Elasticache for Redis', null, null, this.getTagsForStencil(gn, 'elasticache for redis', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'dense_compute_node;',
					 s * 78, s * 78, '', 'Dense Compute Node', null, null, this.getTagsForStencil(gn, 'dense compute node', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'dense_storage_node;',
					 s * 78, s * 78, '', 'Dense Storage Node', null, null, this.getTagsForStencil(gn, 'dense storage node', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'database_migration_workflow_job;',
					 s * 50, s * 78, '', 'Database Migration Workflow', null, null, this.getTagsForStencil(gn, 'database migration workflow', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4DesktopAppStreamingPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#116D5B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4AB29A;gradientDirection=north;fillColor=#116D5B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service db database';
		
		this.addPaletteFunctions('aws4Desktop App Streaming', 'AWS / Desktop & App Streaming', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.appstream_20;',
					 w2, w2, '', 'Appstream 2.0', null, null, this.getTagsForStencil(gn, 'appstream', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.workspaces;',
					 w2, w2, '', 'Workspaces', null, null, this.getTagsForStencil(gn, 'workspaces', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.desktop_and_app_streaming;',
					 w2, w2, '', 'Desktop and App Streaming', null, null, this.getTagsForStencil(gn, 'desktop and app streaming', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4DeveloperToolsPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#3334B9;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4D72F3;gradientDirection=north;fillColor=#3334B9;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service dev developer tools';
		
		this.addPaletteFunctions('aws4Developer Tools', 'AWS / Developer Tools', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.cloud9;',
					 w2, w2, '', 'Cloud9', null, null, this.getTagsForStencil(gn, 'cloud9', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.codebuild;',
					 w2, w2, '', 'CodeBuild', null, null, this.getTagsForStencil(gn, 'codebuild', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.codecommit;',
					 w2, w2, '', 'CodeCommit', null, null, this.getTagsForStencil(gn, 'codecommit', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.codedeploy;',
					 w2, w2, '', 'CodeDeploy', null, null, this.getTagsForStencil(gn, 'codedeploy', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.codepipeline;',
					 w2, w2, '', 'CodePipeline', null, null, this.getTagsForStencil(gn, 'codepipeline', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.codestar;',
					 w2, w2, '', 'CodeStar', null, null, this.getTagsForStencil(gn, 'codestar', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.command_line_interface;',
					 w2, w2, '', 'Command-Line Interface', null, null, this.getTagsForStencil(gn, 'command line interface', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.tools_and_sdks;',
					 w2, w2, '', 'Tools and SDKs', null, null, this.getTagsForStencil(gn, 'tools and sdks software development kit', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.xray;',
					 w2, w2, '', 'X-Ray', null, null, this.getTagsForStencil(gn, 'ray xray', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.developer_tools;',
					 w2, w2, '', 'Developer Tools', null, null, this.getTagsForStencil(gn, 'developer tools', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4GameTechPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#5A30B5;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service game development';
		
		this.addPaletteFunctions('aws4Game Tech', 'AWS / Game Tech', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.gamelift;',
					 w2, w2, '', 'GameLift', null, null, this.getTagsForStencil(gn, 'gamelift', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.game_tech;',
					 w2, w2, '', 'Game Tech', null, null, this.getTagsForStencil(gn, 'game tech', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4InternetOfThingsPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#277116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service internet of things iot';
		
		this.addPaletteFunctions('aws4Internet of Things', 'AWS / Internet of Things', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.freertos;',
					 w2, w2, '', 'FreeRTOS', null, null, this.getTagsForStencil(gn, 'freertos', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.iot_1click;',
					 w2, w2, '', '1Click', null, null, this.getTagsForStencil(gn, '1click', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.iot_analytics;',
					 w2, w2, '', 'Analytics', null, null, this.getTagsForStencil(gn, 'analytics', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.iot_button;',
					 w2, w2, '', 'Button', null, null, this.getTagsForStencil(gn, 'button', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.iot_core;',
					 w2, w2, '', 'Core', null, null, this.getTagsForStencil(gn, 'core', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.iot_device_defender;',
					 w2, w2, '', 'Device Defender', null, null, this.getTagsForStencil(gn, 'device defender', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.iot_device_management;',
					 w2, w2, '', 'Device Management', null, null, this.getTagsForStencil(gn, 'device management', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.iot_events;',
					 w2, w2, '', 'Events', null, null, this.getTagsForStencil(gn, 'events', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.greengrass;',
					 w2, w2, '', 'Greengrass', null, null, this.getTagsForStencil(gn, 'greengrass', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.iot_sitewise;',
					 w2, w2, '', 'Sitewise', null, null, this.getTagsForStencil(gn, 'sitewise', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.iot_things_graph;',
					 w2, w2, '', 'Graph', null, null, this.getTagsForStencil(gn, 'graph', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.internet_of_things;',
					 w2, w2, '', 'Internet of Things', null, null, this.getTagsForStencil(gn, '', dt).join(' ')),
					 
			 this.createVertexTemplateEntry(n + 'iot_analytics_channel;',
					 s * 65, s * 78, '', 'Analytics Channel', null, null, this.getTagsForStencil(gn, 'analytics channel', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'iot_analytics_data_store;',
					 s * 54, s * 78, '', 'Analytics Data Store', null, null, this.getTagsForStencil(gn, 'analytics data store', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'iot_analytics_pipeline;',
					 s * 78, s * 42, '', 'Analytics Pipeline', null, null, this.getTagsForStencil(gn, 'analytics pipeline', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'action;',
					 s * 78, s * 78, '', 'Action', null, null, this.getTagsForStencil(gn, 'action', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'actuator;',
					 s * 72, s * 78, '', 'Actuator', null, null, this.getTagsForStencil(gn, 'actuator', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'alexa_enabled_device;',
					 s * 72, s * 78, '', 'Alexa Enabled Device', null, null, this.getTagsForStencil(gn, 'alexa enabled device', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'alexa_skill;',
					 s * 78, s * 78, '', 'Alexa Skill', null, null, this.getTagsForStencil(gn, 'alexa skill', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'alexa_skill;',
					 s * 78, s * 78, '', 'Alexa Voice Service', null, null, this.getTagsForStencil(gn, 'alexa voice service', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'bank;',
					 s * 78, s * 78, '', 'Bank', null, null, this.getTagsForStencil(gn, 'bank', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'bycicle;',
					 s * 78, s * 78, '', 'Bycicle', null, null, this.getTagsForStencil(gn, 'bycicle', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'camera;',
					 s * 78, s * 78, '', 'Camera', null, null, this.getTagsForStencil(gn, 'camera', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'car;',
					 s * 78, s * 78, '', 'Car', null, null, this.getTagsForStencil(gn, 'car', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'cart;',
					 s * 78, s * 78, '', 'Cart', null, null, this.getTagsForStencil(gn, 'cart', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'certificate_manager;',
					 s * 59, s * 78, '', 'Certificate Manager', null, null, this.getTagsForStencil(gn, 'certificate manager', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'coffee_pot;',
					 s * 78, s * 78, '', 'Coffee Pot', null, null, this.getTagsForStencil(gn, 'coffee pot', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'desired_state;',
					 s * 78, s * 78, '', 'Desired State', null, null, this.getTagsForStencil(gn, 'desired state', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'iot_device_gateway;',
					 s * 78, s * 78, '', 'Device Gateway', null, null, this.getTagsForStencil(gn, 'device gateway', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'door_lock;',
					 s * 78, s * 78, '', 'Door Lock', null, null, this.getTagsForStencil(gn, 'door lock', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'echo;',
					 s * 41, s * 78, '', 'Echo', null, null, this.getTagsForStencil(gn, 'echo', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'factory;',
					 s * 78, s * 78, '', 'Factory', null, null, this.getTagsForStencil(gn, 'factory', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'firetv;',
					 s * 78, s * 55, '', 'FireTV', null, null, this.getTagsForStencil(gn, 'firetv', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'firetv_stick;',
					 s * 78, s * 34, '', 'FireTV Stick', null, null, this.getTagsForStencil(gn, 'firetv stick', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'generic;',
					 s * 78, s * 78, '', 'Generic', null, null, this.getTagsForStencil(gn, 'generic', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'hardware_board;',
					 s * 78, s * 78, '', 'Hardware Board', null, null, this.getTagsForStencil(gn, 'hardware board', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'house;',
					 s * 78, s * 78, '', 'House', null, null, this.getTagsForStencil(gn, 'house', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'http2_protocol;',
					 s * 78, s * 78, '', 'HTTP2 protocol', null, null, this.getTagsForStencil(gn, 'http2 protocol', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'http_protocol;',
					 s * 78, s * 78, '', 'HTTP protocol', null, null, this.getTagsForStencil(gn, 'http protocol', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'lambda_function;',
					 s * 78, s * 78, '', 'Lambda Function', null, null, this.getTagsForStencil(gn, 'lambda function', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'lightbulb;',
					 s * 78, s * 78, '', 'Lightbulb', null, null, this.getTagsForStencil(gn, 'lightbulb', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'medical_emergency;',
					 s * 78, s * 78, '', 'Medical Emergency', null, null, this.getTagsForStencil(gn, 'medical emergency', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'mqtt_protocol;',
					 s * 78, s * 78, '', 'MQTT Protocol', null, null, this.getTagsForStencil(gn, 'mqtt protocol', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'iot_over_the_air_update;',
					 s * 78, s * 78, '', 'Over The Air Update', null, null, this.getTagsForStencil(gn, 'over the air update', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'police_emergency;',
					 s * 78, s * 78, '', 'Police Emergency', null, null, this.getTagsForStencil(gn, 'police emergency', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'policy;',
					 s * 78, s * 67, '', 'Policy', null, null, this.getTagsForStencil(gn, 'policy', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'reported_state;',
					 s * 78, s * 78, '', 'Reported State', null, null, this.getTagsForStencil(gn, 'reported state', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'rule;',
					 s * 46, s * 78, '', 'Rule', null, null, this.getTagsForStencil(gn, 'rule', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'sensor;',
					 s * 72, s * 78, '', 'Sensor', null, null, this.getTagsForStencil(gn, 'sensor', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'servo;',
					 s * 78, s * 56, '', 'Servo', null, null, this.getTagsForStencil(gn, 'servo', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'shadow;',
					 s * 78, s * 77, '', 'Shadow', null, null, this.getTagsForStencil(gn, 'shadow', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'simulator;',
					 s * 71, s * 78, '', 'Simulator', null, null, this.getTagsForStencil(gn, 'simulator', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'thermostat;',
					 s * 78, s * 78, '', 'Thermostat', null, null, this.getTagsForStencil(gn, 'thermostat', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'topic_2;',
					 s * 53, s * 78, '', 'Topic', null, null, this.getTagsForStencil(gn, 'topic', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'travel;',
					 s * 78, s * 78, '', 'Travel', null, null, this.getTagsForStencil(gn, 'travel', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'utility;',
					 s * 78, s * 78, '', 'Utility', null, null, this.getTagsForStencil(gn, 'utility', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'windfarm;',
					 s * 78, s * 78, '', 'Windfarm', null, null, this.getTagsForStencil(gn, 'windfarm', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4MachineLearningPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#116D5B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4AB29A;gradientDirection=north;fillColor=#116D5B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service machine learning';
		
		this.addPaletteFunctions('aws4Machine Learning', 'AWS / Machine Learning', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.comprehend;',
					 w2, w2, '', 'Comprehend', null, null, this.getTagsForStencil(gn, 'comprehend', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elastic_inference;',
					 w2, w2, '', 'Elastic Inference', null, null, this.getTagsForStencil(gn, 'elastic inference', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.forecast;',
					 w2, w2, '', 'Forecast', null, null, this.getTagsForStencil(gn, 'forecast', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.lex;',
					 w2, w2, '', 'Lex', null, null, this.getTagsForStencil(gn, 'lex', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.personalize;',
					 w2, w2, '', 'Personalize', null, null, this.getTagsForStencil(gn, 'personalize', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.polly;',
					 w2, w2, '', 'Polly', null, null, this.getTagsForStencil(gn, 'polly', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.rekognition;',
					 w2, w2, '', 'Rekognition', null, null, this.getTagsForStencil(gn, 'rekognition', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.sagemaker;',
					 w2, w2, '', 'SageMaker', null, null, this.getTagsForStencil(gn, 'sagemaker', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.sagemaker_ground_truth;',
					 w2, w2, '', 'SageMaker Ground Truth', null, null, this.getTagsForStencil(gn, 'sagemaker ground truth', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.textract;',
					 w2, w2, '', 'Textract', null, null, this.getTagsForStencil(gn, 'textract', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.transcribe;',
					 w2, w2, '', 'Transcribe', null, null, this.getTagsForStencil(gn, 'transcribe', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.translate;',
					 w2, w2, '', 'Translate', null, null, this.getTagsForStencil(gn, 'translate', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.apache_mxnet_on_aws;',
					 w2, w2, '', 'Apache MXNet on AWS', null, null, this.getTagsForStencil(gn, 'apache mxnet on aws', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.deep_learning_amis;',
					 w2, w2, '', 'Deep Learning AMIs', null, null, this.getTagsForStencil(gn, 'deep learning amis', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.deeplens;',
					 w2, w2, '', 'DeepLens', null, null, this.getTagsForStencil(gn, 'deeplens', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.deepracer;',
					 w2, w2, '', 'DeepRacer', null, null, this.getTagsForStencil(gn, 'deepracer', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.machine_learning;',
					 w2, w2, '', 'Machine Learning', null, null, this.getTagsForStencil(gn, 'machine learning', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.tensorflow_on_aws;',
					 w2, w2, '', 'TensorFlow on AWS', null, null, this.getTagsForStencil(gn, 'tensorflow on aws', dt).join(' ')),
					 
			 this.createVertexTemplateEntry(n + 'sagemaker_model;',
					 s * 78, s * 78, '', 'SageMaker Model', null, null, this.getTagsForStencil(gn, 'sagemaker model', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'sagemaker_notebook;',
					 s * 68, s * 78, '', 'SageMaker Notebook', null, null, this.getTagsForStencil(gn, 'sagemaker notebook', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'sagemaker_train;',
					 s * 78, s * 65, '', 'SageMaker Train', null, null, this.getTagsForStencil(gn, 'sagemaker train', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4ManagementGovernancePalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#BC1356;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F34482;gradientDirection=north;fillColor=#BC1356;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service management governance';
		
		this.addPaletteFunctions('aws4Management Governance', 'AWS / Management & Governance', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.cloudwatch;',
					 w2, w2, '', 'CloudWatch', null, null, this.getTagsForStencil(gn, 'cloudwatch', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.autoscaling;',
					 w2, w2, '', 'Auto-Scaling', null, null, this.getTagsForStencil(gn, 'autoscaling', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.cloudformation;',
					 w2, w2, '', 'CloudFormation', null, null, this.getTagsForStencil(gn, 'cloudformation', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.cloudtrail;',
					 w2, w2, '', 'CloudTrail', null, null, this.getTagsForStencil(gn, 'cloudtrail', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.command_line_interface;',
					 w2, w2, '', 'Command-Line Interface', null, null, this.getTagsForStencil(gn, 'command line interface', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.config;',
					 w2, w2, '', 'Config', null, null, this.getTagsForStencil(gn, 'config', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.license_manager;',
					 w2, w2, '', 'License Manager', null, null, this.getTagsForStencil(gn, 'license manager', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.managed_services;',
					 w2, w2, '', 'Managed Services', null, null, this.getTagsForStencil(gn, 'managed services', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.management_console;',
					 w2, w2, '', 'Management Console', null, null, this.getTagsForStencil(gn, 'management console', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.opsworks;',
					 w2, w2, '', 'OpsWorks', null, null, this.getTagsForStencil(gn, 'opsworks', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.personal_health_dashboard;',
					 w2, w2, '', 'Personal Health Dashboard', null, null, this.getTagsForStencil(gn, 'personal health dashboard', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.service_catalog;',
					 w2, w2, '', 'Service Catalog', null, null, this.getTagsForStencil(gn, 'service catalog', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.systems_manager;',
					 w2, w2, '', 'Systems Manager', null, null, this.getTagsForStencil(gn, 'systems manager', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.trusted_advisor;',
					 w2, w2, '', 'Trusted Advisor', null, null, this.getTagsForStencil(gn, 'trusted advisor', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.well_architected_tool;',
					 w2, w2, '', 'Well Architected Tool', null, null, this.getTagsForStencil(gn, 'well architected tool', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.control_tower;',
					 w2, w2, '', 'Control Tower', null, null, this.getTagsForStencil(gn, 'control tower', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.management_and_governance;',
					 w2, w2, '', 'Management and Governance', null, null, this.getTagsForStencil(gn, 'management and governance', dt).join(' ')),
					 
			 this.createVertexTemplateEntry(n + 'alarm;',
					 s * 78, s * 78, '', 'CloudWatch Alarm', null, null, this.getTagsForStencil(gn, 'cloudwatch alarm', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'event_event_based;',
					 s * 78, s * 78, '', 'CloudWatch Event Event-Based', null, null, this.getTagsForStencil(gn, 'cloudwatch event based', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'event_time_based;',
					 s * 78, s * 78, '', 'CloudWatch Event Time-Based', null, null, this.getTagsForStencil(gn, 'cloudwatch event time based', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'rule_2;',
					 s * 78, s * 76, '', 'CloudWatch Rule', null, null, this.getTagsForStencil(gn, 'cloudwatch rule', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'change_set;',
					 s * 65, s * 78, '', 'CloudFormation Change Set', null, null, this.getTagsForStencil(gn, 'cloudformation change set', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'stack;',
					 s * 78, s * 76, '', 'CloudFormation Stack', null, null, this.getTagsForStencil(gn, 'cloudformation stack', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'template;',
					 s * 65, s * 78, '', 'CloudFormation Template', null, null, this.getTagsForStencil(gn, 'cloudformation template', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'opsworks_apps;',
					 s * 78, s * 78, '', 'OpsWorks Apps', null, null, this.getTagsForStencil(gn, 'opsworks apps applications', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'deployments;',
					 s * 65, s * 78, '', 'OpsWorks Deployments', null, null, this.getTagsForStencil(gn, 'opsworks deployments', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'instances_2;',
					 s * 78, s * 78, '', 'OpsWorks Instances', null, null, this.getTagsForStencil(gn, 'opsworks instances', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'layers;',
					 s * 78, s * 78, '', 'OpsWorks Layers', null, null, this.getTagsForStencil(gn, 'opsworks layers', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'monitoring;',
					 s * 78, s * 58, '', 'OpsWorks Monitoring', null, null, this.getTagsForStencil(gn, 'opsworks monitoring', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'opsworks_permissions;',
					 s * 54, s * 78, '', 'OpsWorks Permissions', null, null, this.getTagsForStencil(gn, 'opsworks permissions', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'resources;',
					 s * 68, s * 78, '', 'OpsWorks Resources', null, null, this.getTagsForStencil(gn, 'opsworks resources', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'stack2;',
					 s * 78, s * 78, '', 'Stack', null, null, this.getTagsForStencil(gn, 'stack', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'shield_shield_advanced;',
					 s * 70, s * 78, '', 'Shield Advanced', null, null, this.getTagsForStencil(gn, 'shield advanced', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'automation;',
					 s * 78, s * 78, '', 'Systems Manager Automation', null, null, this.getTagsForStencil(gn, 'systems manager automation', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'documents;',
					 s * 64, s * 78, '', 'Systems Manager Documents', null, null, this.getTagsForStencil(gn, 'systems manager documents', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'inventory;',
					 s * 78, s * 78, '', 'Systems Manager Inventory', null, null, this.getTagsForStencil(gn, 'systems manager inventory', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'maintenance_windows;',
					 s * 78, s * 78, '', 'Systems Manager Maintenance Windows', null, null, this.getTagsForStencil(gn, 'systems manager maintenance windows', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'parameter_store;',
					 s * 75, s * 78, '', 'Systems Manager Parameter Store', null, null, this.getTagsForStencil(gn, 'systems manager parameter store', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'patch_manager;',
					 s * 78, s * 78, '', 'Systems Manager Patch Manager', null, null, this.getTagsForStencil(gn, 'systems manager patch manager', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'run_command;',
					 s * 78, s * 55, '', 'Systems Manager Run Command', null, null, this.getTagsForStencil(gn, 'systems manager run command', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'state_manager;',
					 s * 78, s * 78, '', 'Systems Manager State Manager', null, null, this.getTagsForStencil(gn, 'systems manager state', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'checklist;',
					 s * 66, s * 78, '', 'Trusted Advisor Checklist', null, null, this.getTagsForStencil(gn, 'trusted advisor checklist', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'checklist_cost;',
					 s * 78, s * 78, '', 'Trusted Advisor Checklist Cost', null, null, this.getTagsForStencil(gn, 'trusted advisor checklist cost', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'checklist_fault_tolerant;',
					 s * 78, s * 77, '', 'Trusted Advisor Checklist Fault Tolerant', null, null, this.getTagsForStencil(gn, 'trusted advisor fault tolerant', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'checklist_performance;',
					 s * 78, s * 78, '', 'Trusted Advisor Checklist Performance', null, null, this.getTagsForStencil(gn, 'trusted advisor checklist performance', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'checklist_security;',
					 s * 78, s * 78, '', 'Trusted Advisor Checklist Security', null, null, this.getTagsForStencil(gn, 'trusted advisor checklist security', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4MediaServicesPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D05C17;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F78E04;gradientDirection=north;fillColor=#D05C17;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service media services';
		
		this.addPaletteFunctions('aws4Media Services', 'AWS / Media Services', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elastic_transcoder;',
					 w2, w2, '', 'Elastic Transcoder', null, null, this.getTagsForStencil(gn, 'elastic transcoder', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.kinesis_video_streams;',
					 w2, w2, '', 'Kinesis Video Streams', null, null, this.getTagsForStencil(gn, 'kinesis video streams', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elemental_mediaconnect;',
					 w2, w2, '', 'Elemental MediaConnect', null, null, this.getTagsForStencil(gn, 'elemental mediaconnect', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elemental_mediaconvert;',
					 w2, w2, '', 'Elemental MediaConvert', null, null, this.getTagsForStencil(gn, 'elemental mediaconvert', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elemental_medialive;',
					 w2, w2, '', 'Elemental MediaLive', null, null, this.getTagsForStencil(gn, 'elemental medialive', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elemental_mediapackage;',
					 w2, w2, '', 'Elemental MediaPackage', null, null, this.getTagsForStencil(gn, 'elemental mediapackage', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elemental_mediastore;',
					 w2, w2, '', 'Elemental MediaStore', null, null, this.getTagsForStencil(gn, 'elemental mediastore', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elemental_mediatailor;',
					 w2, w2, '', 'Elemental MediaTailor', null, null, this.getTagsForStencil(gn, 'elemental mediatailor', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.media_services;',
					 w2, w2, '', 'Media Services', null, null, this.getTagsForStencil(gn, 'media services', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4MigrationTransferPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#116D5B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#4AB29A;gradientDirection=north;fillColor=#116D5B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service migration transfer';
		
		this.addPaletteFunctions('aws4Migration Transfer', 'AWS / Migration & Transfer', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.application_discovery_service;',
					 w2, w2, '', 'Application Discovery Service', null, null, this.getTagsForStencil(gn, 'application discovery service', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.database_migration_service;',
					 w2, w2, '', 'Database Migration Service', null, null, this.getTagsForStencil(gn, 'db database migration service', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.datasync;',
					 w2, w2, '', 'DataSync', null, null, this.getTagsForStencil(gn, 'datasync', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.migration_hub;',
					 w2, w2, '', 'Migration Hub', null, null, this.getTagsForStencil(gn, 'migration hub', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.server_migration_service;',
					 w2, w2, '', 'Server Migration Service', null, null, this.getTagsForStencil(gn, 'server migration service', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.snowball;',
					 w2, w2, '', 'Snowball', null, null, this.getTagsForStencil(gn, 'snowball', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.snowball_edge;',
					 w2, w2, '', 'Snowball Edge', null, null, this.getTagsForStencil(gn, 'snowball edge', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.snowmobile;',
					 w2, w2, '', 'Snowmobile', null, null, this.getTagsForStencil(gn, 'snowmobile', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.transfer_for_sftp;',
					 w2, w2, '', 'Transfer for SFTP', null, null, this.getTagsForStencil(gn, 'transfer for sftp', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.migration_and_transfer;',
					 w2, w2, '', 'Migration and Transfer', null, null, this.getTagsForStencil(gn, 'migration and transfer', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4MobilePalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C7131F;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service mobile';
		
		this.addPaletteFunctions('aws4Mobile', 'AWS / Mobile', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.api_gateway;',
					 w2, w2, '', 'API Gateway', null, null, this.getTagsForStencil(gn, 'api application programming interface gateway', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.pinpoint;',
					 w2, w2, '', 'Pinpoint', null, null, this.getTagsForStencil(gn, 'pinpoint', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.amplify;',
					 w2, w2, '', 'Amplify', null, null, this.getTagsForStencil(gn, 'amplify', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.appsync;',
					 w2, w2, '', 'AppSync', null, null, this.getTagsForStencil(gn, 'appsync', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.device_farm;',
					 w2, w2, '', 'Device Farm', null, null, this.getTagsForStencil(gn, 'device farm', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.mobile;',
					 w2, w2, '', 'Mobile', null, null, this.getTagsForStencil(gn, 'mobile', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4NetworkContentDeliveryPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#5A30B5;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#945DF2;gradientDirection=north;fillColor=#5A30B5;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service netowrk content delivery';
		
		this.addPaletteFunctions('aws4Network Content Delivery', 'AWS / Network & Content Delivery', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.api_gateway;',
					 w2, w2, '', 'API Gateway', null, null, this.getTagsForStencil(gn, 'api application programming interface gateway', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.cloudfront;',
					 w2, w2, '', 'CloudFront', null, null, this.getTagsForStencil(gn, 'cloudfront', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.route_53;',
					 w2, w2, '', 'Route 53', null, null, this.getTagsForStencil(gn, 'route 53', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.vpc_privatelink;',
					 w2, w2, '', 'VPC PrivateLink', null, null, this.getTagsForStencil(gn, 'vpc privatelink virtual private cloud', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.vpc;',
					 w2, w2, '', 'VPC', null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.app_mesh;',
					 w2, w2, '', 'App Mesh', null, null, this.getTagsForStencil(gn, 'app application mesh', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.client_vpn;',
					 w2, w2, '', 'Client VPN', null, null, this.getTagsForStencil(gn, 'client vpn virtual private network', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.cloud_map;',
					 w2, w2, '', 'Cloud Map', null, null, this.getTagsForStencil(gn, 'cloud map', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.direct_connect;',
					 w2, w2, '', 'Direct Connect', null, null, this.getTagsForStencil(gn, 'direct connect', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.global_accelerator;',
					 w2, w2, '', 'Global Accelerator', null, null, this.getTagsForStencil(gn, 'global accelerator', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.transit_gateway;',
					 w2, w2, '', 'Transit Gateway', null, null, this.getTagsForStencil(gn, 'transit gateway', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.networking_and_content_delivery;',
					 w2, w2, '', 'Networking and Content Delivery', null, null, this.getTagsForStencil(gn, 'networking and content delivery', dt).join(' ')),
					 
			 this.createVertexTemplateEntry(n + 'download_distribution;',
					 s * 78, s * 78, '', 'Download Distribution', null, null, this.getTagsForStencil(gn, 'download distribution', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'edge_location;',
					 s * 78, s * 78, '', 'Edge Location', null, null, this.getTagsForStencil(gn, 'edge location', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'streaming_distribution;',
					 s * 78, s * 78, '', 'Streaming Distribution', null, null, this.getTagsForStencil(gn, 'streaming distribution', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'hosted_zone;',
					 s * 78, s * 77, '', 'Route 53 Hosted Zone', null, null, this.getTagsForStencil(gn, 'hosted zone', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'route_table;',
					 s * 78, s * 76, '', 'Route 53 Route Table', null, null, this.getTagsForStencil(gn, 'route table', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'customer_gateway;',
					 s * 78, s * 78, '', 'VPC Customer Gateway', null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud customer gateway', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'elastic_network_adapter;',
					 s * 78, s * 78, '', 'VPC Elastic Network Adapter', null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud elastic network adapter', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'elastic_network_interface;',
					 s * 78, s * 78, '', 'VPC Elastic Network Interface', null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud elastic network interface', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'endpoints;',
					 s * 78, s * 78, '', 'VPC Endpoints', null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud endpoints', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'flow_logs;',
					 s * 78, s * 78, '', 'VPC Flow Logs', null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud flow logs', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'internet_gateway;',
					 s * 78, s * 78, '', 'VPC Internet Gateway', null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud internet gateway', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'nat_gateway;',
					 s * 78, s * 78, '', 'VPC NAT Gateway', null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud nat gateway', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'network_access_control_list;',
					 s * 78, s * 78, '', 'VPC Network Access Control List', null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud network access control list', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'peering;',
					 s * 78, s * 78, '', 'VPC Peering', null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud network peering', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'router;',
					 s * 78, s * 78, '', 'VPC Router', null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud network router', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'vpn_connection;',
					 s * 70, s * 78, '', 'VPC VPN Connection', null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud vpn network connection', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'vpn_gateway;',
					 s * 78, s * 78, '', 'VPC VPN Gateway', null, null, this.getTagsForStencil(gn, 'vpc virtual private cloud vpn network gateway', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4RoboticsPalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#BE0917;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#FE5151;gradientDirection=north;fillColor=#BE0917;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service robotics';
		
		this.addPaletteFunctions('aws4Robotics', 'AWS / Robotics', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.robotics;',
					 w2, w2, '', 'Robotics', null, null, this.getTagsForStencil(gn, 'robotics', dt).join(' ')),
					 
			 this.createVertexTemplateEntry(n + 'simulation;',
					 s * 78, s * 64, '', 'Simulation', null, null, this.getTagsForStencil(gn, 'simulation', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'fleet_management;',
					 s * 78, s * 78, '', 'Fleet Management', null, null, this.getTagsForStencil(gn, 'fleet management', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'development_environment;',
					 s * 78, s * 71, '', 'Development Environment', null, null, this.getTagsForStencil(gn, 'development environment', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'cloud_extension_ros;',
					 s * 78, s * 78, '', 'Cloud Extension ROS', null, null, this.getTagsForStencil(gn, 'cloud extension ros', dt).join(' '))
		]);
	};
	
	Sidebar.prototype.addAWS4SatellitePalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#2F29AF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#517DFD;gradientDirection=north;fillColor=#2F29AF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web satellite';
		
		this.addPaletteFunctions('aws4Satellite', 'AWS / Satellite', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.satellite;',
					 w2, w2, '', 'Satellite', null, null, this.getTagsForStencil(gn, 'satellite', dt).join(' '))
		]);
	};
	
	Sidebar.prototype.addAWS4SecurityIdentityCompliancePalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C7131F;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#F54749;gradientDirection=north;fillColor=#C7131F;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service security identity compliance';
		
		this.addPaletteFunctions('aws4Security Identity Compliance', 'AWS / Security, Identity & Compliance', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.cloud_directory;',
					 w2, w2, '', 'Cloud Directory', null, null, this.getTagsForStencil(gn, 'cloud directory', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.cognito;',
					 w2, w2, '', 'Cognito', null, null, this.getTagsForStencil(gn, 'cognito', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.guardduty;',
					 w2, w2, '', 'GuardDuty', null, null, this.getTagsForStencil(gn, 'guardduty guard duty', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.inspector;',
					 w2, w2, '', 'Inspector', null, null, this.getTagsForStencil(gn, 'inspector', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.macie;',
					 w2, w2, '', 'Macie', null, null, this.getTagsForStencil(gn, 'macie', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.artifact;',
					 w2, w2, '', 'Artifact', null, null, this.getTagsForStencil(gn, 'artifact', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.certificate_manager_3;',
					 w2, w2, '', 'Certificate Manager', null, null, this.getTagsForStencil(gn, 'certificate manager', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.cloudhsm;',
					 w2, w2, '', 'CloudHSM', null, null, this.getTagsForStencil(gn, 'cloudhsm cloud hsm', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.directory_service;',
					 w2, w2, '', 'Directory Service', null, null, this.getTagsForStencil(gn, 'directory service', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.firewall_manager;',
					 w2, w2, '', 'Firewall Manager', null, null, this.getTagsForStencil(gn, 'firewall manager', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.identity_and_access_management;',
					 w2, w2, '', 'Identity and Access Management', null, null, this.getTagsForStencil(gn, 'identity and access management', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.key_management_service;',
					 w2, w2, '', 'Key Management Service', null, null, this.getTagsForStencil(gn, 'key management service', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.organizations;',
					 w2, w2, '', 'Organizations', null, null, this.getTagsForStencil(gn, 'organizations', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.secrets_manager;',
					 w2, w2, '', 'Secrets Manager', null, null, this.getTagsForStencil(gn, 'secrets manager', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.security_hub;',
					 w2, w2, '', 'Security Hub', null, null, this.getTagsForStencil(gn, 'security hub', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.shield;',
					 w2, w2, '', 'Shield', null, null, this.getTagsForStencil(gn, 'shield', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.single_sign_on;',
					 w2, w2, '', 'Single Sign-On', null, null, this.getTagsForStencil(gn, 'single sign on', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.waf;',
					 w2, w2, '', 'WAF', null, null, this.getTagsForStencil(gn, 'waf', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.security_identity_and_compliance;',
					 w2, w2, '', 'Security Identity and Compliance', null, null, this.getTagsForStencil(gn, 'security identity and compliance', dt).join(' ')),
					 
			 this.createVertexTemplateEntry(n + 'agent;',
					 s * 78, s * 74, '', 'Inspector Agent', null, null, this.getTagsForStencil(gn, 'inspector agent', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'certificate_manager_2;',
					 s * 78, s * 72, '', 'Certificate Manager', null, null, this.getTagsForStencil(gn, 'certificate manager', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'addon;',
					 s * 78, s * 40, '', 'Identity and Access Management - IAM Add-on', null, null, this.getTagsForStencil(gn, 'identity and access management iam addon add on', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'sts;',
					 s * 78, s * 50, '', 'Identity and Access Management - IAM AWS STS', null, null, this.getTagsForStencil(gn, 'identity and access management iam sts', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'sts_alternate;',
					 s * 62, s * 78, '', 'Identity and Access Management - IAM AWS STS', null, null, this.getTagsForStencil(gn, 'identity and access management iam sts', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'data_encryption_key;',
					 s * 62, s * 78, '', 'Identity and Access Management - IAM Data Encryption Key', null, null, this.getTagsForStencil(gn, 'identity and access management iam data encryption key', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'encrypted_data;',
					 s * 62, s * 78, '', 'Identity and Access Management - IAM Encrypted Data', null, null, this.getTagsForStencil(gn, 'identity and access management iam encrypted data', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'long_term_security_credential;',
					 s * 78, s * 69, '', 'Identity and Access Management - IAM Long Term Security Credential', null, null, this.getTagsForStencil(gn, 'identity and access management iam long term security credential', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'mfa_token;',
					 s * 78, s * 78, '', 'Identity and Access Management - IAM MFA Token', null, null, this.getTagsForStencil(gn, 'identity and access management iam mfa token', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'permissions;',
					 s * 62, s * 78, '', 'Identity and Access Management - IAM Permissions', null, null, this.getTagsForStencil(gn, 'identity and access management iam permissions', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'role;',
					 s * 78, s * 44, '', 'Identity and Access Management - IAM Role', null, null, this.getTagsForStencil(gn, 'identity and access management iam role', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'temporary_security_credential;',
					 s * 77, s * 78, '', 'Identity and Access Management - IAM Temporary Security Credential', null, null, this.getTagsForStencil(gn, 'identity and access management iam temporary security credential', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'organizations_account;',
					 s * 74, s * 78, '', 'Organizations Account', null, null, this.getTagsForStencil(gn, 'organizations account', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'organizations_organizational_unit;',
					 s * 78, s * 67, '', 'Organizations Organizational Unit', null, null, this.getTagsForStencil(gn, 'organizations organizational unit', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'shield_shield_advanced;',
					 s * 70, s * 78, '', 'Shield Advanced', null, null, this.getTagsForStencil(gn, 'shield advanced', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'filtering_rule;',
					 s * 78, s * 78, '', 'WAF Filtering Rule', null, null, this.getTagsForStencil(gn, 'filtering rule', dt).join(' '))
		]);
	};

	Sidebar.prototype.addAWS4StoragePalette = function(s, w, h, w2, gn, sb)
	{
		var n = 'outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#277116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var n2 = 'outlineConnect=0;fontColor=#232F3E;gradientColor=#60A337;gradientDirection=north;fillColor=#277116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;' + mxConstants.STYLE_SHAPE + "=mxgraph.aws4.";
		var dt = 'aws amazon web service storage';
		
		this.addPaletteFunctions('aws4Storage', 'AWS / Storage', false,
		[
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elastic_block_store;',
					 w2, w2, '', 'Elastic Block Store', null, null, this.getTagsForStencil(gn, 'elastic block store', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.elastic_file_system;',
					 w2, w2, '', 'Elastic File System', null, null, this.getTagsForStencil(gn, 'elastic file system', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.fsx;',
					 w2, w2, '', 'FSx', null, null, this.getTagsForStencil(gn, 'fsx', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.fsx_for_lustre;',
					 w2, w2, '', 'FSx for Lustre', null, null, this.getTagsForStencil(gn, 'fsx for lustre', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.fsx_for_windows_file_server;',
					 w2, w2, '', 'FSx for Windows File Server', null, null, this.getTagsForStencil(gn, 'fsx for windows file server', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.glacier;',
					 w2, w2, '', 'S3 Glacier', null, null, this.getTagsForStencil(gn, 's3 simple storage service glacier', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.s3;',
					 w2, w2, '', 'Simple Storage Service', null, null, this.getTagsForStencil(gn, 's3 simple storage service', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.backup;',
					 w2, w2, '', 'Backup', null, null, this.getTagsForStencil(gn, 'backup', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.snowball;',
					 w2, w2, '', 'Snowball', null, null, this.getTagsForStencil(gn, 'snowball', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.snowball_edge;',
					 w2, w2, '', 'Snowball Edge', null, null, this.getTagsForStencil(gn, 'snowball edge', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.snowmobile;',
					 w2, w2, '', 'Snowmobile', null, null, this.getTagsForStencil(gn, 'snowmobile', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.storage_gateway;',
					 w2, w2, '', 'Storage Gateway', null, null, this.getTagsForStencil(gn, 'storage gateway', dt).join(' ')),
			 this.createVertexTemplateEntry(n2 + 'resourceIcon;resIcon=' + gn + '.storage;',
					 w2, w2, '', 'Storage', null, null, this.getTagsForStencil(gn, 'storage', dt).join(' ')),
					 
			 this.createVertexTemplateEntry(n + 'snapshot;',
					 s * 56, s * 78, '', 'Snapshot', null, null, this.getTagsForStencil(gn, 'snapshot', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'volume;',
					 s * 62, s * 78, '', 'Volume', null, null, this.getTagsForStencil(gn, 'volume', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'archive;',
					 s * 63, s * 78, '', 'S3 Glacier Archive', null, null, this.getTagsForStencil(gn, 's3 simple storage service glacier archive', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'vault;',
					 s * 62, s * 78, '', 'S3 Glacier Vault', null, null, this.getTagsForStencil(gn, 's3 simple storage service glacier vault', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'bucket;',
					 s * 75, s * 78, '', 'S3 Bucket', null, null, this.getTagsForStencil(gn, 's3 simple storage service bucket', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'bucket_with_objects;',
					 s * 75, s * 78, '', 'S3 Bucket with Objects', null, null, this.getTagsForStencil(gn, 's3 simple storage service bucket with objects', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'object;',
					 s * 78, s * 78, '', 'S3 Object', null, null, this.getTagsForStencil(gn, 's3 simple storage service object', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'import_export;',
					 s * 78, s * 61, '', 'Snowball Import Export', null, null, this.getTagsForStencil(gn, 'snowball import export', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'cached_volume;',
					 s * 62, s * 78, '', 'Storage Gateway Cached Volume', null, null, this.getTagsForStencil(gn, 'storage gateway cached volume', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'non_cached_volume;',
					 s * 62, s * 78, '', 'Starge Gateway Non-Cached Volume', null, null, this.getTagsForStencil(gn, 'storage gateway non cached volume', dt).join(' ')),
			 this.createVertexTemplateEntry(n + 'virtual_tape_library;',
					 s * 62, s * 78, '', 'Starge Gateway Virtual Tape Library', null, null, this.getTagsForStencil(gn, 'storage gateway virtual tape library vtl', dt).join(' '))
		]);
	};
})();
