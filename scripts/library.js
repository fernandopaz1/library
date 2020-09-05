const btnNewBook = document.querySelector(".addBook");

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
    
}