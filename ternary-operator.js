// We can use a ternary operator when we're dealing with
// two possible cases (truthy / falsy) that are short to write
// It's often useful when assigning a value based on a condition

let rating = '';
const maxStars = 2.5;
const average = maxStars / 2;

// input from customer
const customerStars = 5;

rating = (customerStars >= average) ? 'good' : 'bad';

// behind the scenes, the winning result replaces
// the whole ternary statement
// rating = 'good';

console.log(rating);

// equivalent if statement
// needs more lines to do the same job
// sometimes this helps readability, sometimes not. Up to you.

// if (customerStars >= average) {
//     rating = 'good feedback';
// } else {
//     rating = 'bad feedback';
// }
