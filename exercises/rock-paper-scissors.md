# Rock Paper Scissors

## Unbeatable Rock Paper Scissors

1. Declare a constant variable, and initialize it with an anonymous arrow function that takes one argument.
2. The function should return 'rock' when the argument is 'scissors', 'paper' when the argument is 'rock' and 'scissors' when the argument is 'paper'.
3. When we pass in something else as an argument, the function should return "I only take 'rock', 'paper' or 'scissors' as an argument".
4. What if I pass in a number as an argument? The function should still work as described in step 3.
5. What if I pass in 'RoCk' or 'pAPEr' as an argument? The function should still work as described in step 2.

## Honest Rock Paper Scissors

1. Declare a constant variable, and initialize it with an anonymous arrow function that takes one argument.
2. The function should return 'rock', 'paper' or 'scissors' randomly.
3. When we write something other than 'rock', 'paper' or 'scissors' as an argument, the function should return "I'm an honest function bro, be honest too and just write 'rock', 'paper', or 'scissors' as an argument".
4. What if I pass in a number as an argument? The function should still work as described in step 3.
5. What if I pass in 'SciSSORs' or 'ROcK' as an argument?  The function should still work as described in step 2.

## Two-player

1. Declare a constant variable, and initialize it with an anonymous arrow function.
2. This time, the function should take two arguments: `playerA` and `playerB`. Valid values for each of these are still either 'rock', 'paper' or 'scissors'.
3. Your function should log the moves to the console like `Player A plays rock and Player B plays scissors`
4. Use _nested if statements_ to decide who wins, and return a string like `Player A is the winner!`;

## Rock Paper Scissors Lizard Spock (bonus)

Refactor your code from the two-player version to use _nested switch statements_, and changing the game rules as described in this diagram:
https://www.instructables.com/id/How-to-Play-Rock-Paper-Scissors-Lizard-Spock/