class Car {
    constructor(make, color, licencePlate) {
        this.make = make;                   // inherited property, unique value
        this.color = color;                 // inherited property, unique value
        this.licencePlate = licencePlate;   // inherited property, unique value
        this.odometer = 0; // km            // inherited property, inherited starter value
        this.wheelCount = 4;                // inherited property, inherited value
    }

    drive(kilometers) {
        this.odometer += kilometers;
    }
}

const neptune = new Car('Fiat', 'navy', 'SJS8E3');
const ladybug = new Car('Toyota', 'cherry', 'KLA3FN2');

console.log('\nWhat kind of object is this?');
console.log(typeof neptune); // cool, but so are arrays
console.log(neptune instanceof Car); // better

console.log('\nWhat unique members does it have?');
console.log(neptune.make);
console.log(neptune.color);
console.log(neptune.licencePlate);

console.log('\nWhat inherited members does it have?');
console.log(neptune.drive);
console.log(neptune.wheelCount);

// if you want to stand out in JavaScript interviews, make sure to research prototypal inheritance as well.
// Here's a YouTube playlist to get started, but make sure you practice too: https://www.youtube.com/watch?v=GhbhD1HR5vk&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub