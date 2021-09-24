var del;
let image = ""
class Book {
    constructor(EMAGE,title, author, isbn, Price) {
      this.image = EMAGE;  
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.Price = Price;
    }
  }
  
  class UI {
    addBookToList(book) {
      const list = document.getElementById('book-list');
      // Create tr element
      const row = document.createElement('tr');
      // Insert cols
      row.innerHTML = `
      <div class="card mb-3 rounded bg-white bg-opacity-75" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="img-wrap col-md-4">
              <img src="${book.image}" class="rounded mx-auto d-block img-fluid">
            </div>
                <div class="col-md-8">
                  <div class="card-body">

                    <a href="#" class="h4 title">${book.title}</a>

                    <p> English, Paperback, Unknown </p>

                    <dl class="row">
                      <dd class="col-sm-9"><strong> Author : </strong>${book.author}</dd>
                      <dd class="col-sm-9"><strong> ISBN# </strong>${book.isbn}</dd>
                    </dl>

                    <dl class="dlist-align my-3">
                      <dt class="h5 text-success">Selling Price:</dt>
                      <dd class="h5">$${book.Price}</dd>
                    </dl>

                    <div class="d-grid gap-2" id="${book.isbn}">
                      <a href="#" class="btn btn-danger btn-block delete" id="${book.isbn}"><i class="fa fa-times"></i> Remove </a>
                    </div>

                  </div> <!-- info-main.// -->
                </div> <!-- col.// -->
          </div>
        </div>
      `;
    
      list.appendChild(row);
      del= document.querySelectorAll('.delete');
    }
  
    showAlert(message, className) {
      // Create div
      const div = document.createElement('div');
      // Add classes
      div.className = `alert ${className}`;
      // Add text
      div.appendChild(document.createTextNode(message));
      // Get parent
      const container = document.querySelector('.cont');
      // Get form
      const form = document.querySelector('#book-form');
      // Insert alert
      container.insertBefore(div, form);
  
      // Timeout after 3 sec
      setTimeout(function(){
        document.querySelector('.alert').remove();
      }, 3000);
    }
  
    deleteBook(target) {
        target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    }
  
    clearFields() {
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
      document.getElementById('Price').value = '';
      document.getElementById('FileInput').value = '';
    }
  }
  

  // Local Storage Class
  class Store {
    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
  
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach(function(book){
        const ui  = new UI;
  
        // Add book to UI
        ui.addBookToList(book);
      });
    }
  
    static addBook(book) {
      const books = Store.getBooks();
    
      books.push(book);
    
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(isbn) {
      const books = Store.getBooks();
  
      books.forEach(function(book, index){
       if(book.isbn === isbn) {
        books.splice(index, 1);
       }
      });
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
  
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', Store.displayBooks);
  
  document.querySelector("#FileInput").addEventListener("change", function (){
     const img = new FileReader();
      img.addEventListener("load", () => {
        image= img.result;
      })
     img.readAsDataURL(this.files[0]);
     
    })

  // Event Listener for add book
  document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value,
          Price = document.getElementById('Price').value
  
    // Instantiate book
    const book = new Book(image,title, author, isbn, Price);
  
    // Instantiate UI
    const ui = new UI();
  
  
    // Validate
    if(image === '' || title === '' || author === '' || isbn === '' || Price === '') {
      // Error alert
      ui.showAlert('Please fill in all fields', 'error');
    } else {
      // Add book to list
      ui.addBookToList(book);
  
      // Add to LS
      Store.addBook(book);
  
      // Show success
      ui.showAlert('Book Added!', 'success');
    
      // Clear fields
      ui.clearFields();
    }
  
    e.preventDefault();
  });
  
  // Event Listener for delete

  document.addEventListener('DOMContentLoaded', function(e){
    del= document.querySelectorAll('.delete');
    console.log(del);
  });
    
    document.getElementById('book-list').addEventListener('mouseenter',function(e)
    {
      var count=0;
      del= document.querySelectorAll('.delete');
      console.log("sucess");
      var i=0;
      for(i=0 ; i< del.length ; i++){
        
        del[i].addEventListener('click', function(e){
          {
            const ui = new UI();
            
            // Delete book
            ui.deleteBook(e.target);
              
            // Remove from LS
            Store.removeBook(this.id);
              
            // Show message
            
              
            e.preventDefault();
          }
        });
    }
    });