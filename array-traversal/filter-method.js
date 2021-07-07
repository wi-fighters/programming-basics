// Array.prototype.filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// The filter method takes a callback as an argument ('filtering function')
// The callback should take an element of the source array as an argument, and return a boolean
// If the element should be returned in the resulting array, the callback should return true

const tests = [
    [1, 4, 6, 8, 0, 9, 7, 2, 10, 3, 5],
    [0, 5, 4, -3, -9, 2, 'some', 'irrelevant', 'strings'],
    ['1', '4', '6', '8', '0', '9', '7', '2', '10', '3', '5'],
    ['Never', 'gonna', 'give', 'you', 'up']
];

// here's an example of a function we could pass as a callback to filter
// remember this is a 'function definition' not a 'function call'
// filter will call it at some point in the future, hence the name 'callback'

// once filter is ready, it calls that function back:
// hey i have this element. do you want it in the result? (get answer and hang up).
// hey i have this next element. do you want it in there? (get answer and hang up).

const isOverFive = (element) => {
    let keepThisElement = true;

    if (typeof element !== 'number') {
        keepThisElement = false;
    } else if (Number.isNaN(element)) {
        keepThisElement = false;
    } else if (element <= 5) {
        keepThisElement = false;
    }

    return keepThisElement;

    // all the above in a one-liner:
    // return typeof element === 'number' && !Number.isNaN(element) && element > 5;
};

const greaterThanFive = tests[0].filter(isOverFive);
console.log('\noriginal:\t\t', tests[0]);
console.log('greaterThanFive:\t', greaterThanFive);

const positiveNums = tests[1].filter((el) => {
    return el >= 0;
});

console.log('\noriginal:\t\t', tests[1]);
console.log('positiveNums:\t\t', positiveNums);


const isOdd = tests[2].filter(el => el % 2 !== 0);

console.log('\noriginal:\t\t', tests[2]);
console.log('isOdd:\t\t\t', isOdd);

// EXERCISE

// From the original array:     ['Never', 'gonna', 'give', 'you', 'up']
// use filter to return only:   ['gonna', 'give']

// Solve this on one line with only one set of parentheses
// (feel free to start with a more verbose solution then optimize)

const startsWithG = /* ??? */

console.log('\noriginal:\t\t', tests[3]);
console.log('isOdd:\t\t\t', startsWithG);
