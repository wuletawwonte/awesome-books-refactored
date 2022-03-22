export default class Books {
  constructor() {
    this.books = JSON.parse(window.localStorage.getItem('books')) || [];
  }

  addBook(book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(bookIndex) {
    this.books.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
