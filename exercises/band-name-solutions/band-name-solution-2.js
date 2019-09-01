// Band name solution 2.4 (spice up the colors)

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
  let color = makeTasty(capitalizeInitial(clothingColor));
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

/**
 * Make a boring color delicious!
 * 
 * @param {string} color
 * @return {string} tastyColor
 * 
 * @example
 * 
 *  makeTasty('Red')
 */
function makeTasty(color) {
  let tastyColor = '';
  
  switch (color) {
    case 'Red':
      tastyColor = 'Chilli';
      break;
    case 'Orange':
      tastyColor = 'Tangerine';
      break;
    case 'Yellow':
      tastyColor = 'Pineapple';
      break;
    case 'Green':
      tastyColor = 'Sage';
      break;
    case 'Blue':
      tastyColor = 'Blueberry';
      break;
    case 'Purple':
      tastyColor = 'Plum';
      break;
    default:
      tastyColor = color;
  }

  return tastyColor;
}
