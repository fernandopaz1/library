const btnNewBook = document.querySelector("#addBook");
const bookContainer = document.querySelector("#books")
let myLibrary = [];

function Book(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
}

Book.prototype.info = function () {
    let s = this.readed ? "readed" : "not readed yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${s}`;
}

let book1 = new Book("Hola", "mundo", 11, true);


btnNewBook.addEventListener("click", addBookToLibrary)

function addBookToLibrary() {
    let name = prompt("Introduce the name of the book:");
    let author = prompt("Introduce the name of the author:");
    let pages = +prompt("Introduce the number of the pages:");
    myLibrary.push(new Book(name, author, pages, false));
    showBook(myLibrary[0])
}



function showBook(book) {  
    let title = `<h1  class=${"title"}>${book.title}</h1>`;
    let author = `<h3  class=${"author"}>${book.author}</h3>`;
    let pages = `<h4  class=${"pages"}>${book.pages}</h4>`;
    let hasBeenReaded = book.readed ? "readed" : "not readed";
    let readed = `<h4  class=${"readed"}>${hasBeenReaded}</h4>`;

    let btnDelete = `<button id=${`del${book.title}`}>Delete</button>`
    let btnReaded = `<button id=${`read${book.title}`}>Readed</button>`
    let btnContainer = `<div id=${`${book.title}`}>${btnDelete} ${btnReaded}</div>` 

    let content = `<div id=${book.title}>${title} ${author} ${pages} ${readed} ${btnContainer}</div>`

    bookContainer.innerHTML += content
}

function removeElement(elem) {
    elem.parentNode.removeChild(elem);
}
