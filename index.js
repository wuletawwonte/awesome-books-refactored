import navigateTo from "./modules/navigate.js";
import { DateTime } from "./modules/luxon.js";
import Books from './modules/books.js';

const dateContainer = document.querySelector(".date");
const menuItems = document.querySelectorAll(".menu-item");
const booksContainer = document.getElementById('books-container');
const addBookForm = document.getElementById('add-book');
const title = document.getElementById('title');
const author = document.getElementById('author');

const allBooks = new Books();

const loadDate = () => {
  dateContainer.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS
  );
};

setInterval(loadDate, 1000);

const removeBook = (bookIndex) => {
  allBooks.removeBook(bookIndex);
  reload();
};


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
  navigateTo('books-list');
});


menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    navigateTo(menuItem.dataset.name);
  });
});



const deleteBtns = document.querySelectorAll('.delete-btn');

deleteBtns.forEach(btn => {
  btn.onclick = (e) => {
    removeBook(e.target.dataset.id);
  }
});










// import navigateTo from "./modules/navigate.js";
// import { DateTime } from "./modules/luxon.js";
// import Books from "./modules/books.js";

// class Books {
//   constructor() {
//     this.books = JSON.parse(window.localStorage.getItem("books")) || [];
//   }

//   addBook(book) {
//     this.books.push(book);
//     localStorage.setItem("books", JSON.stringify(this.books));
//   }

//   removeBook(bookIndex) {
//     this.books = this.books.filter((item, index) => {
//       if (index !== bookIndex) {
//         return item;
//       }
//       return undefined;
//     });
//     localStorage.setItem("books", JSON.stringify(this.books));
//   }
// }

// const dateContainer = document.querySelector(".date");
// const removeBookBtns = document.querySelectorAll(".remove-book");
// const booksContainer = document.getElementById("books-container");
// const addBookForm = document.getElementById("add-book");
// const title = document.getElementById("title");
// const author = document.getElementById("author");

// const allBooks = new Books();

// removeBookBtns.forEach((removeBookBtn) => {
//   removeBookBtn.addEventListener("click", (e) => {
//     removeBook(e.target.dataset.bookid);
//   });
// });

// const loadDate = () => {
//   dateContainer.innerHTML = DateTime.now().toLocaleString(
//     DateTime.DATETIME_MED_WITH_SECONDS
//   );
// };

// setInterval(loadDate, 1000);

// menuItems.forEach((menuItem) => {
//   menuItem.addEventListener("click", () => {
//     navigateTo(menuItem.dataset.name);
//   });
// });

// const removeBook = (bookIndex) => {
//   allBooks.removeBook(bookIndex);
//   reload();
// };

// function reload() {
//   booksContainer.innerHTML = allBooks.books
//     .map(
//       (bookItem, index) => `<div class="book-item"><p><strong>"${
//         bookItem.title
//       }" by ${bookItem.author}.</strong></p>
//       <button onclick="${removeBook(index)}">Remove</button>
//       </div>`
//     )
//     .join("");
//   if (allBooks.books.length === 0) {
//     booksContainer.style.cssText = "border: none;";
//   } else {
//     booksContainer.style.cssText = "border: 3px black solid;";
//   }
// }

// reload();

// addBookForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const newBook = {
//     title: title.value,
//     author: author.value,
//   };
//   allBooks.addBook(newBook);
//   title.value = "";
//   author.value = "";
//   reload();
//   navigateTo('books-list');
// });
