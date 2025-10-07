const book = {
    title: "Pride And Prejudice",
    author: "Jane Austen",
    pages: 429,
    read: function() {
        console.log('Currently reading "${this.title}" by ${this.author}.');
    }
};

book.read();