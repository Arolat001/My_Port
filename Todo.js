document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addButton = document.getElementById('add-button');
  const todoList = document.getElementById('todo-list');
  const itemsLeft = document.getElementById('items-left');
  const clearCompletedBtn = document.getElementById('clear-completed');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  let currentFilter = 'all';
  
  // Render initial todos
  renderTodos();
  updateItemsLeft();
  
  // Add new todo
  function addTodo() {
      const text = taskInput.value.trim();
      if (text === '') return;
      
      const newTodo = {
          id: Date.now(),
          text: text,
          completed: false
      };
      
      todos.push(newTodo);
      saveTodos();
      renderTodos();
      updateItemsLeft();
      
      taskInput.value = '';
      taskInput.focus();
  }
  
  // Toggle todo completion status
  function toggleTodo(id) {
      todos = todos.map(todo => {
          if (todo.id === id) {
              return { ...todo, completed: !todo.completed };
          }
          return todo;
      });
      
      saveTodos();
      renderTodos();
      updateItemsLeft();
  }
  
  // Delete todo
  function deleteTodo(id) {
      todos = todos.filter(todo => todo.id !== id);
      saveTodos();
      renderTodos();
      updateItemsLeft();
  }
  
  // Clear completed todos
  function clearCompleted() {
      todos = todos.filter(todo => !todo.completed);
      saveTodos();
      renderTodos();
  }
  
  // Filter todos
  function filterTodos(filter) {
      currentFilter = filter;
      
      filterButtons.forEach(btn => {
          if (btn.dataset.filter === filter) {
              btn.classList.add('active');
          } else {
              btn.classList.remove('active');
          }
      });
      
      renderTodos();
  }
  
  // Render todos based on current filter
  function renderTodos() {
      todoList.innerHTML = '';
      
      const filteredTodos = todos.filter(todo => {
          if (currentFilter === 'active') return !todo.completed;
          if (currentFilter === 'completed') return todo.completed;
          return true; // 'all' filter
      });
      
      filteredTodos.forEach(todo => {
          const li = document.createElement('li');
          li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
          
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.className = 'todo-checkbox';
          checkbox.checked = todo.completed;
          checkbox.addEventListener('change', () => toggleTodo(todo.id));
          
          const span = document.createElement('span');
          span.className = 'todo-text';
          span.textContent = todo.text;
          
          const deleteBtn = document.createElement('button');
          deleteBtn.className = 'delete-btn';
          deleteBtn.textContent = '×';
          deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
          
          li.appendChild(checkbox);
          li.appendChild(span);
          li.appendChild(deleteBtn);
          todoList.appendChild(li);
      });
  }
  
  // Update items left count
  function updateItemsLeft() {
      const activeCount = todos.filter(todo => !todo.completed).length;
      itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;
  }
  
  // Save todos to localStorage
  function saveTodos() {
      localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  // Event listeners
  addButton.addEventListener('click', addTodo);
  
  taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTodo();
  });
  
  clearCompletedBtn.addEventListener('click', clearCompleted);
  
  filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
          filterTodos(btn.dataset.filter);
      });
  });
});