# Programming Basics: "Do While" Loops

Use the appropriate loop for each section. Print all your answers to the console.

**While Loops** While Loops

1. **Run Along**. Create a while loop that runs as long as i is less than 15.

2. **City Names.** Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome". 

3. **Odds and Evens.** Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
* [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
* [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

**Do While Loops.**

1. **sumOfNumbers.** Create a program that adds up the numbers in an array (of at least 3 numbers).

2. **Add it up!** Create a program that adds numbers from 1-20 together using a while loop. 

3. **Capitalize.** Create a program that capitalises the first letter of each element in an array of names, using a do while loop ?????????. Examples:
* ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]
* ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]
* ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

* **Note:** Keep names in the same order and make sure that only the first lesson of the name is capitalised (See "Maria" in the second above example). 
	
4. **No Duplicates!** A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values using a do while loop. See the examples below. Example:
* [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]

* [1, 6, 6, 9, 9] ➞ [1, 6, 9]
* [2, 2, 2, 2, 2, 2] ➞ [2]
* [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

5. **Repeat it.** Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array.
* Example: ("example", 3) ➞ ["example", "example", "example"]

**Bonuses - Choose the loop**

**Factors.** A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
[3, 6, 12, 36]

* // 3 is a factor of 6 (3 * 2 = 6)
* // 6 is a factor of 12 (6 * 2 = 12)
* // 12 is a factor of 36 (12 * 3 = 36)

Create a program that determines whether or not a given array is a factor chain using a do while loop.
* Examples
* [1, 2, 4, 8, 16, 32] ➞ true
* [1, 1, 1, 1, 1, 1] ➞ true
* [2, 4, 6, 7, 12] ➞ false
* [10, 1] ➞ false
