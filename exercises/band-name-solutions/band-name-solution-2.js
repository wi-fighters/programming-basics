// Band name solution 2.2 (refactored to call other functions)

// Declare a place to store results
// Notice we can still push to an array declared as const
const bandNames = [];

// Some examples with console.log()
console.log(generateBandName('blACK', 'spAGhetti'));
console.log(generateBandName('RED', 'cookies'));

// Some examples without console.log()
generateBandName('blue', 'ciabaTTas');
generateBandName('purple', 'PASTA');

// Notice that we can make multiple calls,
// and the data will 'persist' (be saved) in the global variable
console.log(bandNames);

// Since we are using 'function declarations' (starting with the word 'function')
// these will be hoisted. Hoisting means they can be
// called on previous lines, before they are declared.

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

function generateBandName(rawColor, rawFood) {
  let bandName = '';

  // This time, let's outsource some of the work to other functions.
  // Their return values will become available in this scope,
  // since this is where we're calling them from.
  // This allows us to store their return values in the variables below
  let color = capitalizeColor(rawColor);
  let food = capitalizeFood(rawFood);

  // use the formatted inputs to build the return value
  bandName = `The ${color} ${food}!`;

  // update the global array
  bandNames.push(bandName);
  
  // Test yourself: To where does this value get returned?
  return bandName;
}

function capitalizeColor(clothingColor) {
  // Test yourself: To where does this value get returned?
  return clothingColor[0].toUpperCase() + clothingColor.substr(1).toLowerCase();
}

function capitalizeFood(lastFoodEaten) {
  // Test yourself: To where does this value get returned?
  return lastFoodEaten[0].toUpperCase() + lastFoodEaten.substr(1).toLowerCase();
}

// Test yourself: What other things does hoisting affect? Hint: variables

// Test yourself: Which of the above functions are pure? Which are impure?
// For a refresher on pure functions, see the previous version of this file
