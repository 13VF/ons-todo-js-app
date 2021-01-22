export class TodoItem {
  constructor(options = { priority: 1 }) {
    const { priority, text, deadline } = options;

    this.priority = priority;
    this.text = text;
    this.deadline = deadline;
    this.createDate = Date.now();
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