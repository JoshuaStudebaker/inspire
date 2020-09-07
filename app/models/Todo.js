export default class Todo {
  constructor({ _id, completed, user, description }) {
    this._id = _id;
    this.completed = completed;
    this.user = user;
    this.description = description;
  }

  get Template() {
    return `
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="completed" ${this.CheckedTemplate}>
      <label class="custom-control-label text-muted" for="completed" value="" onclick="app.todoController.toggleTodoStatus('${this._id}')">${this.StrikethroughTemplateStart}${this.description}${this.StrikethroughTemplateEnd}</label>
      <i class="fas fa-trash" onclick="app.todoController.removeTodo('${this._id}')"></i>
      </div>
    `;
  }

  get CheckedTemplate() {
    if (!this.completed) {
      return ``;
    }
    return `checked`;
  }

  get StrikethroughTemplateStart() {
    if (!this.completed) {
      return ``;
    }
    return `<s>`;
  }

  get StrikethroughTemplateEnd() {
    if (!this.completed) {
      return ``;
    }
    return `</s>`;
  }
}
