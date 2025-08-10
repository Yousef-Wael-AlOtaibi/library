const booksContainer = document.getElementById('books-container');
const addBtn = document.getElementById('add-btn');
const bookForm = document.getElementById('book-form');
const bookDialog = document.getElementById('book-dialog');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const pagesInput = document.getElementById('pages-input');
const newBtn = document.getElementById('new-btn');
const closeBtn = document.getElementById('close-btn');
const exampleBook = document.getElementById('example-book');
class Book{
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
        this.el = exampleBook.cloneNode(true);
        this.el.id = crypto.randomUUID();
        this.el.classList.remove('hidden');
        this.el.classList.add('book');
        this.children = this.el.children;
        
    }
    info(){
        console.log(this.title,this.author,this.pages,this.read);
    }
}
const startingBook = new Book('first book','noone','0',false);
let library = [startingBook];
function closeDialog(){
    bookDialog.classList.add('hidden');
    bookDialog.close();
}
function deleteBook(el){
    console.log(el.id);
    console.log(el.parentElement);
    el.parentElement.removeChild(el)
    const removedBook = library.find(book=>book.id===el.id);
    console.log(removedBook.id)
    library.splice(library.indexOf(removedBook));
};
function loadLibrary(){
    library.forEach(book=>{
        booksContainer.appendChild(book.el);
        book.el.setAttribute('id',book.id);
        [...book.children].forEach(child=>{
            console.log(child.id)
            if(child.id==='title')child.textContent = book.title;
            if(child.id==='remove-btn'){child.addEventListener('click',(e)=>{deleteBook(e.target.parentElement)})}
            if(child.id==='book-info'){
                [...child.children].forEach(el=>{
                console.log(el.id)
                if(el.id==='author')el.textContent = `By ${book.author}`;
                if(el.id==='pages')el.textContent = `${book.pages} pages`
            })}
        });
    })
};
closeBtn.addEventListener('click',closeDialog);
newBtn.addEventListener('click',()=>{
    bookDialog.showModal();
    bookDialog.classList.remove('hidden')
})
bookForm.addEventListener('submit',e=>{
    e.preventDefault();
    startedInput = document.querySelector('input[type=radio]:checked');
    const newBook  = new Book(titleInput.value,authorInput.value,pagesInput.value,startedInput.value);
    newBook.info();
    library.push(newBook);
    loadLibrary();
    bookDialog.classList.add('hidden')
    bookDialog.close();
})
loadLibrary();