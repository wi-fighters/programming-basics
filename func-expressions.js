const talkPirate = function() { return 'ahoy'; };
const greetAnAustralian = function() { return 'oi'; };

// A CALLBACK is when we pass in a reference to
// a function (without parentheses)
// so that it can be called later
console.log(talk(talkPirate));
// the above line is the same as
// console.log(talk(function() { return 'ahoy'; }));

function talk(howToTalk) {
    return howToTalk();
    // the above line is the same as
    // return 'ahoy';
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