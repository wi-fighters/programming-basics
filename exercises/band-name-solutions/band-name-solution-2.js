// Band name solution 2.1 (refactored to store results in an array)
// See notes at the end for further reading

// For this exercise we're storing results in a global variable.
// In another situation, this could be a database for example.
const bandNames = [];


/**
 * Generate a band name based on the user's clothing color
 * and the last food they ate
 * 
 * Store the result of each call in a global array,
 * then return it.
 * 
 * @param {string} clothingColor 
 * @param {string} lastFoodEaten
 * 
 * @return {string} bandName
 * 
 * @example
 * 
 *  generateBandName('RED', 'cookies')
 */

function generateBandName(clothingColor, lastFoodEaten) {
  // declare the return variable and indicate its type
  let bandName = '';

  // format the input data and store it for later
  let color = clothingColor[0].toUpperCase();
  color += clothingColor.substr(1).toLowerCase();

  let food = lastFoodEaten[0].toUpperCase();
  food += lastFoodEaten.substr(1).toLowerCase();

  // use the formatted inputs to build the return value
  bandName = `The ${color} ${food}!`;

  bandNames.push(bandName);
  
  // keep the return line short and sweet
  return bandName;
}

// Since the function returns a string, we can log it to the console
console.log(generateBandName('blACK', 'spAGhetti'));
console.log(generateBandName('RED', 'cookies'));

// But since it has the 'side effect' of saving to a global variable,
// We could also just call it without console.log()
// The result would still be pushed onto the bandNames array
generateBandName('blue', 'ciabaTTas');
generateBandName('purple', 'PASTA');

// Notice that we can make multiple calls,
// and the global variable will remember the old data.
console.log(bandNames);

// Know your functions:
// Since this function has a 'side effect', we say that it's an 'impure function'.
// A 'pure function' would just return something without affecting anything outside itself.
// Both kinds of function are useful at different times.
// It's useful to be able to tell them apart.

// Here's an article with more detail on pure functions
// https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/
