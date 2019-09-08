const unbeatableRockPaperScissors = (userMove) => {
    let aiMove = '';

    // Test yourself: What do you think would happen
    // if we omit the call to .toString() in this chain?
    // Try it out and try to explain what happens
    const cleanUserMove = userMove.toString().toLocaleLowerCase();
    
    switch (cleanUserMove) {
        case 'scissors':
            aiMove = 'rock';
            break;
        case 'rock':
            aiMove = 'paper';
            break;
        case 'paper':
            aiMove = 'scissors';
            break;
        default:
            return "I only take 'rock', 'paper' or 'scissors' as an argument";
    }

    return aiMove;
}

console.log("\nWith 'paper' as an argument:")
console.log(unbeatableRockPaperScissors('paper'));

console.log("\nWith 'scissors' as an argument:")
console.log(unbeatableRockPaperScissors('scissors'));

console.log("\nWith 'rock' as an argument:")
console.log(unbeatableRockPaperScissors('rock'));

console.log("\nWith 'sunflower' as an argument:")
console.log(unbeatableRockPaperScissors('sunflower'));

console.log("\nWith 12345 as an argument:")
console.log(unbeatableRockPaperScissors(12345));