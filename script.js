const newBookButton = document.querySelector('#newBook');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, with ${pages} pages, ${read}`;
    }
}


function addBookToLibrary() {
    let newBook = 'FIX ME';
    myLibrary.push(newBook);
}

var render = function(template, node) {
    node.innerHTML += template;
}



newBookButton.addEventListener('click', addBookToLibrary())

const harry = new Book("Harry Potter & The Chamber of Secrets", "JK Rowling", 341, "Yes")

myLibrary.push(harry)
console.log(myLibrary)

render(myLibrary, document.getElementById('bookList'))