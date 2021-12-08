const readlineSync = require("readline-sync")
const name = readlineSync.question("What's your name? \n")
console.log("Hi " + name + " nice to meet you! \n")

// Part 2: Age 

const age = readlineSync.question('What is you age? \n')
console.log('Looks like your age is ' + age)