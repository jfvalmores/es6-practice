// SETS

const exampleSet = new Set([1, 1, 1, 1, 1, 2, 2, 3, 3, 3]);

exampleSet.add(4);
exampleSet.add(4);
exampleSet.add(5).add(42);

console.log(exampleSet);
console.log(exampleSet.size);
console.log(exampleSet.has(42));
console.log(exampleSet.delete(42));
console.log(exampleSet);
exampleSet.clear();
console.log(exampleSet);
