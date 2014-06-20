TaskManager.module('HeaderModule.Input', function (Input, App, Backbone) {
	'use strict';

	Input.Controller = Marionette.Controller.extend({
		initialize: function (options) {
			var inputView = this.getView();

			if(options.region) {
				this.region = options.region;
				this.listenTo(inputView, this.close);
				this.region.show(inputView);
			}
		},
		getView: function () {
			return new Input.View();
		}
	});
});