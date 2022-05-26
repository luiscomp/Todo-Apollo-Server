const { faker } = require('@faker-js/faker');
let currentTodoId = 1;

function nextTodosId() {
	return currentTodoId++;
}

const todos = [ {
	id: nextTodosId(),
	title: faker.git.branch(),
	description: faker.git.commitMessage()
} ];

module.exports = { todos, nextTodosId };