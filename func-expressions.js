// This time, the global scope doesn't know details about how to talk.
// All we know is that if we call talk(),
// it will privately figure out how to talk
talk('aussie');

function talk(person) {
    
    // We can also declare these as 'private variables'
    // So that only the function knows about them.
    // Test yourself: Since they are declared with const,
    // what scope do these variables have?
    const talkPirate = function() { return 'ahoy'; };
    const greetAnAustralian = function() { return 'oi'; };

    if (person === 'pirate') {
        console.log(talkPirate());
    } else if (person === 'aussie') {
        console.log(greetAnAustralian());
    } else {
        console.log(`I've never met a ${person} before.`)
    }
}
