// Band name solution 2.3 (refactored the extra funcs to make it DRY)

// Declare a place to store results
const bandNames = [];

// Some examples with console.log()
console.log(generateBandName('blACK', 'spAGhetti'));
console.log(generateBandName('RED', 'cookies'));

// Some examples without console.log()
generateBandName('blue', 'ciabaTTas');
generateBandName('purple', 'PASTA');

// Show contents of the array
console.log(bandNames);

// Test yourself: Can you explain why we are able to
// call generateBandName before we declare it?
// For a refresher, see comments in the previous version of this file.

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
  let bandName = '';

  // To keep things DRY, let's use just one function that does a very general job
  let color = capitalizeInitial(clothingColor);
  let food = capitalizeInitial(lastFoodEaten);

  // use the formatted inputs to build the return value
  bandName = `The ${color} ${food}!`;

  // update the global array
  bandNames.push(bandName);
  
  // Test yourself: To where does this value get returned?
  return bandName;
}

function capitalizeInitial(rawString) {
  // Test yourself: To where does this value get returned?
  return rawString[0].toUpperCase() + rawString.substr(1).toLowerCase();
}

// Test yourself: Which of the above functions are pure? Which are impure?
// For a refresher on pure functions, see a previous version of this file

// Test yourself: Write the JSDocs for the capitalizeInitial function
// This link may help: https://jsdoc.app/tags-returns.html
