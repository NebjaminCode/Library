// allows New Book button to display user input form
const newBookButton = document.querySelector('#newBook');
const newBookForm = document.querySelector("#newBookForm")

newBookButton.addEventListener('click', function() {
    newBookForm.style.visibility = 'visible';
    newBookForm.style.opacity = '1';
    newBookForm.style.marginTop = '50px'
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
    // creating new element with user input & checking for read status
    if (newRead.checked == true) {
        newBook = new Book(newTitle.value, newAuthor.value, newPages.value, "Yes");
    } else {
        newBook = new Book(newTitle.value, newAuthor.value, newPages.value, "No") 
    }
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
            <td>Remove?<td>
            </thead>`,
        document.querySelector('#bookList')
    )
    };
    renderHead()

function rendering () {
    // rendering myLibrary contents
    myLibrary.forEach(function(element){
        var template = `<tr class='row'>
                    <td style="padding-left: 1%">${element.title}<td>
                    <td style="text-align:center">${element.author}<td>
                    <td style="text-align:center">${element.pages}<td>
                    <td id="readCell" style="text-align:center">${element.read}<td>
                    <td style="text-align:center">${element.innerHTML ='<input type="button" >'}<td>`;

        render(template, node);
 
        let readCell = document.getElementById('readCell')

        readCell.addEventListener('click', function() {
            if (readCell.innerHTML = "Yes") {
                readCell.innerHTML = "No";
            } else if (readCell.innerHTML = "No") {
                readCell.innerHTML = "Yes";
            }
        })
    })
}



rendering();
submitNewBook.addEventListener('click', function() {   
    node.innerHTML = '';
    renderHead()
    addBookToLibrary()

    if (newBook.title && newBook.author && newBook.pages && newBook.pages >= 0) {
            myLibrary.push(newBook)     
    } else {
        alert('You have not filled out the form correctly, please try again.')
    }

    rendering()
        newTitle.value = "";
        newAuthor.value = "";
        newPages.value = "";
        newRead.checked = false;
    newBookForm.style.visibility = 'hidden';
    newBookForm.style.marginTop = '-75px'
    newBookForm.style.opacity = '0';

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
