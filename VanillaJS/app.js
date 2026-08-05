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