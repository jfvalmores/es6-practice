// DEFAULT PARAMS

function add(numArray = [1, 2, 3]) {
  let total = 0;
  numArray.forEach(element => {
    total += element;
  });
  console.log(total);
}

add();
