import { TodoItem, createNewTodoItem, createTodoElementHTML } from './todo';

const selectElement = document.querySelector('.todoControls__prioritySelect');
const textInputElement = document.querySelector('.todoControls__textInput');
const dateInputElement = document.querySelector('.todoControls__dateInput');
const addButtonElement = document.querySelector('.todoControls__addButton');
const todoListElement = document.querySelector('.todoList');


const todoListTasks = [
  new TodoItem({
    priority: 2,
    text: 'Купить еды черепахе',
    deadline: '28.01.2021'
  }),
  new TodoItem({
    priority: 1,
    text: 'Купить еды коту',
    deadline: '26.01.2021'
  }),
  new TodoItem({
    priority: 3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates.',
    deadline: '30.01.2021'
  })
];


function addButtonHandler() {
  const newTodoItem = createNewTodoItem(selectElement, textInputElement, dateInputElement);
  
  todoListTasks.unshift(newTodoItem);

  renderItemList();
}

function todoItemClickHandler(event) {
  event.stopPropagation();
  event.preventDefault();

  const { target } = event;
  const { classList } = target;
  const isDeleteButton = classList.contains('todo__buttonDelete');
  const isEditButton = classList.contains('todo__buttonEdit');
  const isSaveButton = classList.contains('todo__editModeButton');
  
  const todoElement = target.closest('.todo');
  const todoId = todoElement && todoElement.dataset.id;

  if (isDeleteButton) {
    const index = todoListTasks.findIndex( todoItem => todoItem.id === Number.parseInt(todoId) );

    todoListTasks.splice(index, 1);
    todoElement.remove();
  }

  if (isEditButton) {
    todoElement.classList.toggle('todo--editEnabled');
    const input = todoElement.querySelector('.todo__editModeInput');
    const valueBefore = todoElement.querySelector('.todo__text').textContent;
    input.value = valueBefore;
  }

  if (isSaveButton) {
    const input = todoElement.querySelector('.todo__editModeInput');
    const valueToSet = input.value;

    if (!valueToSet.length) {
      return;
    }

    todoElement.classList.toggle('todo--editEnabled');
    const textInputElement = todoElement.querySelector('.todo__text');
    textInputElement.textContent = valueToSet;
  }
}



// обработчики кнопки добавления новой задачи
addButtonElement.addEventListener('click', addButtonHandler);

// обработчики удаляющие существующую задачу
// обработчики которые позволяют отредактировать задачу
todoListElement.addEventListener('click', todoItemClickHandler);

// функция рисующая весь список задач
function renderItemList() {
  const tasksToRender = todoListTasks.map( todo => createTodoElementHTML(todo) );
  todoListElement.innerHTML = tasksToRender.join('');
}

// функция запускающая всё приложение
function initApplication() {
  renderItemList();
}

initApplication();
