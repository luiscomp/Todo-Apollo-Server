const { nextTodosId, todos } = require('../../data/db');
module.exports = {
	insertTodo(_, { todo }) {
		const newTodo = {
			id: nextTodosId(),
			...todo
		};
		todos.push(newTodo);
		return newTodo;
	},
	updateTodo(_, { id, todo }) {
		const todoIndex = todos.findIndex(t => t.id === id);
		const updatedTodo = {
			...todos[todoIndex],
			...todo
		};
		todos[todoIndex] = updatedTodo;
		return updatedTodo;
	},
	deleteTodo(_, { id }) {
		const todoIndex = todos.findIndex(t => t.id === id);
		const deletedTodo = todos[todoIndex];
		todos.splice(todoIndex, 1);
		return deletedTodo;
	}
};