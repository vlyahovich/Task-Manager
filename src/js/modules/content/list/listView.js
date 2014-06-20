TaskManager.module('ContentModule.List', function (List, App, Backbone) {
	'use strict';

	List.ItemView = Marionette.ItemView.extend({
		template: 'contentListItem',

		tagName: 'li',

		className: 'list-group-item',

		ui: {
			waiting: '.waiting',
			progress: '.in-progress',
			complete: '.complete'
		},

		events: {
			'click .delete': 'deleteTask',
			'click .waiting': 'waitTask',
			'click .in-progress': 'progressTask',
			'click .complete': 'completeTask'
		},

		modelEvents: {
			'change': 'render'
		},

		onRender: function () {
			this.$el.removeClass('waiting in-progress completed');

			if (this.model.get('waiting')) {
				this.ui.waiting.addClass('label-primary');
				this.$el.addClass('waiting');
			}

			if (this.model.get('inProgress')) {
				this.ui.progress.addClass('label-warning');
				this.$el.addClass('in-progress');
			}

			if (this.model.get('completed')) {
				this.ui.complete.addClass('label-success');
				this.$el.addClass('completed');
			}
		},

		waitTask: function(event) {
			event.preventDefault();

			App.execute('task:waiting:toggle', this.model);
		},

		progressTask: function (event) {
			event.preventDefault();

			App.execute('task:progress:toggle', this.model);
		},

		completeTask: function (event) {
			event.preventDefault();

			App.execute('task:complete:toggle', this.model);
		},

		deleteTask: function (event) {
			event.preventDefault();

			App.execute('task:delete', this.model);
		}
	});

	List.EmptyView = Marionette.ItemView.extend({
		template: 'contentListNoItems'
	});

	List.View = Marionette.CollectionView.extend({
		childView: List.ItemView,

		emptyView: List.EmptyView,

		tagName: 'ul',

		className: 'list-group'
	});
});