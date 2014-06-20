TaskManager.module('Entities', function (Entities, App, Backbone) {
	'use strict';

	Entities.Task = Backbone.Model.extend({
		defaults: {
			title: '',
			waiting: true,
			inProgress: false,
			completed: false,
			created: 0
		},

		initialize: function () {
			if (this.isNew()) {
				this.set('created', Date.now());
			}
		},

		toggleWaiting: function () {
			if (this.isWaiting()) {
				return this.set('waiting', false);
			} else {
				return this.set({
					'inProgress': false,
					'waiting': true,
					'completed': false
				});
			}
		},

		isWaiting: function () {
			return this.get('waiting');
		},

		toggleCompleted: function () {
			if (this.isCompleted()) {
				return this.set('completed', false);
			} else {
				return this.set({
					'inProgress': false,
					'waiting': false,
					'completed': true
				});
			}
		},

		isCompleted: function () {
			return this.get('completed');
		},

		toggleInProgress: function () {
			if (this.isInProgress()) {
				return this.set('inProgress', false);
			} else {
				return this.set({
					'inProgress': true,
					'waiting': false,
					'completed': false
				});
			}
		},

		isInProgress: function () {
			return this.get('inProgress');
		}
	});

});