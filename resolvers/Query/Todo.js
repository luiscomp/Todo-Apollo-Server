const { todos } = require('../../data/db');
module.exports = {
	listTodos() {
		return todos;
	},
	getTodo(_, { id }) {
		return todos.find(todo => todo.id === id);
	}
};