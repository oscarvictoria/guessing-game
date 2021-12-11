const readlineSync = require("readline-sync");
const name = readlineSync.question("What's your name? \n");
console.log("Hi " + name + " nice to meet you! \n");

// Part 2: Age 

const birthYear = readlineSync.question('What year were you born? \n');
let age = 2021 - birthYear;
console.log(`Looks like your age is ${age}, is this correct?`);

// Part 3: Confirm age
const confirm = readlineSync.question("\n");
console.log('Great, lets continue...');