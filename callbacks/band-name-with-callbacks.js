// Band name solution 2.5 (liven up the colors)

// Declare a place to store results
const bandNames = [];

/**
 * Generate a band name based on the user's clothing color
 * and the last food they ate
 * 
 * Pass in a function to add a little flavor to the band name
 * 
 * Store the result of each call in a global array,
 * then return it.
 * 
 * @param {string}    clothingColor 
 * @param {string}    lastFoodEaten
 * @param {function}  embellish
 * 
 * @return {string} bandName
 * 
 * @example
 * 
 *  generateBandName('RED', 'cookies', makeTasty)
 */

function generateBandName(clothingColor, lastFoodEaten, embellish) {
  let bandName = '';

  // To keep things DRY, let's use just one function that does a very general job
  let color = embellish(capitalizeInitial(clothingColor));
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

/**
 * Bring a boring color to life!
 * 
 * @param {string} color
 * @return {string} livingColor
 * 
 * @example
 * 
 *  makeTasty('Red')
 */
function makeLiving(color) {
  let livingColor = '';
  
  switch (color) {
    case 'Red':
      livingColor += 'Beetle';
      break;
    case 'Orange':
      livingColor += 'Frog';
      break;
    case 'Yellow':
      livingColor += 'Gecko';
      break;
    case 'Green':
      livingColor += 'Iguana';
      break;
    case 'Blue':
      livingColor += 'Jellyfish';
      break;
    case 'Purple':
      livingColor += 'Panther';
      break;
    default:
      livingColor = color;
  }

  return livingColor;
}

// Some examples with console.log()
console.log(generateBandName('blACK', 'spAGhetti', makeTasty));
console.log(generateBandName('RED', 'cookies', makeLiving));

// Some examples without console.log()
generateBandName('blue', 'ciabaTTas', makeTasty);
generateBandName('purple', 'PASTA', makeLiving);

// Show contents of the array
console.log(bandNames);