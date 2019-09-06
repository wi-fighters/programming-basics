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
  const rate = 116.402;
  return amount * rate;
}

// function expression syntax (old school, most widely supported)
const getAudFromEur = function(amount) {
  // 1 EUR = 1.62072 AUD
  const rate = 1.62072;
  return amount * rate;
}

// arrow function expression syntax (new in ES6) 
const getChfFromEur = (amount) => {
  // 1 EUR = 1.08329 CHF
  const rate = 1.08329;
  return amount * rate;
}

console.log(convertFromEur(100, 'AUD'));
console.log(convertFromEur(200, 'JPY'));
console.log(convertFromEur(100, 'CAD'));
console.log(convertFromEur(200, 'CHF'));
