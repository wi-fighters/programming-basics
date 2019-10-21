/**
 * Welcome to the practice exam for the Programming Basics module.
 * Give it your best, but also remember it's just practice :)
 * 
 * Please ADD CODE but DO NOT REMOVE CODE.
 * 
 * There are 8 questions, worth a total of 16 marks.
 * 
 * This is just a practice, so there's no pass/fail assessment.
 * 
 * The questions were designed to get progressively more challenging.
 * Read all the questions before beginning to solve them.
 * 
 * Good luck!
 */

/**
 * Question 1 - Multiple of 100 - (1 mark)
 * ---------------------------------------
 * 
 * Write a program that checks whether or not an integer is divisible by 100.
 * 
 * Example input and expected output:
 * 1    ➞ false
 * 150  ➞ false
 * 1000 ➞ true
 * 100  ➞ true
 */

 /**
  * Marks allocation
  * ----------------
  * 1 mark: return correct results
  */

const one = integer => {
    return integer % 100 === 0;
};

// Do not modify this code. This is here to test your solution.
console.log('\nQuestion 1:');
console.log(`Input: 1\t`, one(1));
console.log(`Input: 150\t`, one(150));
console.log(`Input: 1000\t`, one(1000));
console.log(`Input: 100\t`, one(100));


/**
 * Question 2 - 2D Array - (1 mark)
 * --------------------------------
 * 
 * Given a 2D Array, print each of the values on a new line.
 * 
 * Example input and expected output:
    [
        [1, 2, 3], 
        ['the', 'quick', 'brown', 'fox'], 
        [true, false]
    ]

  * ➞

    1
    2
    3
    the
    quick
    brown
    fox
    true
    false
 */

 /**
  * Marks allocation
  * ----------------
  * 1 mark: console.log correct results
  */

const two = outerArray => {
    // solution 1
    for (let i = 0; i < outerArray.length; i++) {

        for (let j = 0; j < outerArray[i].length; j++) {
            console.log(outerArray[i][j]);
        }
    }

    // solution 2
    // outerArray.map(innerArray => innerArray.map(el => console.log(el)));
};

// Do not modify this code. This is here to test your solution.
console.log('\nQuestion 2:');
const inputTwo = [
    [1, 2, 3], 
    ['the', 'quick', 'brown', 'fox'], 
    [true, false]
];
two(inputTwo);


/**
 * Question 3 - Sum of array values - (1 mark)
 * --------------------------------------------
 * 
 * Write a program to calculate the sum of three elements of a given array of integers.
 * The length of the array must be 3.
 * 
 * Example input and expected output:
 * [5, 10, 15]  ➞ 30
 * [-5, 10, 15] ➞ 20
 * [50, 0, 15]  ➞ 65
 */

 /**
  * Marks allocation
  * ----------------
  * 1 mark: return correct results
  */

const three = integers => {
    let sum = 0;

    for (let i = 0; i < integers.length; i++) {
      sum += integers[i];
    }
  
    return sum;
};

// Do not modify this code. This is here to test your solution.
console.log('\nQuestion 3:');
console.log(`Input: [5, 10, 15]\t`, three([5, 10, 15]));
console.log(`Input: [-5, 10, 15]\t`, three([-5, 10, 15]));
console.log(`Input: [50, 0, 15]\t`, three([50, 0, 15]));


/**
 * Question 4 - City name beginning - (1 mark)
 * -------------------------------------------
 * 
 * For a given city name, check whether it begins with 'Los' or 'New'.
 * If it does, display the city name. Otherwise display 'The city name does not begin with Los or New'.
 * 
 * Example input and expected output:
 * 'Los Angeles'    ➞ 'Los Angeles'
 * 'New York City'  ➞ 'New York City'
 * 'Berlin'         ➞ 'The city name does not begin with Los or New'
 */

/**
 * Marks allocation
 * ----------------
 * 1 mark: return correct results
 */

const four = city => {
    const cityStart = city.substring(0,3);

    if (cityStart === 'Los' || cityStart === 'New') {
        return city;
    }

    return "The city name does not begin with Los or New";
};

// Do not modify this code. This is here to test your solution.
console.log('\nQuestion 4:');
console.log(`Input: 'Los Angeles'\t`, four('Los Angeles'));
console.log(`Input: 'New York City'\t`, four('New York City'));
console.log(`Input: 'Berlin'\t\t`, four('Berlin'));


/**
 * Question 5 - Angles of a triangle - (2 marks)
 * ---------------------------------------------
 * 
 * Given the size of two angles in a triangle, classify the third angle as 'obtuse', 'right' or 'acute'.
 * 
 * All angles inside a triangle will add up to a total of 180.
 * An acute angle is smaller than 90 degrees.
 * A right angle is exactly 90 degrees.
 * An obtuse angle is greater than 90 degrees.
 * 
 * For example: 11, 20 should return 'An obtuse angle is missing', since the missing angle would be 149 degrees, which is greater than 90.
 * 
 * Example input and expected output:
 * 11, 20  ➞ 'An obtuse angle is missing'
 * 27, 59  ➞ 'An obtuse angle is missing'
 * 135, 11 ➞ 'An acute angle is missing'
 * 45, 45  ➞ 'A right angle is missing'
 */

/**
 * Marks allocation
 * ----------------
 * 1 mark: return correct results (exact strings)
 * 1 mark: implement correct logic
 */

