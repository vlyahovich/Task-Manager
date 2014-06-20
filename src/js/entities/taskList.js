TaskManager.module('Entities', function (Entities, App, Backbone) {
	'use strict';

	Entities.TaskList = Backbone.Collection.extend({
		model: Entities.Task,

		localStorage: new Backbone.LocalStorage('tasks-storage'),

		comparator: function (task) {
			return task.get('created');
		}
	});

	var taskList,
			API = {
				taskList: function () {
					if (!taskList) {
						taskList = new Entities.TaskList();

						taskList.fetch();

					}
					return taskList;
				}
			};

	App.reqres.setHandler('taskList', function () {
		return API.taskList();
	});

	App.commands.setHandler('task:create', function (title) {
		if (taskList) {
			taskList.create({
				title: title
			});
		}
	});

	App.commands.setHandler('task:delete', function (task) {
		if (task) {
			task.destroy();
		}
	});

	App.commands.setHandler('task:waiting:toggle', function (task) {
		if (task) {
			task.toggleWaiting().save();
		}
	});

	App.commands.setHandler('task:complete:toggle', function (task) {
		if (task) {
			task.toggleCompleted().save();
		}
	});

	App.commands.setHandler('task:progress:toggle', function (task) {
		if (task) {
			task.toggleInProgress().save();
		}
	});

});
