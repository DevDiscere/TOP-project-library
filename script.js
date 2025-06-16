const myLibrary = [];

// Object constructor for Books
function Book(id, title, author, numberOfPages, datePublished, genre, hasReadBook) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages
    this.datePublished = datePublished;
    this.genre = genre;
    this.hasReadBook = hasReadBook;
}

function createBookCard(title, author, numberOfPages, datePublished, genre, hasReadBook) {
    const bookGallery = document.querySelector(".book-gallery");
    const bookCard = document.createElement("article");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookDatePublished = document.createElement("p");
    const bookGenre = document.createElement("p");
    // Will change this into a pill
    const bookHasReadBook = document.createElement("p");

    bookCard.className = "book-card";
    bookTitle.textContent = title;
    bookAuthor.textContent = author;
    bookPages.textContent = `${numberOfPages} pages`;
    bookDatePublished.textContent = datePublished;
    bookGenre.textContent = genre;
    bookHasReadBook.textContent = hasReadBook ? "Yes, I have read the book" : "No, I haven't read the book";

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookDatePublished);
    bookCard.appendChild(bookGenre);
    bookCard.appendChild(bookHasReadBook);

    bookGallery.appendChild(bookCard);
}

function addBookToLibrary(title, author, numberOfPages, datePublished, genre, hasReadBook) {
    let book = new Book(crypto.randomUUID(), title, author, numberOfPages, datePublished, genre, hasReadBook);
    
    myLibrary.push(book);

    createBookCard(title, author, numberOfPages, datePublished, genre, hasReadBook);
}

const newBookButton = document.querySelector(".new-book-button");
const dialogModal = document.querySelector("dialog");
const closeModalButton = document.querySelector(".close-modal-button");
const modalForm = document.querySelector("form");

newBookButton.addEventListener("click", () => {
    dialogModal.showModal();
});

closeModalButton.addEventListener("click", () => {
    dialogModal.close();
});

modalForm.addEventListener("submit", () => {
    const modalFormData = new FormData(modalForm);
    const modalFormInputs = modalForm.querySelectorAll("input");
    
    addBookToLibrary(
        modalFormData.get("title"),
        modalFormData.get("author"),
        modalFormData.get("pages"),
        modalFormData.get("date-published"),
        modalFormData.get("genre"),
        modalFormData.get("has-read-book")
    );

    // Clear form input values
    for (const input of modalFormInputs) {
        input.value = null;
    }
});

addBookToLibrary(
    "To Kill a Mockingbird", 
    "Harper Lee", 
    281, 
    "July 11, 1960", 
    "Southern Gothic, Bildungsroman", 
    true
);
addBookToLibrary(
    "Fahrenheit 451", 
    "Ray Bradbury", 
    156,
    "October 19, 1953",
    "Dystopian",
    true
);
addBookToLibrary(
    "Pride and Prejudice", 
    "Jane Austen",
    279, 
    "January 28, 1813", 
    "Classic Regency, Romance",
    false
);
addBookToLibrary(
    "Odyssey", 
    "Homer",
    541, 
    "1614", 
    "Epic",
    true
);
addBookToLibrary(
    "The Great Gatsby", 
    "F. Scott Fitzgerald", 
    180,
    "April 10, 1925", 
    "Tragedy",
    false
);
