// Array.prototype.reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Fun fun function: https://www.youtube.com/watch?v=Wl98eZpkp-c

// The reduce method can be used any time you reach for accumulator pattern to traverse an array

// For example, if you're doing something like:
// - set up a variable to store a result
// - loop over an array and change the result each time
// - return the result
// then this is a good time to be using reduce instead.

// Reduce takes 2 arguments:
// - a callback ('reducer function')
// - an initial value. Some useful examples are 0 or [] or {} depending on what type of result you want.


const orders = [
 	{amount: 250},
	{amount: 400},
  	{amount: 100},
  	{amount: 325}
];

const totalAmount = orders.reduce((sum, order) => {

	console.log('current values:', sum, order);
    return sum + order.amount; // return value gets assigned to the accumulator and passed into the next call

}, 0);

// const totalAmount = 0;
// for (let i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount;
// }

console.log('totalAmount:', totalAmount, '\n');


// Reducer example that returns an array

const finalArray = orders.reduce((arr, order) => {

	console.log('current values:', arr, order);
    arr.push(order.amount);
    return arr; // return value gets assigned to the accumulator and passed into the next call

}, []);

console.log('finalArray:', finalArray, '\n');


// Reducer example that returns an object

const finalObj = orders.reduce((obj, order) => {

	console.log('current values:', obj, order);
    obj.total = obj.total ? obj.total + order.amount : order.amount;
    return obj; // return value gets assigned to the accumulator and passed into the next call

}, {});

console.log('finalObj:', finalObj, '\n');