describe('Task Manager', function() {
	it('should exist', function() {
		expect(TaskManager).toBeDefined();
	});

	it('should contain header and content regions', function() {
		expect(TaskManager.header).toBeDefined();
		expect(TaskManager.content).toBeDefined();
	});
});