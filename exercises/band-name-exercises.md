# Today's exercise

## Exercise 1 (covered in class)

Write a function called `generateBandName`.

- It should accept two parameters: `clothingColour` and `lastFoodEaten`

- It should return a string that represents the resulting band name, with every first letter as a capital.

- There should be no calls to console.log() inside the function.

E.g
- With the input 'red' 'cookies', it should return 'The Red Cookies!'
- With the input 'blue' 'ciabattas', it should return 'The Blue Ciabattas!'

Each line below is a new exercise. Use a new branch for each one.

Between exercises, remember to run through [the recently-updated checklist](https://github.com/wi-fighters/how-to/blob/master/how-to-check-your-code.md) as you go.

## Refactor the above function so that...

0. The function only includes one return statement (you may need to add / change something else to make this work...)

1. Every time the function is called, it should store the result in a global array (and still return it like before).

### New stuff

2. generateBandName returns the same result as before, but this time by calling two other functions:

    - capitalizeColor(clothingColor) which returns a string.
    
      E.g. if clothingColor is 'YeLlow', return 'Yellow'

    - capitalizeFood(lastFoodEaten) which returns a string.
    
      E.g. if lastFoodEaten is 'PIE', return 'Pie'

3. generateBandName returns the same result as before, but this time calls a single function twice:

    - capitalizeInitial(rawString) which returns a string.

      E.g. if rawString is 'crimson', return 'Crimson'

      E.g. if rawString is 'KEBAB', return 'Kebab'

4. In the same file, write a function called `makeTasty` that takes `color` as a parameter. This func should...

  - Use the accumulator pattern with just one return statement
    For a refresher, accumulator pattern was shown in band-name-solution-1.js

  - Use a switch statement to determine the return value, using this guide:
  ```
    If the input is 'Red',    return 'Chilli'.
    If the input is 'Orange', return 'Tangerine'.
    If the input is 'Yellow', return 'Pineapple'.
    If the input is 'Green',  return 'Sage'.
    If the input is 'Blue',   return 'Blueberry'.
    If the input is 'Purple', return 'Plum'.
  ```

- To call makeTasty, modify only one existing line in `generateBandName`.
- Do not add or remove any lines of code from `generateBandName`.
