// Easy one
// 1-Creating objects using the ‘new’ keyword
const obj1 = new Object();
// 2-Creating objects using literal notation
const obj2 = {
    name: 'Ali'
}
// 3-Creating objects using the object constructor
const obj3 = {};

Object.defineProperty(obj3, 'name', {
    value: 'Olga'
})
// 4-Adding properties to each object type

obj1['name'] = 'Dav'
// 5-Adding methods to each object type

obj1['sum'] = function () {
    return 4 + 5
}







// ----------------------------------------------------------------------
// Second one
// change this code to make it working :blush:
// const person;
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.employed);
// 1-change what needed to ADD other more people to your array of objects, you need at lest 5 people
// 2-Find how many people has a job
// 3-display only the people are over 30 and has no job

const person1 = {
    firstName: 'Ali',
    lastName: 'Faw',
    age: 30,
    employed: true
};
const person2 = {
    firstName: 'Olga',
    lastName: 'Dae',
    age: 40,
    employed: false
};
const person3 = {
    firstName: 'Zain',
    lastName: 'Kal',
    age: 30,
    employed: true
};
const person4 = {
    firstName: 'Arina',
    lastName: 'Dal',
    age: 50,
    employed: true
};

const person = [person1, person2, person3, person4];
console.log(person);

function findEmployed() {
    let result = 0;
    for (let i = 0; i < person.length; i++) {
        if (person[i].employed) {
            result += 1
        }
    }
    return `there are ${result} people working`;
}

console.log(findEmployed());

function findEmployeOver() {
    let result = [];
    for (let i = 0; i < person.length; i++) {
        if (!person[i].employed && person[i].age > 30) {
            result.push(person[i].firstName)
        }
    }
    return `${result} not working and over 30 years old`;
}

console.log(findEmployeOver());