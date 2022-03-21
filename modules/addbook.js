const title = document.getElementById('title');
const author = document.getElementById('author');

const addBook = (books) => {
  const newBook = {
    title: title.value,
    author: author.value,
  };
  books.addBook(newBook);
  title.value = '';
  author.value = '';
}

export default addBook;