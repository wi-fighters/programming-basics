const init = () => {
    const db = [];
    const api = [];

    const create = (newElement) => {
        db.push(newElement);
        return db.length;
    };

    const read = () => {
        // Use the spread operator to return a copy of the array.
        return [...db];

        // If we did this instead...
        // return db;
        // ...then the original db would be modifiable from the outer execution context,
        // which would mean the db is no longer encapsulated (private)
    };

    api.push(create, read);

    return api;
};

// get the API
const dbApi = init();

// extract each func from the API and give it a meaningful name
const createInDb = dbApi[0];
const readDb = dbApi[1];

console.log('\nAfter calling create once, the return value is:');
console.log(createInDb('everybooody'));
console.log('At this point, the DB contains:');
console.log(readDb());

console.log('\nAfter calling create a 2nd time, the return value is:');
console.log(createInDb('backstreet\'s'));
console.log('At this point, the DB contains:');
console.log(readDb());

console.log('\nAfter calling create a 3rd time, the return value is:');
console.log(createInDb('back'));
console.log('At this point, the DB contains:');
console.log(readDb());

console.log('\nAfter calling create a 4th time, the return value is:');
console.log(createInDb('alright'));
console.log('At this point, the DB contains:');
console.log(readDb());
