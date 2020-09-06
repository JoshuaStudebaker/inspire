export default class Todo {
  constructor({ _id, completed, user, description }) {
    console.log(_id);
    this._id = _id;
    this.completed = completed;
    this.user = user;
    this.description = description;
  }

  get Template() {
    return `
    <p>${this._id} - ${this.user}</p>
    `;
  }

  get UserTemplate() {
    return `
    <p>Hello ${this.user}</p>
    `;
  }
}
