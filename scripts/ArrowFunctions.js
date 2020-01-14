// ARROW FUNCTIONS

function add(...nums) {
  // let total = nums.reduce(function(x, y) {
  //   return x + y;
  // });
  let total = nums.reduce((x, y) => x + y);

  console.log(total);
}

add(1, 2, 3, 4, 5, 6, 7, 8);
