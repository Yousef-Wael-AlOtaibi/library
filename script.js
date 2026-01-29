const library = [];

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
