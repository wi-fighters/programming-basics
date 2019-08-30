// No surprises
// typeof works for primitive values
let myNum = 5;

console.log(`\nmyNum:\t\t${myNum}`);
console.log(`typeof myNum\t${typeof myNum}`);

let myStr = 'heyo';

console.log(`\nmyStr:\t\t${myStr}`);
console.log(`typeof myStr:\t${typeof myStr}`);

let myBool = true;

console.log(`\nmyBool:\t\t${myBool}`);
console.log(`typeof myBool:\t${typeof myBool}`);

// Weird ones

let myArr = ['yup', 'another', 'array'];

// console.log(`\nmyArr:\t\t${myArr}`);
// this is not a good way of checking whether you have an array
// console.log(`typeof myArr:\t${typeof myArr}`);

// this is a much better way :)
// console.log(`Array.isArray(myArr):\t${Array.isArray(myArr)}`);

function myFunc() {
    console.log('My function is running');
}

// oh, but it looks like typeof also works for functions
// console.log(`typeof myFunc:\t${typeof myFunc}`);

// ------------

const myNan = 'eight' / 2;

console.log(`\nmyNan:\t\t\t${myNan}`);
// this is not a good way to check for NaN.
// Sometimes JS will tell you that you have a number when you really don't!
console.log(`typeof myNan:\t\t${typeof myNan}`);
// this is a better way:
console.log(`Number.isNaN(myNan):\t${Number.isNaN(myNan)}`);