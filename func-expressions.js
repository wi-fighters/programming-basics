// There are different ways to define a function

// One way: function declaration syntax. It begins with the 'function' keyword
// function greet(person) {
//     if (person === 'pirate') {
//         return 'ahoy';
//     } else if (person === 'aussie') {
//         return 'oi';
//     } else {
//         return 'hi, who are you?';
//     }
// }

// Another way: function expression syntax
// Assigns an anonymous (nameless) function to a variable
let sayGreeting = 'Heyo';
console.log(sayGreeting);

sayGreeting = function(person) {
    if (person === 'pirate') {
        return 'ahoy';
    } else if (person === 'aussie') {
        return 'oi';
    } else {
        return 'hi, who are you?';
    }
}
// function reference (Here's a function, so call me maybe)
console.log(sayGreeting);
// function call (will be replaced by a return value if there is one)
console.log(sayGreeting('aussie'));

// console.log(greet('pirate'));
// console.log(greet('student'));
