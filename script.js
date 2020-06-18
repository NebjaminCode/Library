let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary() {
    
}

// "New Book" button selector
const newBookButton = document.querySelector('#newBook');

// sample book to check render
const harry = new Book("Harry Potter & The Chamber of Secrets", "JK Rowling", 341, "Yes")
myLibrary.push(harry)

var render = function(template, node) {
    node.innerHTML += template;
}

// rendering table head
render(`<thead id='thead'>
        <td>Title<td>
        <td>Author<td>
        <td>Page Count<td>
        <td>Read?<td>
        </thead>`,
    document.querySelector('#bookList')
);

// rendering myLibrary contents
myLibrary.forEach(function(element){
    var template = `<tr>
                        <td>${element.title}<td>
                        <td>${element.author}<td>
                        <td>${element.pages}<td>
                        <td>${element.read}<td>`;
    render(template, document.querySelector('#bookList'))
})

const table = document.querySelector('table')
const topRow = document.querySelector('tr')

topRow.style.background = 'white';
topRow.style.marginBottom = '20px';
topRow.style.textAlign = 'center';
topRow.style.fontSize = '1.3em';

table.style.background = 'grey';
table.style.borderCollapse = 'collapse';











/*
render(myLibrary, document.getElementById('bookList'))


const newBookButton = document.querySelector('#newBook');
const bookList = document.querySelector('#bookList');
const rowData = Object.keys(myLibrary[0])

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary() {

}

// sample book to check render
const harry = new Book("Harry Potter & The Chamber of Secrets", "JK Rowling", 341, "Yes")
myLibrary.push(harry)

// render function to make content appear on screen
var render = function(template, node) {
    node.innerHTML += template;
}
// creating table cells & content
myLibrary.forEach(function(element){
    var template = `<tr>
                        <td>${element.title}<td>
                        <td>${element.author}<td>
                        <td>${element.pages}<td>
                        <td>${element.read}<td>`;
    render(template, document.querySelector('#bookList'))
})

/*
// table head generating function
function generateTableHead(table, rowData) {
    let tHead = table.createTHead();
    let row = tHead.insertRow();
    for (let key of rowData) {
        let th = document.createElement('th');
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

// table generating function
generateTableHead(bookList, rowData)
*/

