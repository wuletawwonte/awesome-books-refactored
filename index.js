import Books from './modules/books.js';
import reload from './modules/reload.js';

const booksContainer = document.getElementById('books-container');
const addBookForm = document.getElementById('add-book');
const title = document.getElementById('title');
const author = document.getElementById('author');
const sections = document.querySelectorAll('.section');

const allBooks = new Books();


reload(allBooks, booksContainer);

addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
  };
  allBooks.addBook(newBook);
  title.value = '';
  author.value = '';
  reload(allBooks, booksContainer);
});

const removeBook = (bookIndex) => {
  allBooks.removeBook(bookIndex);
  reload();
};

const navigateTo = (className) => {
  sections.forEach(item => item.classList.contains(className) ? item.classList.add('active') : item.classList.remove('active'));
}

document.querySelector('.date').innerHTML = Date();

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    navigateTo(menuItem.dataset.name);
  });
});

const removeBookBtns = document.querySelectorAll('.remove-book');

removeBookBtns.forEach(removeBookBtn => {
  
});