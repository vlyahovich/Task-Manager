TaskManager.module('HeaderModule', function (HeaderModule, App, Backbone) {
	'use strict';

	var controller;

	this.startWithParent = false;

	HeaderModule.on('start', function () {
		controller = new HeaderModule.Input.Controller({
			region: App.header
		});
	});

	HeaderModule.on('stop', function () {
		controller.destroy();
	});
});