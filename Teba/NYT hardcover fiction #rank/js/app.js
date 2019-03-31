// API NEW YORK TIMES BOOKS REVIEWS

// Variables
const token = '--tuToken';

// Selectores
const listSlctr = document.querySelector("#booksList");

// Functions

function htmlRender(data){
  const booksList = data.results.books;
    booksList.forEach(book => {
      let bookCard = `<div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body">
            <h5>#${book.rank} ${book.title}</h5>
            <img src="${book.book_image}" alt="${book.title} book image" class="img-fluid mb-3">
            <h3>${book.author}</h3>
            <p>About: ${book.description}</p>
            <div class="d-flex justify-content-center">
              <div class="p-4">
                <a href="${book.amazon_product_url}" target=_blank>
                  <button class="btn btn-secondary btn-lg btn-block">Buy in Amazon</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>`
      listSlctr.innerHTML += bookCard;
      console.log(listSlctr);
    });
}

function errorHandler (err) {
  console.log("ERROR! Algo falla...");
}

function ajaxHandler(url, cb) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          const data = JSON.parse(request.responseText);
          cb(false, data);
        } else {
          cb(true, request.status);
        }
      }
    };
    request.open("GET", url, true);
    request.send();
  }

ajaxHandler(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${token}, function(err, data){
    if (err) {
    errorHandler(err);
  } else {
    htmlRender(data);
    };
  }
);
