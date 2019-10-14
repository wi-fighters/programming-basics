function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  
  this.odometer = 0;
  this.drive = function(km) {
    this.odometer += km;
    return `The odometer is now at ${this.odometer}`;
  };
}

var myCar = new Car('Honda', 'Accord', 1998);
var yourCar = new Car('Mercedes', 'A red one', 1976);

// Bracket syntax
const someProperty = 'odometer';

console.log(`myCar's odometer: ${myCar.odometer}`);
console.log(`myCar's odometer: ${myCar['odometer']}`);
console.log(`myCar's odometer: ${myCar[someProperty]}`);

console.log('\nMY CAR:');
console.log(myCar);
console.log(myCar.drive(10000));
console.log(myCar);

console.log('\nYOUR CAR:');
console.log(yourCar);
console.log(yourCar.drive(7));
console.log(yourCar);


console.log(myCar instanceof Car);
console.log(yourCar instanceof Car);
// expected output: true

console.log(myCar instanceof Object);
// expected output: true
