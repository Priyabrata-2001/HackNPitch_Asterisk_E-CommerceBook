
var count=1;
class UI {
  addBookToList(book) {
    var trend = document.querySelector('.trend');
    // Create tr element
    const bro = document.createElement('div');
    bro.className="col-4 trending";
    bro.id=book.title;
    // Insert cols
    bro.innerHTML = ` 
    <a href="PRODUCT.html">
    <a class="img-wrap"><img src="${book.image}" class="rounded mx-auto d-block img-fluid"></a>
    <h4>${book.title}</h4>
    <p> ${book.Price} </p>
    </a>
      `;

    trend.appendChild(bro);
  }

}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks(e) {
    const books = Store.getBooks();

    books.forEach(function (books) {
      if(count<=4)
      {
         //console.log(books.title);
         e.preventDefault();
         const ui = new UI;
         // Add book to UI
         ui.addBookToList(books);
         count++;
      }
     
    });

  }

}

document.addEventListener('DOMContentLoaded', Store.displayBooks);