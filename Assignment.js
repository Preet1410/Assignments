let sureshmass = 75;
let sureshheight = 1.75;

let rameshmass = 85;
let rameshheight = 1.80;

let sureshbmi = sureshmass / (sureshheight ** 2);
let rameshbmi = rameshmass / (rameshheight ** 2);

let sureshHigherBMI = sureshbmi > rameshbmi;

console.log("Suresh's BMI:", sureshbmi);
console.log("Ramesh's BMI:", rameshbmi);
console.log("Does Suresh have a higher BMI than Ramesh?", sureshHigherBMI);