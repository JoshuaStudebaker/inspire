export default class Todo {
  constructor({ _id, completed, user, description }) {
    this._id = _id;
    this.completed = completed;
    this.user = user;
    this.description = description;
  }

  get Template() {
    if (!this.completed) {
      return `
      
      <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="completed">
      <label class="custom-control-label" for="completed" value="" onclick="app.todoController.toggleTodoStatus('${this._id}')">${this.description}</label>
      </div>
      
      `;
    }

    return `
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="completed" checked>
      <label class="custom-control-label text-muted" for="completed" value="" onclick="app.todoController.toggleTodoStatus('${this._id}')"><s>${this.description}</s></label>
      </div>
    `;
  }
}
