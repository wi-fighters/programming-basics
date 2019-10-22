// Array traversal: different syntaxes for the same result
// Array.prototype.map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// The map method takes a callback as an argument
// The callback should take an element of the source array as an argument
// and return an element of the destination array

// Here's our source array
const people = ['Mario', 'Luigi', 'Peach'];

// Here's the new array we're aiming for
//             ['MARIO', 'LUIGI', 'PEACH'];

/**
 * 1. for loop
*/

console.log('\n1. for loop')

const forResult = [];

for (let i = 0; i < people.length; i++) {
    console.log('\nsource array:', people);
    console.log('current index:', i);
    console.log('current element:', people[i]);

    forResult.push(people[i].toLocaleUpperCase());
}

console.log(forResult);


/**
 * 2. for... of loop
*/

const forOfResult = [];

console.log('\n2. for... of loop');

for (const person of people) { // current element of source array
    console.log('\nsource array:', people);
    console.log('current index:', people.indexOf(person));
    console.log('current element:', person);
    forOfResult.push(person.toLocaleUpperCase());
}

console.log(forOfResult);

/**
 * 3. map, where the callback passed is a reference to a named function
*/

console.log('\n3. map, where the callback passed is a reference to a named function')

// We can define the callback with any function definition syntax.
// Here's an example of arrow function syntax without any shorthand.
const logPerson = (person) => {
    return person.toLocaleUpperCase();
};

// const logPersonOldSchool = function(person) {
//     return person.toLocaleUpperCase();
// };

const namedCallbackResult = people.map(logPerson);
// Behind the scenes, map is doing this:
// const namedCallbackResult = [
//     logPerson(people[0]),
//     logPerson(people[1]),
//     logPerson(people[2])
// ];

// Behind the scenes, map is calling this:
// logPerson(people[0]);
// logPerson(people[1]);
// logPerson(people[2]);

console.log(namedCallbackResult);

/**
 * 4. map, where the callback passed is an anonymous function
*/

console.log('\n4. map, where the callback passed is an anonymous function')

// We can define the callback with any function _expression_ syntax.

// Here's an example of old-school function expression syntax (ES5 and earlier)
// const anonCallbackResultOne = people.map(function(person) {
//     return person.toLocaleUpperCase();
// });

// Old school on one line
// const anonCallbackResultOne = people.map(function(person) { return person.toLocaleUpperCase(); });

// Here's an example of arrow function syntax using shorthand for a single parameter.
// const anonCallbackResultOne = people.map(person => {
//     return person.toLocaleUpperCase();
// });

// Arrow function on one line
const anonCallbackResultOne = people.map(person => { return person.toLocaleUpperCase(); });

console.log(anonCallbackResultOne);


/**
 * 5. map, passing an anonymous callback with shorthand syntax
*/

console.log('\n5. map, passing an anonymous callback with shorthand syntax')

// We can define the callback with any function _expression_ syntax.
// Here's an example of arrow function syntax using shorthand for:
// - a single parameter
// - no code in the function block except a return value
const anonCallbackResultTwo = people.map(person => person.toLocaleUpperCase());

console.log(anonCallbackResultTwo);
