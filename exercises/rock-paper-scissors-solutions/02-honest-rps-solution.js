const honestRockPaperScissors = (userMove) => {
    let aiMove = '';

    const moves = ['rock', 'paper', 'scissors'];

    const cleanUserMove = userMove.toString().toLocaleLowerCase();

    // First of all check if the input is valid.
    // If it's not, we don't need to bother running the rest of the code
    if (!moves.includes(cleanUserMove)) {
        return "I'm an honest function bro, be honest too and just write 'rock', 'paper', or 'scissors' as an argument";
    }

    const randomIndex = Math.floor(Math.random() * 3);

    aiMove = moves[randomIndex];

    return aiMove;
}

console.log("\nWith 'paper' as an argument:")
console.log(honestRockPaperScissors('paper'));

console.log("\nWith 'scissors' as an argument:")
console.log(honestRockPaperScissors('scissors'));

console.log("\nWith 'rock' as an argument:")
console.log(honestRockPaperScissors('rock'));

console.log("\nWith 'sunflower' as an argument:")
console.log(honestRockPaperScissors('sunflower'));

console.log("\nWith 12345 as an argument:")
console.log(honestRockPaperScissors(12345));