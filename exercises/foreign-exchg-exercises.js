// Exercises

// 1. Fill in the blanks
// 2. Refactor so that...

// getJpyFromEur is defined with function declaration syntax
// getAudFromEur is defined with function expression syntax
// getChfFromEur is defined with ES6 arrow function syntax

// (Note: this is just an exercise. In the real world, aim for
// just one function syntax per codebase and keep it consistent)

function convertFromEur(amount, curr) {
  switch (curr) {
    case /* ??? */:
      return getJpyFromEur(/* ??? */);
    case 'AUD':
      return /* ??? */;
    case 'CHF':
      return /* ??? */(amount);
    default:
      return 'The requested currency is not available. Please enter JPY, AUD or CHF';
  }
  // Test yourself: What do you usually see in switch statements that is not here? What is its job, and why is it not here?
}

function /* ??? */(amount) {
  // 1 EUR = 116.402 JPY
  const rate = 116.402;
  return amount * rate;
}

function getAudFromEur(/* ??? */) {
  // 1 EUR = 1.62072 AUD
  const rate = 1.62072;
  return amount * rate;
}

function /* ??? */(/* ??? */) {
  // 1 EUR = 1.08329 CHF
  const rate = 1.08329;
  return amount * rate;
}

console.log(convertFromEur(100, 'AUD'));
