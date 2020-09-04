export default class Quote {
  constructor(data) {
    console.log(data);
    this.author = data.quote.author;
    this.body = data.quote.body;
  }
  get Template() {
    return `
    <p>${this.author} - ${this.body}</p>
    
    `;
  }
}
