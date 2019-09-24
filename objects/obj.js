const person = {
    name: {
        first: 'Ali',
        last: 'Doe',
        randomName: function () {
            return 'Hi I am function inside an object inside an object'
        },
    },
    age: 30,
    city: 'Berlin',
    Hobby: ['Cooking', 'Swimming'],
    greeting: function () {
        return `Hi! I'm ${this.name.first},
         i live in ${this.city}, ${this.name.randomName()}.`;
    },
    sum: function (x, y) {
        return x + y
    }
};
person['myFunction'] = () => {

};
person.greeting()
let myBooks = [{
        title: 'Cooking book',
        author: 'Hadi',
        read: true
    }, {
        title: 'Cool book',
        author: 'Ali',
        read: true
    }

]
myBooks[0]['title']



var books = [{
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
];


//console.log(this.age); // un
console.log(person.greeting());


const BookInfo = new Object();

BookInfo.last = 'Hadi';
BookInfo.first = 'Ali';
BookInfo['age'] = 30;