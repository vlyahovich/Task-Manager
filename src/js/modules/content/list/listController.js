TaskManager.module('ContentModule.List', function (List, App, Backbone) {
	'use strict';

	List.Controller = Marionette.Controller.extend({
		initialize: function (options) {
			var tasksList = App.request('taskList'),
					listView = this.getView(tasksList);

			if (options.region) {
				this.region = options.region;
				this.listenTo(listView, this.close);
				this.region.show(listView);
			}
		},
		getView: function (tasksList) {
			return new List.View({collection: tasksList});
		}
	});
});