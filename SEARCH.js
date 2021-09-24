search = "";
search = localStorage.getItem("Search");

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    


    <div class = "buy my-3" id="${book.title}" >
      <div class="bg-secondary bg-opacity-10" style="border-radius: 15px;" href="PRODUCT.html">
      <div class="row no-gutters" href="PRODUCT.html">
          <aside class="col-md-3">
              <a href="#" class="img-wrap"><img src="${book.image}"
                      class="mx-auto d-block img-fluid" style="border-radius: 15px;"></a>
          </aside> <!-- col.// -->
          <div class="col-md-6">
              <div class="info-main">
                  <a href="#" class="h4 title">${book.title}</a>
  
                  <p> English, Paperback, Unknown </p>
                  <div class="rating-wrap">
                      <span class="badge bg-success"><i class="icon text-light fa fa-star"></i> 4.8 </span>
                      <small class="label-rating text-muted" style="font-weight: bold;">132 orders</small>
                  </div>
  
                  <dl class="row my-3">
                      <dd class="col-sm-18"><strong> Author : </strong>${book.author}</dd>
                      <dd class="col-sm-18"><strong> ISBN# </strong>${book.isbn}</dd>
                  </dl>
  
                  <div class="col-md-14 my-3">
                      <p><i class="icon text-success fa fa-clipboard-check"></i> Bank Offer : 5% Cashback on Credit Card</p>
                      <p><i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
                  </div>
              </div> <!-- info-main.// -->
          </div> <!-- col.// -->
          <aside class="col-sm-3">
              <div class="info-aside">
                  <div class="price-wrap my-2">
                      <span class="price h5"><strong> ${book.Price} </strong></span>
                      <del class="price-old"> $98</del>
                  </div> <!-- info-price-detail // -->
                  <p class="text-success">Free shipping</p>
                  <br>
                  
              </div> <!-- info-aside.// -->
          </aside> <!-- col.// -->
      </div>
      </div>
      </div>
      


      
      
      `;

    list.appendChild(row);
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

    books.forEach(function (book) {
      if (search.localeCompare(books.title) !== 0) {
        const ui = new UI;
        // Add book to UI
        ui.addBookToList(book);
      }
    });

  }

}

document.addEventListener('DOMContentLoaded', Store.displayBooks);