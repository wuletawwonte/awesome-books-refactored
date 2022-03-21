import Books from './modules/books.js';
import reload from './modules/reload.js';
import navigateTo from './modules/navigate.js';
import addBook from './modules/addbook.js';
import { DateTime } from './modules/luxon.js';

const addBookForm = document.getElementById('add-book');
const removeBookBtns = document.querySelectorAll('.remove-book');
const menuItems = document.querySelectorAll('.menu-item');
const dateContainer = document.querySelector('.date');

const allBooks = new Books();

reload(allBooks);

addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addBook(allBooks);
  reload(allBooks);
});

const removeBook = (bookIndex) => {
  allBooks.removeBook(bookIndex);
  reload(allBooks);
};

const loadDate = () => {
  let now = DateTime.now();
  dateContainer.innerHTML = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}

loadDate();

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    navigateTo(menuItem.dataset.name);
  });
});

removeBookBtns.forEach(removeBookBtn => {
  removeBookBtn.addEventListener('click', ()=>{
    removeBook(removeBookBtn.dataset.bookid);
  });
});