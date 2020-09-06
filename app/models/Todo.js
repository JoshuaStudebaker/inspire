export default class Todo {
  constructor({ _id, completed, user, description }) {
    this._id = _id;
    this.completed = completed;
    this.user = user;
    this.description = description;
  }

  get Template() {
    return `
    <form>
    <div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="completed">
  <label class="custom-control-label" for="completed" value="true">${this.description}</label>
</div>
<form>
    `;
  }
}