const five = (firstAngle, secondAngle) => {
    const thirdAngle = 180 - (firstAngle + secondAngle);
    
    if (thirdAngle < 90) {
        return 'An acute angle is missing';
    } else if (thirdAngle > 90) {
        return 'An obtuse angle is missing';
    }
    
    return 'A right angle is missing';
};

// Do not modify this code. This is here to test your solution.
console.log('\nQuestion 5:');
console.log(`Input: 11, 20\t`, five(11, 20));
console.log(`Input: 27, 59\t`, five(27, 59));
console.log(`Input: 135, 11\t`, five(135, 11));
console.log(`Input: 45, 45\t`, five(45, 45));


/**
 * Question 6 - Accept a callback - (2 marks)
 * ------------------------------------------
 * 
 * Part 1: You are given an array of integers and a predefined callback,
 * Write a function that calls that callback on each element of the source array
 * (each element of the source array should be passed to the callback as an argument).
 * 
 * The function should return a new array of integers with each element calculated to the power of 2.
 * 
 * Example input and expected output:
 * [1, 2, 3, 4, 5] ➞ [1, 4, 9, 16, 25]
 */


/**
 * Marks allocation
 * ----------------
 * 1 mark: return correct results
 * 1 mark: use the callback
 */

const six = (integers, callback) => {
    // const squares = [];
    
    // for (let i = 0; i < integers.length; i++) {
    //     squares.push(callback(integers[i]));
    // }

    // return squares;

    return integers.map(callback);
};

// Do not modify this code. This is here to test your solution.
console.log('\nQuestion 6:');
const getSquare = value => Math.pow(value, 2);
console.log(six([1, 2, 3, 4, 5], getSquare));


/**
 * Question 7 - Write a callback - (4 marks)
 * ----------------------------------------
 * 
 * Part 2: You are given the same array of integers,
 * but this time you must write the callback yourself
 * and call that callback on each element of the source array.
 * 
 * The callback should return the square root of an integer
 * and return a floating point number to two decimal places.
 * 
 * After calling your callback on each element of the source array,
 * your main function should return a new array of floating point numbers.
 * 
 * Example input and expected output:
 * [1, 2, 3, 4, 5] ➞ [ 1, 1.41, 1.73, 2, 2.24 ]
 */

/**
 * Marks allocation
 * ----------------
 * 1 mark: correctly calculate the square root
 * 1 mark: return results to 2 decimal places
 * 1 mark: return the correct data type (an array of numbers)
 * 1 mark: write + use the callback
 */

const seven = integers => {

    // const callback = value => {
    //     const result = parseFloat(Math.sqrt(value).toFixed(2));

    //     console.log('value:', value);
    //     console.log('Math.sqrt(value):', Math.sqrt(value));
    //     console.log('typeof Math.sqrt(value).toFixed(2):', typeof Math.sqrt(value).toFixed(2));
    //     console.log('typeof result:', typeof result);

    //     return result;
    // };

    const getRoot = value => parseFloat(Math.sqrt(value).toFixed(2));

    return integers.map(getRoot);
};

// Do not modify this code. This is here to test your solution.
console.log('\nQuestion 7:');
console.log(seven([1, 2, 3, 4, 5]));


/**
 * Question 8 - Podcasters - (4 marks)
 * ----------------------------------
 * 
 * The provided Podcaster class accepts a full name and the title of a podcast.
 * Take a look at the code below the class definition to see how instances are created.
 * (but you do not need to create any new instances yourself).
 * 
 * Your task is to write a method called boast within the provided class block.
 * 
 * The boast method should accept no arguments. It should return a string that includes the individual podcaster's first name only, and the title of their podcast.
 * 
 * Example method calls and expected output:
 * 
 * wes.boast() ➞ "I'm Wes and Syntax is the best podcast ever!"
 * saron.boast() ➞ "I'm Saron and Base.cs is the best podcast ever!"
 */

/**
 * Marks allocation
 * ----------------
 * 1 mark: boast method is created with the correct syntax
 * 1 mark: boast method returns the correct result
 * 1 mark: extract first name from fullName
 * 1 mark: access instance properties with the 'this' keyword
 */

class Podcaster {
    constructor(fullName, podcastTitle) {
        this.fullName = fullName;
        this.podcastTitle = podcastTitle;
    }

    getFirstName() {
        return this.fullName.split(" ")[0];
    }

    boast() {
        // console.log('\nthis.fullName:',               this.fullName);
        // console.log('this.fullName.split(" "):',      this.fullName.split(" "));
        // console.log('this.fullName.split(" ")[0]:',   this.fullName.split(" ")[0]);

        // solution 1
        // const firstName = this.fullName.split(" ")[0];
        // return `I'm ${firstName} and ${this.podcastTitle} is the best podcast ever!`;
        
        // solution 2
        return `I'm ${this.getFirstName()} and ${this.podcastTitle} is the best podcast ever!`;
    }
}

// Do not modify this code. This is here to test your solution.
console.log('\nQuestion 8:');

const jonathan = new Podcaster('Jonathan Cutrell', 'Developer Tea');
const saron = new Podcaster('Saron Yitbarek', 'Base.cs');
const chris = new Podcaster('Chris Coyier', 'Shop Talk Show');
const jeff = new Podcaster('Jeff Meyerson', 'Software Engineering Daily');
const wes = new Podcaster('Wes Bos', 'Syntax');
const courtland = new Podcaster('Courtland Allen', 'Indie Hackers');

console.log('Uncomment the lines below to test your method');
console.log(jonathan.boast());
console.log(saron.boast());
console.log(chris.boast());
console.log(jeff.boast());
console.log(wes.boast());
console.log(courtland.boast());