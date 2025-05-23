const myLibrary = [];
const color = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "grey", "black"];

class Book {
  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
  }
  
  
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  return newBook;
}

function displayBooks(){
  console.log("Displaying books");
  let bookshelf = document.querySelector(".bookshelf");
  bookshelf.innerHTML = "";
  myLibrary.forEach((book) => {
    let bookCard = document.createElement("div");
    bookCard.classList.toggle("book");
    let title = document.createElement("div");
    title.innerHTML = book.title;
    let author = document.createElement("div");
    author.innerHTML = book.author;
    let pages = document.createElement("div");
    pages.innerHTML = book.pages;
    let read = document.createElement("div");
    read.innerHTML = book.read ? "Read" : "Not Read";
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    let randomColor = color[book.pages % color.length];
    console.log(book.id.properties);
    bookCard.style.backgroundColor = randomColor;
    bookCard.dataset.id = book.id;
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.classList.toggle("delete");
    deleteButton.addEventListener("click", () => {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      displayBooks();
    });
      
    bookCard.appendChild(deleteButton);

    let readButton = document.createElement("button");
    readButton.classList.toggle("read");
    readButton.innerHTML = "toggle read";
    readButton.addEventListener("click", () => {
      book.read = !book.read;
      displayBooks();
    });
    bookCard.appendChild(readButton);

    bookshelf.appendChild(bookCard);
    
  })

}

console.log("Library loaded");

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
let book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, false);
let book3 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true);
let book4 = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 251, false);

addBookToLibrary(book1.title, book1.author, book1.pages, book1.read);
addBookToLibrary(book2.title, book2.author, book2.pages, book2.read);
addBookToLibrary(book3.title, book3.author, book3.pages, book3.read);
addBookToLibrary(book4.title, book4.author, book4.pages, book4.read);
displayBooks();

let dialog = document.querySelector("dialog");
let newBook = document.querySelector(".new-book");
let submit = document.querySelector("dialog > div > form > button");
let cancel = document.querySelector("dialog > div> button");

newBook.addEventListener("click", () => {
  dialog.showModal();
}
);

cancel.addEventListener("click", () => {
  dialog.close();
}
);

submit.addEventListener("click", (e) => {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  addBookToLibrary(title, author, pages, read);
  displayBooks();
  dialog.close();
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = ""; 
  document.querySelector("#read").checked = false;

  e.preventDefault();
});




