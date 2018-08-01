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

		this.todos.forEach(function(todo) {
			if (todo.completed === true) {
				completedTodos++;
			}
		});

		this.todos.forEach(function(todo) {
			//Case 1: If everything's true, make everything false
			if (totalTodos === completedTodos) {
				todo.completed = false;
			//Case 2: Otherwise, make everything true
			} else {
				todo.completed = true;
			}
		});
	}
};

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
	deleteTodo: function(position) {
		todoList.deleteTodo(position);
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

		todoList.todos.forEach(function(todo, position) {
		var todoLi = document.createElement('li');
		var todoTextWithCompletion = '';

		if (todo.completed === true) {
			todoTextWithCompletion = '(x) ' + todo.todoText;
		} else {
			todoTextWithCompletion = '( ) ' + todo.todoText;
		};

		todoLi.id = position;
		todoLi.textContent = todoTextWithCompletion;
		todoLi.appendChild(this.createDeleteButton());
		todoUl.appendChild(todoLi);

		}, this)
	},
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListeners: function() {
		var todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function(event) {
			//Get the element that was clicked.
			var elementClicked = event.target;

			//Find out if element clicked was a delete button
			if (elementClicked.className === 'deleteButton') {
				//Run handlers.deleteTodo(position)
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		})
	}
};

view.setUpEventListeners();












