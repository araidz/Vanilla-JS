/* Selectors */
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const todoFiltered = document.querySelector('.filter-todo');

/* Functions */
// Clear todoInput value
const resetTodoInput = () => {
	todoInput.value = '';
};
// Create todo
const addTodo = (event) => {
	// TODO:add functionality to check if input is not empty

	// Prevent from submitting on refresh
	event.preventDefault();
	// Create DIV
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	// Create LI
	const newTodo = document.createElement('li');
	newTodo.textContent = todoInput.value;
	// Save the todo to the local JSON
	saveLocal(newTodo.textContent);
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	// Check mark button
	const completedBtn = document.createElement('button');
	completedBtn.innerHTML = '<i class="fas fa-check"></i>';
	completedBtn.classList.add('completed-btn');
	todoDiv.appendChild(completedBtn);
	// trash button
	const trashBtn = document.createElement('button');
	trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
	trashBtn.classList.add('trash-btn');
	todoDiv.appendChild(trashBtn);
	// Append todo entry to list
	todoList.appendChild(todoDiv);
	// Clear todoInput value
	resetTodoInput();
};

// Delete or Check todo
const deleteCheck = (e) => {
	const item = e.target;
	const itemClassList = item.classList;
	if (itemClassList[0] === 'trash-btn') {
		todo = item.parentElement;
		todo.classList.add('fall');
		// Delete todo from local storage
		deleteLocal(todo);
		// Animation
		todo.addEventListener('transitionend', () => {
			todo.remove();
		});
	}
	if (itemClassList[0] === 'completed-btn') {
		todo = item.parentElement;
		todo.classList.toggle('completed');
	}
};

//Filter todos
const filterTodos = (e) => {
	const todos = todoList.childNodes;
	todos.forEach((todo) => {
		// check which option is set in the drop menu
		filterOption = e.target.value;
		switch (filterOption) {
			case 'all':
				todo.style.display = 'flex';
				break;
			case 'completed':
				// show completed and hide the rest
				if (todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
				}
				break;
			case 'uncompleted':
				// show uncompleted and hide the rest
				if (!todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
				}
				break;
		}
	});
};

// Save todo locally
const saveLocal = (todo) => {
	// check if there's todo locally already
	let todos;
	const localTodos = localStorage.getItem('todos');
	// if empty
	if (!localTodos) {
		todos = [];
		// if already exists
	} else {
		todos = JSON.parse(localTodos);
	}
	// update the todos array
	todos.push(todo);
	// save the todos array locally
	localStorage.setItem('todos', JSON.stringify(todos));
};

const loadLocal = () => {
	let todos;
	const localTodos = localStorage.getItem('todos');
	if (!localTodos) {
		todos = [];
	} else {
		todos = JSON.parse(localTodos);
		todos.forEach((todo) => {
			const todoDiv = document.createElement('div');
			todoDiv.classList.add('todo');
			// Create LI
			const newTodo = document.createElement('li');
			newTodo.textContent = todo;
			newTodo.classList.add('todo-item');
			todoDiv.appendChild(newTodo);
			// Check mark button
			const completedBtn = document.createElement('button');
			completedBtn.innerHTML = '<i class="fas fa-check"></i>';
			completedBtn.classList.add('completed-btn');
			todoDiv.appendChild(completedBtn);
			// trash button
			const trashBtn = document.createElement('button');
			trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
			trashBtn.classList.add('trash-btn');
			todoDiv.appendChild(trashBtn);
			// Append todo entry to list
			todoList.appendChild(todoDiv);
		});
	}
};

const deleteLocal = (todo) => {
	// console.log(todo);
	const localTodos = localStorage.getItem('todos');
	if (localTodos) {
		todos = JSON.parse(localTodos);
		const indexOfTodo = todos.indexOf(todo.textContent);
		todos.splice(indexOfTodo, 1);
		localStorage.setItem('todos', JSON.stringify(todos));
	}
};

/* Event listeners */
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
todoFiltered.addEventListener('click', filterTodos);
document.addEventListener('DOMContentLoaded', loadLocal);
