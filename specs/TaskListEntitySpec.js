describe('Task List Entity', function() {
	it('should exist', function() {
		expect(TaskManager.Entities.TaskList).toBeDefined();
	});

	it('should create tasks', function() {
		var newTaskList = new TaskManager.Entities.TaskList();

		newTaskList.create({
			title: 'New Task 1'
		});
		newTaskList.create({
			title: 'New Task 2'
		});

		expect(newTaskList.length).toBe(2);
	});

	it('should delete tasks', function() {
		var newTaskList = new TaskManager.Entities.TaskList();

		newTaskList.create({
			title: 'New Task 1'
		});
		newTaskList.create({
			title: 'New Task 2'
		});

		newTaskList.last().destroy();

		expect(newTaskList.length).toBe(1);
	});
});