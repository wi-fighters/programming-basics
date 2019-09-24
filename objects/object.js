//JavaScript Objects are Mutable

const person = {
    firstName: "Ali",
    lastName: "Daq",
    age: 50,
    eyeColor: "blue"
}
console.log(person);
let x = person;


x.age = 10;

console.log(person);
console.log(`${person.firstName} is ${person.age} years old.`);




// JavaScript Accessors Objects Getter
const person1 = {
    firstName: "Ali",
    lastName: "Daq",
    age: 39,
    language: "en",
    get lang() {
        return this.language; //en
    }
};

// Printout the data from the object using a getter:
console.log(person1);



// JavaScript Accessors Objects Setter
const person2 = {
    firstName: "Ali",
    lastName: "Daq",
    language: "",
    set lang(lang) {
        this.language = lang;
    }
};

// Set an object property using a setter:
person2.lang = "fr";

console.log(person2.firstName);
// Display data from the object:
console.log(person2.language);



// Why Using Getters and Setters?
// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes




// JavaScript Function or Getter
var person3 = {
    firstName: "Ali",
    lastName: "Daq",
    middleName: "Baba",
    birthYear: 1989,
    birthDay: 10,
    birthMonth: 6,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    age: function () {
        return
    },
    zodiac: function () {

    }
}

// Display data from the object using a method:
console.log(person3.fullName());



// Object.defineProperty()

// Define object
var obj = {
    counter: 0
};

// Define setters
Object.defineProperty(obj, "reset", {
    get: function () {
        this.counter = 0;
    }
});
Object.defineProperty(obj, "increment", {
    get: function () {
        this.counter++;
    }
});
Object.defineProperty(obj, "decrement", {
    get: function () {
        this.counter--;
    }
});
Object.defineProperty(obj, "add", {
    set: function (value) {
        this.counter += value;
    }
});
Object.defineProperty(obj, "subtract", {
    set: function (value) {
        this.counter -= value;
    }
});


console.log(obj.counter);
// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;


console.log(obj.counter);