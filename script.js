const library = [];
const booksContainer = document.querySelector('.books-container');
const newBookButton = document.querySelector('#new-book-button');
const dialog = document.querySelector('dialog');
const dialogForm = document.querySelector('dialog form');
function Book(title, author, pages, description) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.description = description;
    this.card = createBookCard(this);
};

function addBookToLibrary(title, author, pages, description) {
    const book = new Book(title, author, pages, description);
    library.push(book);
};

function createBookCard(book) {
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    bookCard.append(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `By ${book.author}`;
    bookCard.append(bookAuthor);

    const bookDescription = document.createElement('p');
    bookDescription.textContent = book.description;
    bookCard.append(bookDescription);

    const bookPageCount = document.createElement('p');
    bookPageCount.textContent = `${book.pages} Page(s)`;
    bookCard.append(bookPageCount);
    return bookCard;
}

function displayBooks() {
    booksContainer.replaceChildren('')
    library.forEach(book => {
        booksContainer.appendChild(book.card);
    })
}

newBookButton.addEventListener('click', () => dialog.showModal());

function onSubmitDialogForm(event) {
    event.preventDefault();
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const pagesCountInput = document.querySelector('#pages-count')
    const descriptionInput = document.querySelector('#description');
    const hasReadBook = document.querySelector('#read-book');
    addBookToLibrary(titleInput.value, authorInput.value, pagesCountInput.value, descriptionInput.value);
    dialog.close();
    displayBooks();
}

dialogForm.addEventListener('submit', onSubmitDialogForm);

addBookToLibrary('atomic habits', 'James', 318, 'Small atomic efective impactful habits');
displayBooks();