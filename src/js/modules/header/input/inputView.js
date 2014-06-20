TaskManager.module('HeaderModule.Input', function (Input, App, Backbone) {
	'use strict';

	Input.View = Marionette.ItemView.extend({
		template: 'headerInput',

		ui: {
			input: '#new-task'
		},

		events: {
			'keypress #new-task': 'onKeypress'
		},

		onKeypress: function (e) {
			var ENTER_KEY = 13,
					taskText = this.ui.input.val().trim();

			if (e.which === ENTER_KEY && taskText) {
				App.execute('task:create', taskText);
				this.ui.input.val('');
			}
		}
	});
});