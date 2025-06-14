const myLibrary = [];

// Object constructor for Books
function Book(id, title, author, datePublished, genre) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.datePublished = datePublished;
    this.genre = genre;
}

function addBookToLibrary(title, author, datePublished, genre) {
    let book = new Book(crypto.randomUUID(), title, author, datePublished, genre);
    myLibrary.push(book);
}

function displayToLibrary() {
    const bookTitles = document.querySelectorAll(".title");
    const bookAuthors = document.querySelectorAll(".author");
    const bookDatePublished = document.querySelectorAll(".date-published");
    const bookGenre = document.querySelectorAll(".genre");
    let i = 0;

    myLibrary.forEach(book => {
        bookTitles[i].textContent = book.title;
        bookAuthors[i].textContent = book.author;
        bookDatePublished[i].textContent = book.datePublished;
        bookGenre[i].textContent = book.genre;
        i++;
    });
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "July 11, 1960", "Southern Gothic, Bildungsroman");
addBookToLibrary("Fahrenheit 451", "Ray Bradbury", "October 19, 1953", "Dystopian");
addBookToLibrary("Pride and Prejudice", "Jane Austen", "January 28, 1813", "Classic Regency, Romance");
addBookToLibrary("Odyssey", "Homer", "1614", "Epic");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "April 10, 1925", "Tragedy");

displayToLibrary();