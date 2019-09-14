const init = () => {
    const db = [];
    const api = [];

    const create = (newElement) => {
        db.push(newElement);
        return db.length;
    };

    const read = () => {
        // Let's see what could happen if we returned
        // the original db
        return db;
        // instead of returning a copy
        // return [...db];
    };

    api.push(create, read);

    return api;
};

// get the API
const dbApi = init();

// extract each func from the API and give it a meaningful name
const createInDb = dbApi[0];
const readDb = dbApi[1];

console.log('\nWrite some things to db and read the contents each time...');
console.log('No surprises so far...');
console.log(createInDb('everybooody'));
console.log(readDb());

console.log(createInDb('backstreet\'s'));
console.log(readDb());

console.log(createInDb('back'));
console.log(readDb());

console.log(createInDb('alright'));
console.log(readDb());

console.log("\nBut I wonder if there's another way in...");

// store a reference to the original db
const stolenDb = readDb();

// ... wipe the whole thing! :o
stolenDb.length = 0;

console.log("\nWhat's the first thing in the original db now?");
console.log(readDb()[0]);

console.log("\nWait, what?? Let's look at the whole db");
console.log(readDb());

// Storing it in a variable is optional.
// We could also do this:
console.log('\nHAXXXXX! Use the read function to write things!');
readDb()[0] = `
                              8b.
                              888b
                              8888b
                              88888b
                              888888b
                            .d88888888b.__
                      _.od888888888888888888boo..._
                  .od8888888888888888888888888888888booo.._
               .od888888888888888888888888888888888888888888)
             .d888P'    "Y88888888888888888888(_   _ )888P"'
           .d8888Poo.     \`Y88888888888888888P-.\`-\`@'.-'""-.
  .oooooood8888888P""'      \`"Y8888888P.d888P   \`---'"""".-'
d888888888'888P'  _...-----..__      'd88888__...------'
\`""Y88888'8888|-'              \`----'|88888P
        \`Y8888b                       Y888P
         888888b                       \`"'
          Y88888
   jgs/VK  \`Y88P
             YP
`;

console.log("\nWhat's in the original db now?");
console.log(readDb()[0]);

// https://xkcd.com/327/
// https://xkcd.com/1354/
