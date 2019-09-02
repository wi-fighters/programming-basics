// The code works now :D
// Since variables declared with the 'const' and 'let' keywords
// are not hoisted, we moved them above other parts of the code
// which rely on them.

// in this case, talk() calls a function that uses
// talkPirate() and greetAnAustralian(),
// so before we hit the line of code that calls talk(),
// we need to already have those other functions declared

// this function does one job and does it well
const talkPirate = function() {
    return 'ahoy';
};

// this function does one job and does it well
// You can shorten this syntax to a single line
const greetAnAustralian = function() { return 'oi'; };

talk('aussie');

// this function defined with declaration syntax
// DOES get hoisted before any code runs,
// so it's ok to call it before we declare it 
function talk(person) {
    if (person === 'pirate') {
        console.log(talkPirate());
    } else if (person === 'aussie') {
        console.log(greetAnAustralian());
    } else {
        console.log(`I've never met a ${person} before.`)
    }
}
