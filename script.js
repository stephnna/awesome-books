let bookList = [];
const awesomeBook = document.getElementById('awesome-book');
const bttn = document.getElementById('bttn');
awesomeBook.style.display = 'none';

function displayBooks(list) {
  let tr = '';
  let sn = 1;
  list.forEach((item) => {
    tr += `<tr>
    <td>${sn}</td>
    <td>${item.title}</td>
    <td>` + item.author + `</td>
    <td> <button type ="button" class = "remove-book" data-bookId="` + (sn - 1) + `">Remove</button></td>
    </tr>`;
    sn += 1;
  });
  document.getElementById('tbody').innerHTML = tr;
}
  
function getLocalStorageData() {
  const data = JSON.parse(localStorage.getItem('bookdata'));
  if (data != null && data.length > 0) {
    awesomeBook.style.display = 'block';
    displayBooks(data);
  } else { 
    awesomeBook.style.display = 'none';
  }
}

bttn.onclick = function() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const data = JSON.parse(localStorage.getItem('bookdata'));
  if (data != null && data.length > 0) {
    bookList = data;
  }

  const data2 = {
    title: title.value,
    author: author.value,
  };
  bookList.push(data2);
  localStorage.setItem('bookdata', JSON.stringify(bookList));
  document.getElementById('book-form').submit();
};

if (localStorage.getItem('bookdata') != null) {
  getLocalStorageData();
}

const deleteBookObj = document.querySelectorAll('.remove-book');
deleteBookObj.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const data = JSON.parse(localStorage.getItem ('bookdata'));
    if (data != null && data.length > 0) {
      const key = parseInt(trigger.dataset.bookid);
      const item = data[key];
      const newData = data.filter((ele) => { return ele !== item; }); 
      localStorage.setItem('bookdata', JSON.stringify(newData));
      getLocalStorageData();
    }
  });
});