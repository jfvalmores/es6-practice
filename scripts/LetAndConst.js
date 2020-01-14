// LET AND CONST

// if (false) {
//   let example = 5;
// }

// console.log(example);

function doExample() {
  var a;

  for (let i = 0; i < 10; i++) {
    a = i + 5;
  }

  console.log(a);
}
doExample();

const example = {};
example.firstName = 'Justine';
console.log(example);
