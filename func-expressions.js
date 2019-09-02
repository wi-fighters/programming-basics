// There are different ways to define a function

// One way: function declaration syntax. It begins with the 'function' keyword
function greet(person) {
    if (person === 'pirate') {
        return 'ahoy';
    } else if (person === 'aussie') {
        return 'oi';
    } else {
        return 'hi, who are you?';
    }
}

// Another way: function expression syntax
// Assigns an anonymous (nameless) function to a variable
const sayGreeting = function(person) {
    if (person === 'pirate') {
        return 'ahoy';
    } else if (person === 'aussie') {
        return 'oi';
    } else {
        return 'hi, who are you?';
    }
}

console.log(greet('pirate'));

console.log(sayGreeting('aussie'));
// console.log(greet('student'));
