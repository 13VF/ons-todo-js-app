import { createNewTodoItem } from './todo';

const selectElement = document.querySelector('.todoControls__prioritySelect');
const textInputElement = document.querySelector('.todoControls__textInput');
const dateInputElement = document.querySelector('.todoControls__dateInput');
const addButtonElement = document.querySelector('.todoControls__addButton');
const todoListElement = document.querySelector('.todoList');


const todoListTasks = [];


function addButtonHandler() {
  const newTodoItem = createNewTodoItem(selectElement, textInputElement, dateInputElement);
  
  todoListTasks.push(newTodoItem);
  renderTodoItem(newTodoItem);
}

// обработчики кнопки добавления новой задачи
addButtonElement.addEventListener('click', addButtonHandler);

const todoMods = {
  1: 'todo--high',
  2: 'todo--normal',
  3: 'todo--low'
};

// функция которая отрисует в DOM весь список задач
function renderTodoItem(todoItem) {
  const {priority, text, deadline, createDate} = todoItem;

  todoListElement.insertAdjacentHTML('afterbegin', `
    <div class="todo ${todoMods[priority]}" data-id="${createDate}">
      <div class="todo__text">${text}</div>
      <div class="todo__deadline">${deadline}</div>
      <div class="todo__buttons">
        <button class="todo__buttonEdit">Edit</button>
        <button class="todo__buttonDelete">Delete</button>
      </div>
    </div>
  `);
}




// функция запускающая всё приложение

// обработчики удаляющие существующую задачу

// обработчики которые позволяют отредактировать задачу