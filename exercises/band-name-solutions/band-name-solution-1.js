 // This solution uses the 'accumulator pattern',
 // which is a fancy way to talk about the following steps:
 // First, set up the variable to be returned,
 // then modify it as necessary,
 // and ultimately return it.

 // If you follow these steps, you are using the 'accumulator pattern'. It's one very common approach, among others.

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

  const colorInitial = clothingColor[0].toUpperCase();
  const colorRest = clothingColor.substr(1).toLowerCase();
  const color = colorInitial.concat(colorRest);

  const foodInitial = lastFoodEaten[0].toUpperCase();
  const foodRest = lastFoodEaten.substr(1).toLowerCase();
  const food = foodInitial.concat(foodRest);

  // use the formatted inputs to build the return value
  bandName = `The ${color} ${food}!`;
  
  // keep the return line short and sweet
  return bandName;
}

console.log(generateBandName('blACK', 'spAGhetti'));
