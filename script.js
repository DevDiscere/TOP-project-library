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

Book.prototype.toggleReadStatus = function (bookObject) {
    currentReadStatus = this.hasReadBook;
    bookObject.hasReadBook = !currentReadStatus;
}

function createBookCard(uniqueId, title, author, numberOfPages, datePublished, genre, hasReadBook) {
    const bookGallery = document.querySelector(".book-gallery");
    const bookCard = document.createElement("article");
    const removeBookCardButton = document.createElement("button");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookDatePublished = document.createElement("p");
    const bookGenre = document.createElement("p");
    const toggleTrack = document.createElement("label");
    const toggleButton = document.createElement("input");

    bookCard.className = "book-card";
    bookCard.setAttribute("data-id", uniqueId);

    removeBookCardButton.className = "remove-button";
    removeBookCardButton.type = "button";
    removeBookCardButton.textContent = "Remove";
    removeBookCardButton.addEventListener("click", () => {
        const bookCardId = bookCard.getAttribute("data-id");
        const bookToBeRemoved = myLibrary.findIndex(book => book.id === bookCardId);

        // Remove book object from the myLibrary array using their index
        myLibrary.splice(bookToBeRemoved, 1);
        bookCard.remove();
    });

    bookTitle.textContent = title;
    bookAuthor.textContent = author;
    bookPages.textContent = `${numberOfPages} pages`;
    bookDatePublished.textContent = datePublished;
    bookGenre.textContent = genre;

    toggleTrack.className = "toggle-track";

    toggleButton.className = "toggle-button";
    toggleButton.type = "checkbox";
    toggleButton.name = "has-read-book";
    toggleButton.checked = hasReadBook;
    toggleButton.addEventListener("click", () => {
        const bookCardId = bookCard.getAttribute("data-id");
        const bookToBeUpdated = myLibrary.findIndex(book => book.id === bookCardId);

        myLibrary[bookToBeUpdated].toggleReadStatus(myLibrary[bookToBeUpdated]);
    });

    toggleTrack.appendChild(toggleButton);

    bookCard.appendChild(removeBookCardButton);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookDatePublished);
    bookCard.appendChild(bookGenre);
    bookCard.appendChild(toggleTrack);

    bookGallery.appendChild(bookCard);
}

function addBookToLibrary(title, author, numberOfPages, datePublished, genre, hasReadBook) {
    const uniqueId = crypto.randomUUID();
    const book = new Book(uniqueId, title, author, numberOfPages, datePublished, genre, hasReadBook);
    
    // Add the book object to the myLibrary array
    myLibrary.push(book);

    createBookCard(uniqueId, title, author, numberOfPages, datePublished, genre, hasReadBook);
}

const newBookButton = document.querySelector(".new-book-button");
const dialogModal = document.querySelector("dialog");
const closeModalButton = document.querySelector(".close-modal-button");
const modalForm = document.querySelector("form");
const toggleReadButtons = document.querySelectorAll("toggle-button");

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
