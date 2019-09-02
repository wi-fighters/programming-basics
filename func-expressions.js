// This code is broken :(
// We are trying to access a function before declaring it

talk('aussie');


// this function does one job and does it well
const talkPirate = function() {
    return 'ahoy';
}

// this function does one job and does it well
const greetAnAustralian = function() {
    return 'oi';
} 

// this is our main function
// its job is to make sure the right code gets run at the right time
// it doesn't care about details
function talk(person) {
    if (person === 'pirate') {
        console.log(talkPirate());
    } else if (person === 'aussie') {
        console.log(greetAnAustralian());
    } else {
        console.log(`I've never met a ${person} before.`)
    }
}
