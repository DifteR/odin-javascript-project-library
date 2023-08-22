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

addBookToLibrary("example", "example", 1000, 250, "example", "example")


function displayListOfBooks(){
    const table = document.getElementById("data-table")
    for (const book of myLibrary) {
        const newRow = table.insertRow();
        const titleCell = newRow.insertCell(0);
        const authorCell = newRow.insertCell(1);
        const yearCell = newRow.insertCell(2);
        const pagesCell = newRow.insertCell(3);
        const languangeCell = newRow.insertCell(4);
        const editionCell = newRow.insertCell(5);

        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        yearCell.textContent = book.year;
        pagesCell.textContent = book.pages;
        languangeCell.textContent = book.language;
        editionCell.textContent = book.edition;

    }
}

displayListOfBooks();
console.table(myLibrary)
