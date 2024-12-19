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
let paraBooks = document.getElementById("books");
myLibrary.forEach((item) => {
    let para = document.createElement("p");
    para.classList.add("bookCard");
    let paraTitle = document.createElement("p")
    paraTitle.innerText = `Title: "${item.title}"`;
    let paraAuthor = document.createElement("p");
    paraAuthor.innerText = `Author: ${item.author}`;
    let paraPages = document.createElement("p");
    paraPages.innerText = `Pages: ${item.pages}`;
    para.append(paraTitle, paraAuthor,paraPages);
    paraBooks.appendChild(para);
})