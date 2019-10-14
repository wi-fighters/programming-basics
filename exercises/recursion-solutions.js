// A function that calls itself is 'recursive'

// DEMO: Handshakes
// https://www.geeksforgeeks.org/number-of-handshakes-such-that-a-person-shakes-hands-only-once/

const handshakes = people => {
    if (people === 0) {
        return people;
    } else {
        // shake everybody's hand except your own (people - 1)
        // and add the handshakes that happen between everybody else
        return people - 1 + handshakes(people - 1);
    }
};

// for (let i = 1; i <= 8; i++) {
//     console.log(`${handshakes(i)} handshakes between ${i} people`);
// }

// EX 1: Factorial

// Use recursion to calculate the factorial of a given number.
// Examples and expected output: 
// factorial(3) should calculate 3 * 2 * 1  and return 6
// factorial(4) should calculate 4 * 3 * 2 * 1 and return 24

// https://www.mathsisfun.com/numbers/factorial.html
const factorial = num => {
    console.log(`running with ${num} as input`);
    if (num === 1) {
        return num;
    } else {
        return num * factorial(num - 1);
    }
};

console.log(`5! === ${factorial(5)}`);
// for (let i = 1; i <= 8; i++) {
//     console.log(`${i}! === ${factorial(i)}`);
// }

// EX 2: Fibonacci

// Use recursion to give the Fibonacci number at a given position in the sequence.
// Reminder, the sequence begins like this: 1 1 2 3 5 8 13 21
// Examples and expected output: 
// fibonacci(1) should calculate the first position and return 1
// fibonacci(2) should calculate the second position and return 1
// fibonacci(3) should calculate the third position and return 2
// fibonacci(4) should calculate the fourth position and return 3

// https://www.mathsisfun.com/numbers/fibonacci-sequence.html
const fibonacci = level => {
    if (level <= 1) {
        return level;
    } else {
        return fibonacci(level - 1) + fibonacci(level - 2);
    }
};

// for (let i = 1; i <= 8; i++) {
//     console.log(`Fibonacci level ${i}: ${fibonacci(i)}`);
// }
