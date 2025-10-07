const book = {
    title: "Pride And Prejudice",
    author: "Jane Austen",
    pages: 429,
    read: function () {
        console.log('Currently reading "${this.title}" by ${this.author}.');
    }
};

book.read();

function Animal(species, name, sound) {
    this.species = species;
    this.name = name;
    this.sound = sound;
    this.makesound = function () {
        console.log('${this.name} says ${this.sound}');
    };
}

const animal1 = new Animal("Cow", "Betsy", "Moo!");
const animal2 = new Animal("Duck", "Howard", "Quack!");

animal1.makesound();
animal2.makesound();

function Student(name, grade, subject) {
    this.name = name;
    this.grade = grade;
    this.subject = subject;

    this.introduce = function () {
        console.log('Hi, I am ${this.name}, studying ${this.subject} in grade $this.grade}.');
    };


    this.finishedSchoolYear = function () {
        if (this.grade < 12) {
            this.grade++;
            console.log('${this.name} is now in grade ${this.grade}.');
        } else {
            console.log('Congratulations, ${this.name} has graduated!');
        }
    };
}

const student1 = new Student("Jayden", 11, "English");
const student2 = new Student("Aiden", 4, "History");
const student3 = new Student("Kayden", 12, "Science");

student1.introduce();
student2.introduce();
student3.introduce();

student1.finishesSchoolYear();
student2.finishesSchoolYear();
student3.finishesSchollYear();

