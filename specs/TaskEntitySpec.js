describe('Task Entity', function() {
	it('should exist', function() {
		expect(TaskManager.Entities.Task).toBeDefined();
	});

	it('should default state to waiting, not in-progress and not completed', function() {
		var newTask = new TaskManager.Entities.Task();

		expect(newTask.get('waiting')).toBeTruthy();
		expect(newTask.get('inProgress')).toBeFalsy();
		expect(newTask.get('completed')).toBeFalsy();
	});

	it('should set created date on creation', function() {
		var newTask = new TaskManager.Entities.Task();

		expect(newTask.get('created')).not.toBe(0);
	});

	it('should have to set title', function() {
		var newTask = new TaskManager.Entities.Task({
			title: 'New Task'
		});

		expect(newTask.get('title')).toBe('New Task');
	});

	it('should have toggle waiting and only one state', function() {
		var newTask = new TaskManager.Entities.Task();

		newTask.set('waiting', false);
		newTask.toggleWaiting();

		expect(newTask.get('waiting')).toBeTruthy();
		expect(newTask.get('inProgress')).toBeFalsy();
		expect(newTask.get('completed')).toBeFalsy();
	});

	it('should have toggle complete and only one state', function() {
		var newTask = new TaskManager.Entities.Task();

		newTask.toggleCompleted();

		expect(newTask.get('waiting')).toBeFalsy();
		expect(newTask.get('inProgress')).toBeFalsy();
		expect(newTask.get('completed')).toBeTruthy();
	});

	it('should have toggle in-progress and only one state', function() {
		var newTask = new TaskManager.Entities.Task();

		newTask.toggleInProgress();

		expect(newTask.get('waiting')).toBeFalsy();
		expect(newTask.get('inProgress')).toBeTruthy();
		expect(newTask.get('completed')).toBeFalsy();
	});
});