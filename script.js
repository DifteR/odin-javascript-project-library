const myLibrary = [];
function Book(title, author, year, pages, languange, edition) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.language = languange;
    this.edition = edition;
}

function addBookToLibrary(title, author, year, pages, language, edition) {
    const newBook = new Book(title, author, year, pages, language, edition);
    myLibrary.push(newBook);
}

function submitForm(event) {
    event.preventDefault();
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var year = document.getElementById("year").value;
    var pages = document.getElementById("pages").value;
    var language = document.getElementById("languange").value;
    var edition = document.getElementById("edition").value;

    addBookToLibrary(title, author, year, pages, language, edition);
    displayListOfBooks();
    console.table(myLibrary);
}

var form = document.getElementById("addBook");
form.addEventListener("submit", submitForm);

addBookToLibrary("example", "example", 1000, 250, "example", "example")


function displayListOfBooks(){
    const table = document.getElementById("data-table");
    var i = 0;
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    for (const book of myLibrary) {
        const newRow = table.insertRow();
        const titleCell = newRow.insertCell(0);
        const authorCell = newRow.insertCell(1);
        const yearCell = newRow.insertCell(2);
        const pagesCell = newRow.insertCell(3);
        const languangeCell = newRow.insertCell(4);
        const editionCell = newRow.insertCell(5);
        const deleteButton = newRow.insertCell(6);

        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        yearCell.textContent = book.year;
        pagesCell.textContent = book.pages;
        languangeCell.textContent = book.language;
        editionCell.textContent = book.edition;
        deleteButton.innerHTML = `<input type='button' value='X' id='delete-button' data-id='${i}' onclick='deleteID(event)'>`;
        i++;
    }
}

function deleteID(event) {
    idToDelete = event.target.getAttribute("data-id");
    console.log(idToDelete);
    myLibrary.splice(idToDelete, 1);
    displayListOfBooks();
}

var dataTable = document.getElementById("data-table");
dataTable.addEventListener("delete-button", console.log("here"));


displayListOfBooks();
console.table(myLibrary)
