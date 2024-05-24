let library = [];

let addBook = (title,author,isbn) => {
    let newBook = {
        Title: title,
        Author: author,
        ISBN: isbn,
        Status: "Available"
    }
    library.push(newBook);

    console.log(`Added book: ${title} by ${author} (ISBN: ${isbn})`)
}

let displayBooks = () => {
    let s = "";
    for (let book of library){
        let {Status} = book;
        if (Status === "Available"){
            s += `${book.Title} by ${book.Author} (ISBN: ${book.ISBN})\n`;
        }
    }
    if (s=="")
        console.log("\nNo book available")
    else
        console.log("\nAvailable Books:\n" + s)
}

let borrowBook = (isbn) => {
    let flag = false;
    for (let book of library){
        let {ISBN} = book;
        let {Status} = book
        if (ISBN === isbn && Status == "Available"){
            flag = true
            console.log(`Book with ISBN ${isbn} has been borrowed.`)
            book["Status"] = "Borrowed"
        }
        else if (ISBN === isbn && Status == "Borrowed"){
            flag = true
            console.log(`Book with ISBN ${isbn} is already borrowed.`)
        }
    }
    if (flag === false){
        console.log(`Book with ISBN ${isbn} doesn't exist.`)
    }

}

let returnBook = (isbn) => {
    let flag = false;
    for (let book of library){
        let {ISBN} = book;
        let {Status} = book
        if (ISBN === isbn && Status == "Borrowed"){
            flag = true
            console.log(`Book with ISBN ${isbn} has been returned.`)
            book["Status"] = "Available"
        }
        else if (ISBN === isbn && Status == "Available"){
            flag = true
            console.log(`Book with ISBN ${isbn} doesn't borrowed.`)
        }
    }
    if (flag === false){
        console.log(`Book with ISBN ${isbn} doesn't exist.`)
    }

}


addBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
addBook("To Kill a Mockingbird", "Harper Lee", "9780061120084");
displayBooks();
borrowBook("9780743273565");
displayBooks();
returnBook("9780743273565");
displayBooks();
