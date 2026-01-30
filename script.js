const library = [];
const booksContainer = document.querySelector('.books-container');
const newBookButton = document.querySelector('#new-book-button');
const dialog = document.querySelector('dialog');
const dialogForm = document.querySelector('dialog form');
function Book(title, author, pages, description, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.description = description;
    this.readStatus = readStatus;
};

function addBookToLibrary(title, author, pages, description, readStatus) {
    const book = new Book(title, author, pages, description, readStatus);
    library.push(book);
};

function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.dataset.id = book.id;
    const bookTitle = document.createElement('h2');
    bookTitle.textContent = book.title;
    bookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `By ${book.author}`;
    bookCard.appendChild(bookAuthor);

    const bookDescription = document.createElement('p');
    bookDescription.textContent = book.description;
    bookCard.appendChild(bookDescription);

    const details = document.createElement('p');

    const hasReadStat = document.createElement('span');
    hasReadStat.textContent = book.readStatus?  `Have read` : `Haven't read`;
    details.appendChild(hasReadStat);

    const bookPageCount = document.createElement('span');
    bookPageCount.textContent = `${book.pages} Page(s)`;
    details.appendChild(bookPageCount);

    bookCard.appendChild(details);
    return bookCard;
}

function displayBooks() {
    booksContainer.replaceChildren('')
    library.forEach(book => {
        const bookCard = createBookCard(book);
        booksContainer.appendChild(bookCard);
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
    addBookToLibrary(titleInput.value, authorInput.value, pagesCountInput.value, descriptionInput.value, hasReadBook.checked);
    dialog.close();
    displayBooks();
}

dialogForm.addEventListener('submit', onSubmitDialogForm);

addBookToLibrary('atomic habits', 'James', 318, 'Small atomic efective impactful habits', false);
displayBooks();