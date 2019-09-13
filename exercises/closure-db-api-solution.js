const init = () => {
    const db = [];
    const api = [];

    const create = (newElement) => {
        db.push(newElement);
        return db.length;
    };

    api.push(create);

    return api;
};

// get the API
const dbApi = init();

// extract each func from the API and give it a meaningful name
const createInDb = dbApi[0];

console.log('\nAfter calling the inner function once, the return value is:');
console.log(createInDb('everybooody'));


console.log('\nAfter calling the inner function a 2nd time, the return value is:');
console.log(createInDb('backstreet\'s'));


console.log('\nAfter calling the inner function a 3rd time, the return value is:');
console.log(createInDb('back'));

console.log('\nAfter calling the inner function a 4th time, the return value is:');
console.log(createInDb('alright'));
