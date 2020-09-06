export default class Todo {
  constructor({ data }) {
    this._id = data._id;
    this.completed = data.completed;
    this.user = data.user;
    this.description = data.description;
  }

  get Template() {
    return `
    <p>${this.description}</p>
    `;
  }
}
