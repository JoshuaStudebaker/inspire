export default class Quote {
  constructor(data) {
    console.log(data);
    this.author = data.quote.author;
    this.body = data.quote.body;
  }
  get Template() {
    return `
    <p class="mb-0 line-spacing author-hover my-0"><i>${this.body}</i></p>
    <p class="author-hide mt-1"> - ${this.author}</p>
    
    `;
  }
}
