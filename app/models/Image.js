export default class Image {
  constructor(data) {
    console.log(data);
    this.url = data.url;
  }

  get Template() {
    return `
    <img src="${this.url}">
    `;
  }
}
