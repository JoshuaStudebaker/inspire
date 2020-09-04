export default class Todo {
  constructor({ id }) {
    console.log(id);
    this.id = id;
  }

  get Template() {
    return `
    <p>${this.id}</p>
    `;
  }
}
