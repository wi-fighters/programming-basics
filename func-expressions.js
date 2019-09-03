const talkPirate = function() { return 'ahoy'; };
const greetAnAustralian = function() { return 'oi'; };

function talkToJenna(howToTalk) {
    return `${howToTalk()} Jenna!`;
}

console.log(talkToJenna(talkPirate));

// Here's another way to write the same function,
// using the accumulator pattern.
// Breaking down the steps like this will be useful
// as your funcs become more complex

// function talkToJenna(howToTalk) {
//     let greeting = '';

//     greeting = `${howToTalk()} Jenna!`;

//     return greeting;
// }
