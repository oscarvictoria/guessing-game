const readlineSync = require("readline-sync");
const name = readlineSync.question("What's your name? \n");
const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
console.log("Hi " + capitalizedName + " nice to meet you! \n");

// Part 2: Age 

const birthYear = readlineSync.question('What year were you born? \n');
let age = 2022 - birthYear;
console.log(`Looks like your age is ${age}, is this correct?\n`);

// Part 3: Confirm age
const confirm = readlineSync.keyInYN('Y or N');
console.log('Great');



