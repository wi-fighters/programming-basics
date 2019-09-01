 // This solution returns a literal,
 // instead of using the accumulator pattern

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
  // format the input data and store it for later
  const color = clothingColor[0].toUpperCase() + clothingColor.substr(1).toLowerCase();
  const food = lastFoodEaten[0].toUpperCase() + lastFoodEaten.substr(1).toLowerCase();

  // use the formatted inputs to build the return value
  return `The ${color} ${food}!`;
}

console.log(generateBandName('blACK', 'spAGhetti'));