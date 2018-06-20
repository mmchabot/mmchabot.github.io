var todoList = {
	todos: ['item 1', 'item 2', 'item 3'],
	displayTodos: function() {
		console.log('My Todo List', this.todos);
	}
};



function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}

//a method is a function property inside of an object//