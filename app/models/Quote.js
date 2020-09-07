export default class Quote {
  constructor(data) {
    console.log(data);
    this.author = data.quote.author;
    this.body = data.quote.body;
  }
  get Template() {
    return `
    <p class="text-right mb-0">"<i>${this.body}</i>"</p>
    <p class="text-right"> - ${this.author}</p>
    
    `;
  }
}
