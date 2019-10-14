let whileTotal = 0;
let forTotal = 0;

let increment = 1;
// while loop syntax
while (increment <= 20) {
    whileTotal += increment;
    console.log(`whileTotal: ${whileTotal}. increment: ${increment}`);
    increment += 1;
}

// for loop syntax
for (let i = 1; i <= 20; i += 1) {
    forTotal += i;
    console.log(`forTotal: ${forTotal}. iterations (i): ${i}`);
}

// console.log(`i outside the loop: ${i}`);
console.log(`whileTotal: ${whileTotal}`);
console.log(`forTotal: ${forTotal}`);
