const talkPirate = function() { return 'ahoy'; };
const greetAnAustralian = function() { return 'oi'; };

function talkToJenna(howToTalk) {
    let greeting = '';

    greeting = `${howToTalk()} Jenna!`

    return greeting;
}

console.log(talkToJenna(talkPirate));
