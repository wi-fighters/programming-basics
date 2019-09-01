 // Here's another example using the accumulator pattern

/**
 * Generate a band name based on the user's clothing color
 * and the last food they ate
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
  
  // keep the return line short and sweet
  return bandName;
}

console.log(generateBandName('blACK', 'spAGhetti'));
