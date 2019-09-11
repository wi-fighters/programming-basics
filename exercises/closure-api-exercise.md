# Closure exercise

This exercise is designed to demonstrate CRUD operations (create, read, update, delete) on an imaginary database (for this example we'll just use an array).

To avoid our database getting hacked, we will encapsulate it in a closure.

We still want the outside world to be able to interact with the database in a limited way, so we will expose some functions as an API (Application Programming Interface) that users must use instead of operating directly on the DB.

Create all functions as arrow function expressions assigned to constant variables.

## Return a function reference

1. In your own repo, create a file called `closure-db-api.js` and **make a commit as you complete each step**:

2. Create a function called `init`, which accepts no parameters. Inside this func:
  - Declare an array called `db`.
  - Define a function called `create` (details in next step).
  - Return a reference to the `create` function.

3. The `create` function should:
  - Accept a new element as a parameter.
  - Push this element onto the `db` array in its outer scope.
  - Return the new length of this `db` array.

4. Test your function:
- assign the return value of `init` to a new constant named `createInDb`.
- Run `createInDb` a few times with different input, and log each result to the console.

## Expose more function references (provide an API)

### Part one: refactor `init`

1. Refactor your `init` function so it returns an array called `api`.

2. Before `init` returns, it should push your `create` function into the `api` array.

3. Modify your tests so your code works as before.

### Part two: add `read`

1. In the same lexical environment as your `create` function, create a new one called `read`. It should:
  - accept no arguments
  - return a copy of the array. Find out on MDN how to use the 'spread operator' to achieve this.
  - Test yourself: What would happen if we returned `db` without using the spread operator?

2. Refactor `init` so that the returned array contains both the `create` and `read` function references.
  
3. From outside the `init` function, log the contents of `db` by accessing the `read` function from the `api`.

4. From outside the `init` function, see if you can hack the `db` and insert new elements _without_ using the `create` function. (E.g. try using the push method on the return value from `read`).
  - Call the `read` function again (from outside `init`), to check whether your hacking attempt was successful.
  - Can you alter the db from outside? Why / why not?
  - If you can, refactor your `init` function to prevent this.

### Part 3: Add `update`

1. Following the same pattern as above, add a new function to your API called `update`. This function should:
  - accept two parameters: an index and a new element.
  - replace the db element at the given index with the new element (if it already exists).
  - If there is no existing element at the given index, return an error message.

2. Refactor `update` to change its behavior when there's no `db` element at the given index.
- This time, instead of returning an error message, it should call the `create` function and pass in the new element. 

3. Refactor the `create` function so it returns a string like: 'New element added! The new length of the array is 7.'

4. Expose `update` so it can be accessed from outside the `init` function.

### Part 4: Add `delete`

1. Following the same pattern as above, add a new function to your API called `delete`. This function should:
  - accept one parameter: the index of the element to delete.
  - delete the db element at the given index if it exists.
  - If there is no existing element at the given index, return an error message.

2. Expose `delete` so it can be accessed from outside the `init` function.

Again, try to hack your db from outside. Can you perform CRUD operations on it without using your API?

Your goal is to refactor `init` so that you can't ;)

