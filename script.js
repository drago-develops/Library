const myLibrary = [];

var count = 0

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
    //creating bookCard on which book details will be displayed with delete button and read toggle
    let para = document.createElement("p");
    para.classList.add("bookCard");
    para.setAttribute("id", `uniqueNo${count}`)
    //displaying book details
    let paraTitle = document.createElement("p")
    paraTitle.innerText = `Title: "${lastBook.title}"`;
    let paraAuthor = document.createElement("p");
    paraAuthor.innerText = `Author: ${lastBook.author}`;
    let paraPages = document.createElement("p");
    paraPages.innerText = `Pages: ${lastBook.pages}`;
    //delete button 
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("bookDelete");
    deleteButton.setAttribute('id', `removeUniqueNo${count}`)
    //read toggle
    let readStatus = document.createElement("input")
    readStatus.setAttribute("type", "checkbox")
    readStatus.setAttribute("id", `readStatus${count}`)
    readStatus.setAttribute('class', 'readStatus')
    let readStatusLabel = document.createElement("label")
    readStatusLabel.setAttribute("for", "readStatus")
    readStatusLabel.innerHTML = "Read status"
    //adding all above details and features to bookCard
    para.append(paraTitle, paraAuthor,paraPages,deleteButton, readStatus, readStatusLabel);
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
    newBook.uniqueNo = count;
    count++;
    newBook.readBookStatus = false;
    addBookToLibrary(newBook);
    displayBooks();
    };
    //book form dialog closes after bookDetails submitted.
        
}

//function for delete button. It will remove unwanted bookCard from display
// and entry from myLibrary.
let deleteButtons = document.querySelector("#books")
deleteButtons.addEventListener("click", event => {
    //using event delegation since delete button is dinamically added
    if(event.target.matches(".bookDelete")){
        //deleting specific bookCard from display
        console.log(event.srcElement.id);
        let uniqNo = (event.srcElement.id).split("removeUniqueNo").pop();
        console.log(uniqNo)
        document.getElementById(`uniqueNo${uniqNo}`).remove();
        //removing bookDetails from myLibrary
        let index = myLibrary.findIndex(book => book.uniqueNo === (uniqNo - 1));
        myLibrary.splice(index, 1);
        console.log(myLibrary)
    }
})

//function to change read status in bookDetails in myLibrary based on user input(type=checkbox)
let bookStatus = document.querySelector('#books');
bookStatus.addEventListener('click', event => {
    //using event delegation since input is dinamically added
    if (event.target.matches('.readStatus')){
        //getting index of a book in myLibrary from bookCard that has been clicked on
        let uniqNo = (event.srcElement.id).split("readStatus").pop();
        let index = myLibrary.findIndex(book => book.uniqueNo === (uniqNo - 1));
        //if statement that changes value of read status. 
        if (myLibrary[index].readBookStatus === false){
            myLibrary[index].readBookStatus = true;
        }else if (myLibrary[index].readBookStatus === true){
            myLibrary[index].readBookStatus = false;
        }
    }
    console.log(myLibrary)
})

//function to opperate dialog to submit book form > bookDetails.
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog .closeButton")

// "Add book" button opens the dialog 
showButton.addEventListener("click", () => {
    dialog.showModal();
});

//"close" button closes the dialog
closeButton.addEventListener('click', () => {
    dialog.close();
})

  



