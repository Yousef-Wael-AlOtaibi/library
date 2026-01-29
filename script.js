const library = [];

function Book(title, author, pages, description) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
};

function addBookToLibrary(title, author, pages, description) {
    const book = new Book(title, author, pages, description);
    library.push(book);
};