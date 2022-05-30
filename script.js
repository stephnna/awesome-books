 const books = [
    {
      title: 'Book1',
      author: 'Stephen',
    },

    {
      title: 'Book2',
      author:'Rose',
      remove: 'Remove',
    },
  ];
  const awesomeBook = document.getElementById('awesome-book');

 for (let i = 0; i< books.length; i += 1) {
   const bookContainer = Document.createElement('div');
   awesomeBook.appendChild(bookContainer);
 }

Array.from(awesomeBook.children).forEach((child, index) => {
  child.innerHTML = `
  <h1>Awesome Books</h1>
  <h4> ${books[index].title}</h4>
  <h4> ${books[index].author}</h4>
  <button type="button">${books[index].remove}</button>
  <hr>
  `;
});