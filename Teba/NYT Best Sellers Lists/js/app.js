
// Selectors
const sectionSlctr = document.querySelector(".list-section");
const booksListSlctr = document.getElementById("booksList");
const indexBtnSlctr = document.querySelector(".indexBtn");
const token = "";

// Functions

function renderListnames(data) {
    const reviewsList = data.results;
    reviewsList.forEach(element => {
        let cardContent = `<div class="card section text-left border-dark mb-3">
        <div class="card-header">${element.display_name}</div>
            <div class="card-body">
                <p class="card-text">Newest: ${element.newest_published_date}</p>
                <p class="card-text">Oldest: ${element.oldest_published_date}</p>
                <p class="card-text">Updated: ${element.updated.toLowerCase()}</p>
            <a data-id="${element.list_name_encoded}" href="#" class="btn btn-dark">Read more!</a>
        </div>
        </div>`
        sectionSlctr.innerHTML += cardContent;
        });
}

function booksRender(data){
    const booksList = data.results.books;
    sectionSlctr.innerHTML = `<a type="button" class="btn indexBtn btn-danger"><i class="fas fa-angle-left"></i>Back to index</a>`;
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
        booksListSlctr.innerHTML += bookCard;
      });
  }

function renderBookList(id){
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${id}.json?api-key=${token}`)
        .then(r => r.json())
        .then(data => booksRender(data))
        .catch(e => console.log(e));
}  


function renderMain(){
    fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${token}`)
    .then(r => r.json())
    .then(data => renderListnames(data))
    .catch(e => console.log(e))
}


// Event Listeners
sectionSlctr.addEventListener("click", function (evt){
    const element = evt.target;
    if (element.nodeName === "A"){
        evt.preventDefault();
        const id = element.dataset.id;
        sectionSlctr.innerHTML = "";
        id ? renderBookList(id) : renderMain();
    } 
})

renderMain();

