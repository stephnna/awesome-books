class AwesomeBooks {
  bookList;
  awesomeBook;
  bttn;

  constructor() {
    this.awesomeBook = document.getElementById('awesome-book');
    this.awesomeBook.style.display = 'none';
    this.bttn = document.getElementById('bttn');
    this.bookList = [];
  }

  displayBooks(list) {
    let tr = '';
    let sn = 1;
    list.forEach((item) => {
      const tr1 = `<tr>
      <td>${sn}</td>
      <td>${item.title}</td>
      <td>${item.author}</td>
      <td> <button type ="button" class = "remove-book" data-bookId="${(sn - 1)}">Remove</button></td>
      </tr>`;
      tr += tr1;
      sn += 1;
    });
    document.getElementById('tbody').innerHTML = tr;
  }

  getLocalStorageData() {
    const data = JSON.parse(localStorage.getItem('bookdata'));
    if (data != null && data.length > 0) {
      this.awesomeBook.style.display = 'block';
      this.displayBooks(data);
    } else {
      this.awesomeBook.style.display = 'none';
    }
  }

  submitForm(title, author) {
    const data = JSON.parse(localStorage.getItem('bookdata'));
    if (data != null && data.length > 0) {
      this.bookList = data;
    }

    const data2 = { title, author };
    this.bookList.push(data2);
    localStorage.setItem('bookdata', JSON.stringify(this.bookList));
    document.getElementById('book-form').submit();
    this.getLocalStorageData();
    window.location.reload(true);
  }

  deleteBooks(key) {
    const data = JSON.parse(localStorage.getItem('bookdata'));
    if (data != null && data.length > 0) {
      const item = data[key];
      const newData = data.filter((ele) => ele !== item);
      localStorage.setItem('bookdata', JSON.stringify(newData));
      this.getLocalStorageData();
    }
    window.location.reload(true);
  }
}

const ab = new AwesomeBooks();

document.getElementById('bttn').onclick = () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  ab.submitForm(title.value, author.value);
};

if (localStorage.getItem('bookdata') != null) {
  ab.getLocalStorageData();
}

const deleteBookObj = document.querySelectorAll('.remove-book');
deleteBookObj.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    ab.deleteBooks(trigger.dataset.bookid);
  });
});