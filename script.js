const myLibrary = [];

//construtor function of and object book
function bookDetails(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
}

//function to add a book to myLibrary array
function addBookToLibrary(book){
    return myLibrary.push(book)    
}

//loop function that displays book details on the website
let paraBooks = document.getElementById("books");
function displayBooks(){ 
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
}

//code to prevent submit button from sending data to (non-existant) server
document.getElementById("addBook").addEventListener('click', function(event){
    event.preventDefault()
});


//function to fetch book details data from form into myLibrary array
document.getElementById("addBook").addEventListener("click", submitBook);
function submitBook(){
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;
    let newBook = new bookDetails(bookTitle, bookAuthor, bookPages);
    addBookToLibrary(newBook);
    displayBooks();
}