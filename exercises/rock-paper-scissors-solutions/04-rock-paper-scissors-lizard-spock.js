const rockPaperScissorsLizardSpock = (playerA, playerB) => {
    let result = '';

    const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    const clean = (userInput) => {
        return userInput.toString().toLocaleLowerCase();
    };

    const cleanPlayerA = clean(playerA);
    const cleanPlayerB = clean(playerB);

    console.log(`Player A plays ${cleanPlayerA} and Player B plays ${cleanPlayerB}`);

    if (!moves.includes(cleanPlayerA) || !moves.includes(cleanPlayerB)) {
        return "I only take 'rock', 'paper', 'scissors', 'lizard' or 'spock' as an argument";
    }
    if (cleanPlayerA === cleanPlayerB) {
        result = "It's a draw!";
    } else {

        switch (cleanPlayerA) {
            case 'rock': // wins over scissors and lizard

                switch (cleanPlayerB) {
                    case 'scissors':
                    case 'lizard':
                        result = 'Player A is the winner!';
                        break;
                    case 'paper':
                    case 'spock':
                        result = 'Player B is the winner!';
                        break;
                    default:
                        result = 'Player B did not make a valid move.';
                }
                break;

            case 'paper': // wins over rock and spock

                switch (cleanPlayerB) {
                    case 'rock':
                    case 'spock':
                        result = 'Player A is the winner!';
                        break;
                    case 'scissors':
                    case 'lizard':
                        result = 'Player B is the winner!';
                        break;
                    default:
                        result = 'Player B did not make a valid move.';
                }
                break;
            case 'scissors': // wins over paper and lizard

                switch (cleanPlayerB) {
                    case 'paper':
                    case 'lizard':
                        result = 'Player A is the winner!';
                        break;
                    case 'rock':
                    case 'spock':
                        result = 'Player B is the winner!';
                        break;
                    default:
                        result = 'Player B did not make a valid move.';
                }
                break;
            case 'lizard': // wins over paper and spock

                switch (cleanPlayerB) {
                    case 'paper':
                    case 'spock':
                        result = 'Player A is the winner!';
                        break;
                    case 'scissors':
                    case 'rock':
                        result = 'Player B is the winner!';
                        break;
                    default:
                        result = 'Player B did not make a valid move.';
                }
                break;
            case 'spock': // wins over rock and scissors

                switch (cleanPlayerB) {
                    case 'rock':
                    case 'scissors':
                        result = 'Player A is the winner!';
                        break;
                    case 'paper':
                    case 'lizard':
                        result = 'Player B is the winner!';
                        break;
                    default:
                        result = 'Player B did not make a valid move.';
                }
                break;
            default:
                result = 'Player A did not make a valid move.';
        }

    }

    return result;
}

// expected: Player A wins
console.log("\nWith 'lizard' and 'paper' as arguments:")
console.log(rockPaperScissorsLizardSpock('lizard', 'paper'));

// expected: Player B wins
console.log("\nWith 'scissors' and 'rock' as arguments:")
console.log(rockPaperScissorsLizardSpock('scissors', 'rock'));

// expected: Draw
console.log("\nWith 'lizard' and 'lizard' as arguments:")
console.log(rockPaperScissorsLizardSpock('lizard', 'lizard'));

// expected: Error message
console.log("\nWith 'spock' and 'uhura' as arguments:")
console.log(rockPaperScissorsLizardSpock('spock', 'uhura'));

// expected: Error message
console.log("\nWith 47 and 'kirk' as arguments:")
console.log(rockPaperScissorsLizardSpock(47, 'kirk'));
