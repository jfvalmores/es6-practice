// STRINGS

let word1 = 'Justine';
let word2 = 'Francis';

const fullName = word1 + ' ' + word2;
console.log(fullName);

const fullName2 = `${word1} ${word2}`;
console.log(fullName2);

let num1 = 2;
let num2 = 3;

const sum = `${num1 + num2}`;
console.log(sum);

let example = 'Hello \n' + 'world';
console.log(example);
document.getElementById('example').innerText = example;

let example2 = `${word1}
${word2}
`;
console.log(example2);
document.getElementById('example').innerText = example2;
