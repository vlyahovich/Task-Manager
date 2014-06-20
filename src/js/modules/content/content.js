TaskManager.module('ContentModule', function (ContentModule, App, Backbone) {
	'use strict';

	var controller;

	this.startWithParent = false;

	ContentModule.on('start', function () {
		controller = new ContentModule.List.Controller({
			region: App.content
		});
	});

	ContentModule.on('stop', function () {
		controller.destroy();
	});
});