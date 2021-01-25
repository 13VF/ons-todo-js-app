interface ITodoItemOptions {
  priority: number;
  text: string;
  deadline: string;
}

export class TodoItem {
  priority: number;
  text: string;
  deadline: string;
  createDate: number;
  id: number;

  constructor(options: ITodoItemOptions = { priority: 1, text: 'UNSET', deadline: 'UNSET' }) {
    const { priority, text, deadline } = options;

    this.priority = priority;
    this.text = text;
    this.deadline = deadline;
    this.createDate = Date.now();
    this.id = Date.now() + (Math.floor( Math.random() * 1000001 ));
  }
}

export function createNewTodoItem(selectElement, textInputElement, dateInputElement) {
  const priority = selectElement.options[selectElement.selectedIndex].value;
  const text = textInputElement.value;
  const deadline = dateInputElement.value;

  return new TodoItem({
    priority,
    text,
    deadline
  });
}

const todoMods = {
  1: 'todo--high',
  2: 'todo--normal',
  3: 'todo--low'
};

export function createTodoElementHTML(todoItem) {
  const {priority, text, deadline, id} = todoItem;

  return `
    <div class="todo ${todoMods[priority]}" data-id="${id}">
      <div class="todo__viewMode">
        <div class="todo__text">${text}</div>
        <div class="todo__deadline">${deadline}</div>
      </div>
      <div class="todo__editMode">
        <input type="text" class="todo__editModeInput">
        <button class="todo__editModeButton">Save</button>
      </div>
      <div class="todo__buttons">
        <button class="todo__buttonEdit">Edit</button>
        <button class="todo__buttonDelete">Delete</button>
      </div>
    </div>
  `;
}