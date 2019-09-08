const twoPlayerRockPaperScissors = (playerA, playerB) => {
    let result = '';

    const moves = ['rock', 'paper', 'scissors'];

    // Test yourself:
    // What is happening on the next 3 lines?
    // What other part of the code depends on this?
    const clean = (userInput) => {
        return userInput.toString().toLocaleLowerCase();
    };

    console.log(`Player A plays ${clean(playerA)} and Player B plays ${clean(playerB)}`);

    // Test yourself:
    // How many function calls do you see on the next line?
    // Try listing what happens on the call stack,
    // keeping track of when calls are pushed on and popped off.

    // What do you expect will be the data type and value of the following expressions?
    // playerA                            === ?
    // clean(playerA)                     === ?
    // moves.includes(clean(playerA))     === ?
    // !moves.includes(clean(playerA))    === ?
    if (!moves.includes(clean(playerA)) || !moves.includes(clean(playerB))) {
        return "I only take 'rock', 'paper' or 'scissors' as an argument";
    }
    if (clean(playerA) === clean(playerB)) {
        result = "It's a draw!";
    } else if (clean(playerA) === 'rock') {
        if (clean(playerB) === 'scissors') {
            result = 'Player A is the winner!';
        } else {
            result = 'Player B is the winner!';
        }
    } else if (clean(playerA) === 'paper') {
        if (clean(playerB) === 'rock') {
            result = 'Player A is the winner!';
        } else {
            result = 'Player B is the winner!';
        }
    } else if (clean(playerA) === 'scissors') {
        if (clean(playerB) === 'paper') {
            result = 'Player A is the winner!';
        } else {
            result = 'Player B is the winner!';
        }
    }

    return result;
}

// Test yourself:
// The above code defines a function named clean.
// What if we wanted to clean our arguments
// _before_ passing them into our twoPlayerRockPaperScissors function?
// Could we call our clean function (defined above) from
// somewhere underneath this comment?
// Try to explain why or why not.

// expected: Player A wins
console.log("\nWith 'paper' and 'rock' as arguments:")
console.log(twoPlayerRockPaperScissors('paper', 'rock'));

// expected: Player B wins
console.log("\nWith 'paper' and 'scissors' as arguments:")
console.log(twoPlayerRockPaperScissors('paper', 'scissors'));

// expected: Draw
console.log("\nWith 'rock' and 'rock' as arguments:")
console.log(twoPlayerRockPaperScissors('rock', 'rock'));

// expected: Error message
console.log("\nWith 'paper' and 'sunflower' as arguments:")
console.log(twoPlayerRockPaperScissors('paper', 'sunflower'));

// expected: Error message
console.log("\nWith 12345 and 'scissors' as arguments:")
console.log(twoPlayerRockPaperScissors(12345, 'scissors'));
