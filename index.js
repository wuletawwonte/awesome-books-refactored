import navigateTo from './modules/navigate.js';
import { DateTime } from './modules/luxon.js';
import Books from './modules/books.js';

const dateContainer = document.querySelector('.date');
const menuItems = document.querySelectorAll('.menu-item');
const addBookForm = document.getElementById('add-book');
const booksContainer = document.getElementById('books-container');
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
      <button class="delete-btn" data-id="${index}">Remove</button>
      </div>`,
    )
    .join('');
  if (allBooks.books.length === 0) {
    booksContainer.style.cssText = 'border: none;';
  } else {
    booksContainer.style.cssText = 'border: 3px black solid;';
  }
  const deleteBtns = document.querySelectorAll('.delete-btn');

  deleteBtns.forEach((btn) => {
    btn.onclick = (e) => {
      allBooks.removeBook(e.target.dataset.id);
      reload();
    };
  });
}

const loadDate = () => {
  dateContainer.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
};

setInterval(loadDate, 1000);

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
  reload(allBooks);
  navigateTo('books-list');
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    navigateTo(menuItem.dataset.name);
  });
});