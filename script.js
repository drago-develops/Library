const myLibrary = [];

//construtor function of and object book
function Book(title, author, pages){
    this.title = title
    this. author = author
    this.pages = pages
}

//function to add a book to myLibrary array
function addBookToLibrary(book){
    return myLibrary.push(book)    
}

let book1 = new Book("abc", "AnAuthor", "101");
console.log(book1)
let book2 = new Book("xyz", "AnAuthor2", "100");
console.log(book1)
addBookToLibrary(book1);
addBookToLibrary(book2)
console.log(myLibrary)
console.log(myLibrary[0]);
console.log(myLibrary[1]);

//loop function that displays book details on the website
let list = document.getElementById("books");
myLibrary.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = `Title: ${item.title}, Author: ${item.author}, Pages: ${item.pages}`;
    list.appendChild(li);
})