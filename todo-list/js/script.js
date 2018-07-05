var todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('Your todo list is empty!');
		} else {
			console.log('My Todo List:');
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				} else {
					console.log('( )', this.todos[i].todoText);
				}
			};
		};
	},

	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
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
		this.displayTodos();	
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
	displayTodos: function() {
		todoList.displayTodos();
	},
	addTodo: function() {
		var addTodoTextInput = document.getElementById('add-todo-text');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
	},
	changeTodo: function() {
		var changeTodoPosition = document.getElementById('change-todo-position');
		var changeTodoText = document.getElementById('change-todo-text');
		todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
		changeTodoPosition.value = '';
		changeTodoText.value = '';
	},
	deleteTodo: function() {
		var deleteTodoInput = document.getElementById('delete-todo');
		todoList.deleteTodo(deleteTodoInput.valueAsNumber);
		deleteTodoInput.value = '';
	},
	toggleCompleted: function() {
		var toggleCompletedInput = document.getElementById('completed-todo');
		todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
		toggleCompletedInput.value = '';
	},
	toggleAll: function() {
		todoList.toggleAll();
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












