const talkPirate = function() { return 'ahoy'; };
const greetAnAustralian = function() { return 'oi'; };

// When we pass a function reference, it's called a CALLBACK
// But here we are grabbing the return value of talkPirate().
// (talkToJenna is not able to call the argument)  
console.log(talkToJenna(talkPirate()));
// the above line is the same as
// console.log(talkToJenna('ahoy'));

function talkToJenna(howToTalk) { // I'm expecting something like 'ahoy'
    let greeting = '';

    greeting = `${howToTalk} Jenna!`

    return greeting;
}

/**
 * talkPirate
 * is a function reference. This gets replaced by
 * function() { return 'ahoy'; }
 * 
 * talkPirate()
 * is a function call. This gets replaced by
 * 'ahoy'
 */