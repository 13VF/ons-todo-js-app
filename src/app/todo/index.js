export class Todo {
  constructor(options = { priority: 1 }) {
    const { priority, text, deadline } = options;

    this.priority = priority;
    this.text = text;
    this.deadline = deadline;
    this.createDate = Date.now();
  }
}