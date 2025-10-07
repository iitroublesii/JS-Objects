const book = {
    title: "Pride And Prejudice",
    author: "Jane Austen",
    pages: 429,
    read: function() {
        console.log('Currently reading "${this.title}" by ${this.author}.');
    }
};

book.read();

function Animal(species,name,sound) {
    this.species = species;
    this.name = name;
    this.sound = sound;
    this.makesound = function() {
console.log('${this.name} says ${this.sound}');
    };
}

const animal1 = new Animal("Cow", "Betsy", "Moo!");
const animal2 = new Animal("Duck", "Howard", "Quack!");

animal1.makesound(); 
animal2.makesound();

