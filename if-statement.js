// if we're not just checking the exact value of a variable,
// an if statement might be more convenient.
// It lets us do some more interesting comparisons and logic

let rating = '';
const maxStars = 5;
const customerStars = 2;
const average = maxStars / 2;

if (customerStars < average) {
    rating = 'uh-oh. customer was unhappy';
} else if (customerStars === average) {
    rating = 'that was pretty average';
} else if (customerStars > average) {
    rating = 'omggg amazing!';
} else {
  rating = 'Customer did not leave feedback'
}

console.log(rating);