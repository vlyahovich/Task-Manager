var TaskManager = (function () {
	'use strict';

	var App = new Marionette.Application();

	App.addRegions({
		header: '#header',
		content: '#content'
	});

	App.addInitializer(function () {
		App.module('HeaderModule').start();
		App.module('ContentModule').start();
	});

	App.on('start', function () {
		if (Backbone.history) {
			Backbone.history.start({pushState: true});
		}
	});

	Marionette.Renderer.render = function (template, data) {
		var tpl = hbsTemplates[template];

		if (tpl) {
			return tpl(data);
		}
	};

	return App;
}());
