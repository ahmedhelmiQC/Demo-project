
const username = "ahmed helmi";
const count = 3;

const stringWithConcat = "logging as " + username + " with " + count; 
const stringWithTemplate = `logging as ${username} with ${count}`;

console.log(stringWithTemplate);