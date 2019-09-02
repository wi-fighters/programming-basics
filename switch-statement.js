// switch statements are useful for testing the value of a single variable
// the switch block will match the FIRST valid case
// then run ALL the code underneath, until it hits a BREAK statement
// try commenting out different parts of this code to see it in action
// we can use console.log() to check which parts of the code are running

let weather = '';
const season = 'Fall';

switch (season) {
    case 'Summer':
        weather = 'super hot';
        console.log("A little quiet up here. This code isn't running");
        break;
    case 'Fall':
    case 'Autumn':
        console.log('Testing 123');
        weather = 'windy';
        break;
    case 'Winter':
        console.log('Haha! Overwriting!');
        weather = 'cold';
        break;
    case 'Spring':
        console.log('Running?');
        weather = 'rainy';
        break;
    default:
        weather = "That's not a season I've heard of. Please try again.";
}

console.log(weather);

// equivalent if statement (does the same job)

// if (season === 'Summer') {
//     weather = 'hot';
// } else if (season === 'Autumn' || season === 'Fall') {
//     weather = 'windy';
// } else if (season === 'Winter') {
//     weather = 'cold';
// } else if (season === 'Spring') {
//     weather = 'rainy';
// } else {
//     weather = "That's not a season I've heard of. Please try again.";
// }