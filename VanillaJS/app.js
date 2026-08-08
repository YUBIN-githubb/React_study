const a = 3;
let b = 5;

b = 7;

console.log(a);
console.log(b);

const c = null;
let d;
console.log(c);
console.log(d);

// Getting
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(daysOfWeek[0]);

// Pushing
daysOfWeek.push('Sun');
console.log(daysOfWeek);

const player = {
    name: 'Yubin',
    points: 10,
    fat: true,
    10: 'hello',
    sayHi: function() {
        console.log('hi');
    }
};

console.log(player.name);
console.log(player['name']);
console.log(player['10']);

player.today = 'Monday';
console.log(player);
// player = false;

function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

sayHello('Yubin');
player.sayHi();


const number = "10"
console.log(typeof parseInt(number));


const age = 90

if (isNaN(age) || age < 0) {
    console.log('Please write a real positive number');
} else if (age < 18) {
    console.log('You are too young');
} else if (age >= 18 && age <= 50) {
    console.log('You can drink');
} else if (age > 50 && age <= 80) {
    console.log('You should exercise');
} else {
    console.log('You can do whatever you want');
}
