function convertFromEur(amount, curr) {
  switch (curr) {
    case 'JPY':
      return getJpyFromEur(amount);
    case 'AUD':
      return getAudFromEur(amount);
    case 'CHF':
      return getChfFromEur(amount);
    default:
      return 'The requested currency is not available. Please enter JPY, AUD or CHF';
  }
}

// function declaration syntax
function getJpyFromEur(amount) {
  // 1 EUR = 116.402 JPY

  // Just testing how the result is rounded
  // console.log((amount * 116402 / 1000).toFixed(3));

  return (amount * 116402 / 1000).toFixed(2);
}

// function expression syntax (old school, most widely supported)
const getAudFromEur = function(amount) {
  // 1 EUR = 1.62072 AUD

  // Just testing how the result is rounded
  // console.log((amount * 162072 / 100000).toFixed(3));

  return (amount * 162072 / 100000).toFixed(2);
};

// arrow function expression syntax (new in ES6) 
const getChfFromEur = (amount) => {
  // 1 EUR = 1.08329 CHF

  // Just testing how the result is rounded
  // console.log((amount * 108329 / 100000).toFixed(3));

  return (amount * 108329 / 100000).toFixed(2);
};

console.log(convertFromEur(105, 'AUD'));
console.log(convertFromEur(105, 'JPY'));
console.log(convertFromEur(105, 'CAD'));
console.log(convertFromEur(105, 'CHF'));
