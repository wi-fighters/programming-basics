const init = () => {
  const db = [];
  const api = [];

  const create = (newElement) => {
      db.push(newElement);
      console.log(`New element added! The new length of the array is ${db.length}`);
      return db.length;
  };

  const read = () => {
      return [...db];
  };

  const update = (index, newElement) => {
    const oldElement = db[index];
    if (typeof oldElement === 'undefined') {
      create(newElement);
    } else {
      db[index] = newElement;
    }
    return oldElement;
  };

  const remove = (index) => {
    const oldElement = db[index];
    if (typeof oldElement === 'undefined') {
      return 'Error: could not update because there was no element at the specified index. Please try a different index.';
    }
    // delete one element at the given index
    db.splice(index, 1);
    
    return oldElement;
  };

  api.push(create, read, update, remove);

  return api;
};

// get the API
const dbApi = init();

// extract each func from the API and give it a meaningful name
const createInDb =    dbApi[0];
const readDb =        dbApi[1];
const updateInDb =    dbApi[2];
const removeFromDb =  dbApi[3];

console.log('\nWrite some things to db and read the contents each time...');
console.log(createInDb('everybooody'));
console.log(readDb());

console.log(createInDb('backstreet\'s'));
console.log(readDb());

console.log(createInDb('back'));
console.log(readDb());

console.log(createInDb('alright'));
console.log(readDb());

console.log('\nUpdate some things in the db and read the contents each time...');

console.log(updateInDb(0, 'the boys'));
console.log(readDb());

console.log(updateInDb(1, 'are'));
console.log(readDb());

console.log(updateInDb(3, 'in town'));
console.log(readDb());

// Test yourself: Why does this line print undefined?
console.log(updateInDb(4, 'yeah yeah yeah'));
console.log(readDb());

console.log('\nUpdate and delete some things, and read the db contents each time...');

console.log(updateInDb(0, "I'm blue"));
console.log(readDb());

console.log(updateInDb(1, "Da ba dee"));
console.log(readDb());

console.log(updateInDb(2, "Da ba daa"));
console.log(readDb());

console.log(removeFromDb(3));
console.log(readDb());

// Test yourself: Why does this line print an error message?
console.log(removeFromDb(4));
console.log(readDb());

console.log(removeFromDb(3));
console.log(readDb());