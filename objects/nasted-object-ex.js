// PART I

// Given the following nested object:
// var nestedData = {
//   innerData: {
//     order: ["first", "second", "third"],
//     snacks: ["chips", "fruit", "crackers"],
//     numberData: {
//         primeNumbers: [2,3,5,7,11],
//         fibonnaci: [1,1,2,3,5,8,13]
//     },
//     addSnack: function(snack){
//         this.snacks.push(snack);
//         return this;
//     }
//   }
// }
// 1-Using a for loop, console.log all of the numbers in the primeNumbers array.
// 2-Using a for loop, console.log all of the even Fibonnaci numbers.
// 3-Console.log the value “second” inside the order array.
// 4-Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function? (edited) 

const nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [1, 3, 5, 7, 9],
            fibonnaci: [1, 1, 2, 3, 5, 8, 13]
        },
        addSnack: function (snack) {
            this.snacks.push(snack);
            return this;
        }
    }
}

// 1

for (let i = 0; i < nestedData.innerData.numberData.primeNumbers.length; i++) {
    console.log(nestedData.innerData.numberData.primeNumbers[i])
}

// 2
let fibArray = nestedData.innerData.numberData.fibonnaci

for (let i = 0; i < fibArray.length; i++) {
    if (fibArray[i] % 2 === 0) {
        console.log(fibArray[i])
    }
}

// 3

console.log(nestedData.innerData.order[1])

// 4


 /* addSnack: function (snack) {
            console.log("WHAT IS THIS?", this)
            this.snacks.push(snack);
            return this;
        } .   */



// NESTED OBJECT PART 2


// Given the following nested object:
// var nestedObject = {
//   speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
//   data: {
//     continents: {
//       europe: {
//         countries: {
//           switzerland: {
//             capital: "Bern",
//             population: 8000000
//           }
//         }
//       }
//     },
//     languages: {
//       spanish: {
//           hello: "Hola"
//       },
//       french: {
//           hello: "Bonjour"
//       }
//     }
//   }
// }
// 1-Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you’d like.
// 2-Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of “hello” and a value of however you spell “hello” in the language you add.
// 3-Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of “capital” and “population” and their respective values.




const nestedObject = {
    speakers: [{
        name: "Elie"
    }, {
        name: "Tim"
    }, {
        name: "Matt"
    }],
    data: {
        continents: {
            europe: {
                countries: {
                    switzerland: {
                        capital: "Bern",
                        population: 8000000
                    }
                }
            }
        },
        languages: {
            spanish: {
                hello: "Hola"
            },
            french: {
                hello: "Bonjour"
            }
        }
    }
}


function addSpeaker(speakerName) {
    nestedObject.speakers.push({
        name: speakerName
    })
}

function addLanguage(language, helloInLanguage) {
    nestedObject.data.languages[language] = {
        hello: helloInLanguage
    }
}

function addCountry(name, capital, population) {
    nestedObject.data.continents.europe.countries[name] = {
        capital: capital,
        population: population
    }
}
