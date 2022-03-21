import Books from './modules/books.js';
import reload from './modules/reload.js';
import navigateTo from './modules/navigate.js';
import addBook from './modules/addbook.js';

const addBookForm = document.getElementById('add-book');

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


document.querySelector('.date').innerHTML = Date();

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    navigateTo(menuItem.dataset.name);
  });
});

const removeBookBtns = document.querySelectorAll('.remove-book');

removeBookBtns.forEach(removeBookBtn => {
  removeBookBtn.addEventListener('click', ()=>{
    removeBook(removeBookBtn.dataset.bookid);
  });
});