export default class Todo {
  constructor({ _id, completed, user, description }) {
    this._id = _id;
    this.completed = completed;
    this.user = user;
    this.description = description;
  }

  get Template() {
    return `
    <p>${this.description}</p>
    `;
  }
}
