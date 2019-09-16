// This is an introduction to loop building, using the 'while loop' as a starting point. 
// Uncomment each numbered section separately.

// 1 - infinite loop (CTRL+C stops the program in terminal)
// // ========================================================================
// const weatherIsNice = true;

// while (weatherIsNice) {
//   console.log("let's go outside! :D");
// }

// // 2 - break statement stops the loop
// // ========================================================================
// const weatherIsNice = true;

// while (weatherIsNice) {
//   console.log("let's go outside! :D");
//   break;
// }

// // 3 - update the outer state to break the loop
// // ========================================================================
// let weatherIsNice = true;

// while (weatherIsNice) {
//   console.log("let's go outside! :D");
//   weatherIsNice = false;
// }

// 4 - update the outer state to break the loop only sometimes
// // ========================================================================
// let weatherIsNice = true; // true

// while (weatherIsNice) {
//   console.log("\nlet's go outside! :D");

//   // update the weather forecast
//   const temp = Math.floor(Math.random() * 35);
//   console.log(`the temperature is ${temp}`);

//   weatherIsNice = (temp > 0 && temp < 25) ? true : false;
//   console.log(`weatherIsNice: ${weatherIsNice}`);
// }

// 5 - also test the opposite case
// // ========================================================================
// let weatherIsNice = true; // true

// while (weatherIsNice) {
//   console.log("\nlet's go outside! :D");

//   // update the weather forecast
//   const temp = Math.floor(Math.random() * 35);
//   console.log(`the temperature is ${temp}`);

//   weatherIsNice = (temp > 0 && temp < 25) ? true : false;
//   console.log(`weatherIsNice: ${weatherIsNice}`);
// }

// while (!weatherIsNice) {
//   console.log("\nlet's plan a holiday!");

//   // update the weather forecast
//   const temp = Math.floor(Math.random() * (35)); // 20
//   console.log(`the temperature is ${temp}`);
//   weatherIsNice = (temp > 17 && temp < 25) ? true : false;
// }

// // 6 - avoid declaring variables in a loop to save memory
// // ========================================================================
// let weatherIsNice = true;
// let temperature = 0;

// while (weatherIsNice) {
//   console.log(`\nthe temperature is ${temperature}`);
//   console.log("let's go outside! :D");

//   // update the weather forecast
//   temperature = Math.floor(Math.random() * (35));
//   weatherIsNice = (temperature > 17 && temperature < 25) ? true : false;
// }

// while (!weatherIsNice) {
//   console.log(`\nthe temperature is ${temperature}`);
//   console.log("let's plan a holiday!");

//   // update the weather forecast
//   temperature = Math.floor(Math.random() * (35));
//   weatherIsNice = (temperature > 17 && temperature < 25) ? true : false;
// }

// // 7 - when WET (write everything twice), get DRY (don't repeat yourself)
// // ========================================================================
// let weatherIsNice = true;

// const setWeather = () => {
//   // update the forecast
//   const temp = Math.floor(Math.random() * (35));
//   weatherIsNice = (temp > 17 && temp < 25) ? true : false;

//   // report the weather
//   console.log(`\nthe temperature is ${temp}`);
// } 

// while (weatherIsNice) {
//   console.log("let's go outside! :D");
//   setWeather();
// }

// while (!weatherIsNice) {
//   console.log("let's plan a holiday!");
//   setWeather();
// }

// // 8 - alternatively, use a counter to run a loop a certain number of times
// // ========================================================================

// let sunnyDaysLeft = 10;

// while (sunnyDaysLeft > 0) {
//   console.log(`There are ${sunnyDaysLeft} sunny days left, let's go outside! :D`);
//   sunnyDaysLeft -= 1; // This is the most flexible (you can use any number you like)
//   // --sunnyDaysLeft; // This is also be acceptable if you only need to decrement by 1
//   // sunnyDaysLeft--; // PLEASE AVOID (even if everybody else doing it)
// }
