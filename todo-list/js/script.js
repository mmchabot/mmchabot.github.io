var todoList = {
	todos: [],
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
	},
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		//Get number of completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		if (totalTodos === completedTodos) {
			//if everything's true, make everything false
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			} 
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			} 
		}	
	}
};

// Adding event handlers by document.getElementById

// var displayTodosButton = document.getElementById('display-todos');
// displayTodosButton.onclick = function() {
// 	todoList.displayTodos();
// }

// var toggleAllButton = document.getElementById('toggle-all');
// toggleAllButton.onclick = function() {
// 	todoList.toggleAll();
// }

//Cleaner JS, adding onclick to HTML//

var handlers = {
	addTodo: function() {
		var addTodoTextInput = document.getElementById('add-todo-text');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	changeTodo: function() {
		var changeTodoPosition = document.getElementById('change-todo-position');
		var changeTodoText = document.getElementById('change-todo-text');
		todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
		changeTodoPosition.value = '';
		changeTodoText.value = '';
		view.displayTodos();
	},
	deleteTodo: function() {
		var deleteTodoInput = document.getElementById('delete-todo');
		todoList.deleteTodo(deleteTodoInput.valueAsNumber);
		deleteTodoInput.value = '';
		view.displayTodos();
	},
	toggleCompleted: function() {
		var toggleCompletedInput = document.getElementById('completed-todo');
		todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
		toggleCompletedInput.value = '';
		view.displayTodos();
	},
	toggleAll: function() {
		todoList.toggleAll();
		view.displayTodos();
	}
};

var view = {
	displayTodos: function() {
		var todoUl = document.querySelector('ul');
		todoUl.innerHTML = '';
		for (var i = 0; i < todoList.todos.length; i++) {
			var todoLi = document.createElement('li');
			var todo = todoList.todos[i];
			var todoTextWithCompletion = '';

			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			};
			
			todoLi.textContent = todoTextWithCompletion;
			todoUl.appendChild(todoLi);
		};		
	}
}












