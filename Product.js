search = "";
search = localStorage.getItem("Search");
var count=1;

class UI {
  addBookToList(book) {

    var comp = book.title.toUpperCase();
    if (search.localeCompare(comp) == 0) {

      
    var price=parseInt(book.Price);
    console.log(price);
    price=(price*80)/100;
    const list = document.querySelector('.details');
    // Create tr element
    const row = document.createElement('div');
    row.className="container-md"
    // Insert cols
    row.innerHTML = `
    <div class="container-lg">
        <div class="container-xl">
            <div class="container-xxl">


                <div class="row justify-content-around">
                    <div class="col-md-4">
                        <img src="${book.image}" width="100%">
                        
                    </div>
                    <div class="col-md-6 offset-md-0">




                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Books</li>
                            </ol>
                        </nav>



                        <h1>${book.title}</h1>
                        <p>by ${book.author}</p>
                        <br>
                        <br>
                        <h4>M.R.P <s>${book.Price}</s></h4>
                        <p class="fs-3">Offer price: ₹${price}</p>
                        <p>(20% OFF)</p>
                        <a class="btn btn-primary" href="Payment.html" role="button">Buy Now</a>
                        <p class="icontext"><i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks
                        </p>
                        <br>
                        <br>
                        <p class="fs-3 fw-bolder">Product Details</p>
                        <br>
                        <p class="fs-5">Print length      :  290 pages</p>
                        <p class="fs-5">Language          :  English</p>
                        <p class="fs-5">Publication Date  :  1st January 2020</p>
                        <p class="fs-5">Dimensions        :  16.99 x 1.68 x 24.41 cm</p>
                        <p class="fs-5">ISBN-10 ‏          : ‎ 9388511395</p>
                        <p class="fs-5">ISBN-13 ‏          : ‎ 978-9388511391</p>
                        <p class="fs-5">Item Weight ‏      : ‎ 467 g</p>
                        <p class="fs-5">Country of Origin: ‎ India</p>
                        


                    </div>
                </div>




            </div>
        </div>
</div>
      `;
  
    list.appendChild(row);
    }

    if(count<=4)
  {
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
    count++;
  }
     
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
      
     
        const ui = new UI;
        // Add book to UI
        ui.addBookToList(books);
      
    });

  }

}

document.addEventListener('DOMContentLoaded', Store.displayBooks);