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
    let lastBook = myLibrary[myLibrary.length-1]
    console.log(lastBook)
    let para = document.createElement("p");
    para.classList.add("bookCard");
    let paraTitle = document.createElement("p")
    paraTitle.innerText = `Title: "${lastBook.title}"`;
    let paraAuthor = document.createElement("p");
    paraAuthor.innerText = `Author: ${lastBook.author}`;
    let paraPages = document.createElement("p");
    paraPages.innerText = `Pages: ${lastBook.pages}`;
    para.append(paraTitle, paraAuthor,paraPages);
    paraBooks.appendChild(para);
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
    
    //function to check if all details of a book been provided with a warming message
    //displayed (set Timer for message to be removed.) before adding book to myLibrary.
    if(bookTitle === "" || bookAuthor === "" || bookPages === ""){
        //if statement in place to check if one waring message is present.
        if (document.getElementById("warningMessage") === null){
            console.log("Please input valid details of a book." )
            let space = document.getElementById("warning");
            let warning = document.createElement("h3");
            warning.setAttribute("id", "warningMessage")
            warning.innerText = "Please input valid details of a book."
            space.appendChild(warning);
            setTimeout(() => {
                document.getElementById("warningMessage").remove();
            }, 3000);
        }else{console.log("warning Message already present.")}
        
    }else{
    let newBook = new bookDetails(bookTitle, bookAuthor, bookPages);
    addBookToLibrary(newBook);
    displayBooks();
    };
}