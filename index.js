import Books from './modules/books.js';

const booksContainer = document.getElementById('books-container');
const addBookForm = document.getElementById('add-book');
const title = document.getElementById('title');
const author = document.getElementById('author');

const allBooks = new Books();

function reload() {
  booksContainer.innerHTML = allBooks.books
    .map(
      (
        bookItem,
        index,
      ) => `<div class="book-item"><p><strong>"${bookItem.title}" by ${bookItem.author}.</strong></p>
      <button onclick="removeBook(${index})">Remove</button>
      </div>`,
    )
    .join('');
  if (allBooks.books.length === 0) {
    booksContainer.style.cssText = 'border: none;';
  } else {
    booksContainer.style.cssText = 'border: 3px black solid;';
  }
}

reload();

addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
  };
  allBooks.addBook(newBook);
  title.value = '';
  author.value = '';
  reload();
});
/* eslint-disable no-unused-vars */
const removeBook = (bookIndex) => {
  allBooks.removeBook(bookIndex);
  reload();
};
/* eslint-disable no-unused-vars */

// Adding Navigation using JS

const sections = document.querySelectorAll('.section');

function makeActive(className) {
  sections.forEach(item => item.classList.contains(className) ? item.classList.add('active') : item.classList.remove('active'));
}

document.querySelector('.date').innerHTML = Date();