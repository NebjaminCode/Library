// allows New Book button to display user input form
const newBookButton = document.querySelector('#newBook');
const newBookForm = document.querySelector("#newBookForm")
newBookButton.addEventListener('click', function() {
    newBookForm.style.display = 'block';
})

// "submit" button at the end of user form
const submitNewBook = document.querySelector('#submit');

// sample book
const harry = new Book("Harry Potter & The Chamber of Secrets", "JK Rowling", 341, "Yes")

// library array containing all books. Starts with example book "harry"
let myLibrary = [harry];

// constructor function for creating new books
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}
    let newBook;
    // getting new values from user input
    let newTitle = document.getElementById('title')
    let newAuthor = document.getElementById('author')
    let newPages = document.getElementById('pageCount')
    let newRead = document.getElementById('read')

// function to add newly created books to library array
function addBookToLibrary() {
    // creating new element with user input
    newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newRead.value);
}    

    // rendering function
    var render = function(template, node) {
        node.innerHTML += template;
    }

    let node = document.querySelector('#bookList')

    // rendering table head
    function renderHead() {
        render(`<thead id='thead'>
            <td>Title<td>
            <td>Author<td>
            <td>Page Count<td>
            <td>Read?<td>
            </thead>`,
        document.querySelector('#bookList')
    )
    };
    renderHead()

function rendering () {
    // rendering myLibrary contents
    myLibrary.forEach(function(element){
        var template = `<tr>
                            <td>${element.title}<td>
                            <td>${element.author}<td>
                            <td>${element.pages}<td>
                            <td>${element.read}<td>`;
        render(template, node)
})
}



rendering();
submitNewBook.addEventListener('click', function() {   
    node.innerHTML = '';
    renderHead()
    addBookToLibrary()
    myLibrary.push(newBook)
    rendering()
        newTitle.value = "";
        newAuthor.value = "";
        newPages.value = "";
        newRead.value = "";


// styling
const table = document.querySelector('table')
const topRow = document.querySelector('tr')

topRow.style.background = 'white';
topRow.style.marginBottom = '20px';
topRow.style.textAlign = 'center';
topRow.style.fontSize = '1.3em';

table.style.background = 'grey';
table.style.borderCollapse = 'collapse';

})

const table = document.querySelector('table')
const topRow = document.querySelector('tr')

topRow.style.background = 'white';
topRow.style.marginBottom = '20px';
topRow.style.textAlign = 'center';
topRow.style.fontSize = '1.3em';

table.style.background = 'grey';
table.style.borderCollapse = 'collapse';
