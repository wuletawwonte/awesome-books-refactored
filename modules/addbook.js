
const title = document.getElementById('title');
const author = document.getElementById('author');

const addBook = (allBooks) => {
  const newBook = {
    title: title.value,
    author: author.value,
  };
  allBooks.addBook(newBook);
  title.value = '';
  author.value = '';
}

export default addBook;