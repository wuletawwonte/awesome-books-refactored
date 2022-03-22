import navigateTo from "./modules/navigate.js";
import { DateTime } from "./modules/luxon.js";
import Books from "./modules/books.js";
// import addBook from "./modules/addbook.js";

const menuItems = document.querySelectorAll(".menu-item");
const dateContainer = document.querySelector(".date");
const removeBookBtns = document.querySelectorAll(".remove-book");
const booksContainer = document.getElementById("books-container");
const addBookForm = document.getElementById("add-book");
const title = document.getElementById("title");
const author = document.getElementById("author");

const allBooks = new Books();

removeBookBtns.forEach((removeBookBtn) => {
  removeBookBtn.addEventListener("click", (e) => {
    removeBook(e.target.dataset.bookid);
  });
});

const loadDate = () => {
  dateContainer.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS
  );
};

setInterval(loadDate, 1000);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    navigateTo(menuItem.dataset.name);
  });
});

/* eslint-disable no-unused-vars */
const removeBook = (bookIndex) => {
  allBooks.removeBook(bookIndex);
  reload();
};
/* eslint-disable no-unused-vars */

function reload() {
  booksContainer.innerHTML = allBooks.books
    .map(
      (bookItem, index) => `<div class="book-item"><p><strong>"${
        bookItem.title
      }" by ${bookItem.author}.</strong></p>
      <button onclick="${removeBook(index)}">Remove</button>
      </div>`
    )
    .join("");
  if (allBooks.books.length === 0) {
    booksContainer.style.cssText = "border: none;";
  } else {
    booksContainer.style.cssText = "border: 3px black solid;";
  }
}

reload();

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newBook = {
    title: title.value,
    author: author.value,
  };
  allBooks.addBook(newBook);
  title.value = "";
  author.value = "";
  reload();
});
