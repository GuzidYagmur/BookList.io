let books = [];
if(localStorage.books){
    books = JSON.parse(localStorage.books);
}

function addBook(){
    const bookName = prompt("Kitabın ismini giriniz");
    const author = prompt("Kitabın yazarı kimdir?");
    const category = prompt("Kitabın kategorisi nedir?");
     books.push({
        bookName,
        author,
        category
     })
     localStorage.books=JSON.stringify(books);
     return nextAction();
}

function listBooks(){
    const BookList = books.map((books, index) =>(` ${index + 1}. ${books.bookName} ${books.author} ${books.category}`)).join("\n");

    alert(BookList);
    return nextAction();
}

function deleteBooks(){
    const BookList = books.map((books, index) =>(` ${index + 1}. ${books.bookName} ${books.author} ${books.category}`)).join("\n");
    
    const value = prompt(`Silmek istediğiniz kitabın ismini giriniz. \n ${BookList}`);
    
    const findBook = books.find(book => book.bookName.toLowerCase() === value.toLowerCase());

    if(findBook){
        const index = books.indexOf(findBook);
        books.splice(index, 1);
        localStorage.books = JSON.stringify(books);
        alert("Kitap başarıyla silindi.");
    } else {
        alert("Bu isimde bir kitap bulunamadı.");
    }

    return nextAction();
    
}

function nextAction(){
    const value = isAccepted("Başka bir işlem yapmak ister misiniz? (e/h)", "e", "h","E","H");
    if (value.toLowerCase() === "e") {
        return mainMenu();
    }else {
        alert("Güle Güle....");
        return;
    }
}

function mainMenu(){
    const value = isAccepted("Hangi işlemi yapmak istersiniz? (1-Kitap Ekle, 2-Kitapları Listele, 3-Kitap Sil)","1","2","3");
    if(value==1){
        return addBook();
    } 
    if(value==2){
        return listBooks();
    }
    if(value==3){
        return deleteBooks();
    }
}

function isAccepted(msg, ...keys){
    const value = prompt(msg);
  if (keys.includes(value)) {
    return value;
  }else {
    alert("Hatali tuşlama yaptiniz.");
    return isAccepted(msg, ...keys);
  }
}

mainMenu();
console.log(books);