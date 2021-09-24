search = "";
search = localStorage.getItem("Search");
console.log(search);

class UI {
  addBookToList(book) {
    const list = document.querySelector('.details');
    // Create tr element
    const row = document.createElement('div');
    row.className="card-body card shadow"
    // Insert cols
    row.innerHTML = `
    
    <h3 class="card-title mb-10">Product details</h3>
    <div class="img-wrap-2 col-md-14">
    <a class="img"><img src="${book.image}" class="rounded img-fluid"></a>
    </div>
    <a class="h4 title">${book.title}</a>
    <p> English, Paperback, Unknown </p>
    <div class="row">
        <dd class="col-sm-14"><strong> Author : </strong>${book.author}</dd>
        <dd class="col-sm-14"><strong> ISBN# </strong>${book.isbn}</dd>
        </div>
        
        
      `;

    list.appendChild(row);
    
      
    var price=parseInt(book.Price);
    console.log(price);
    price=(price*80)/100;

    const list1 = document.querySelector('.price');
    // Create tr element
    const row1 = document.createElement('div');
    row1.className="card shadow"
    var dis=book.Price-10;
    // Insert cols
    row1.innerHTML = `
    <div class="card-body">
                        <h3 class="mb-3">Overview</h4>
                            <dl class="dlist-align">
                                <dt class="h5 text-muted">Book name:</dt>
                                <dd><a class="h5 book-name">${book.title}</a></dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt class="h5 text-muted">Total price:</dt>
                                <dd class="h5 text-success">${book.Price}</dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt class="h5 text-muted">Discount:</dt>
                                <dd class="h5 text-danger">20% 0ff</dd>
                            </dl>
                            <hr>
                            <dl class="dlist-align">
                                <dt class="h5">Total:</dt>
                                <dd class="h5">${price}</dd>
                            </dl>
                            <hr>
                            <p class="small mb-3 text-muted">By clicking you are agree with terms of condition </p>
                            <a href="#" class="btn btn-warning btn-block"> Place Order </a>

    </div>
    
      `;

    list1.appendChild(row1);
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
      e.preventDefault();
      var comp = books.title.toUpperCase();
      if (search.localeCompare(comp) == 0) {
        console.log(search);
        const ui = new UI;
        // Add book to UI
        ui.addBookToList(books);
      }
    });
  }

}

document.addEventListener('DOMContentLoaded', Store.displayBooks);