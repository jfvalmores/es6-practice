// CLASSES

// animal.js
export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }

  makeNoise(sound = 'Yeyeyeyeyey') {
    console.log(`${this.type} says, "${sound}"`);
  }

  static saySomething() {
    console.log('something...');
  }
}

export class Cat extends Animal {
  constructor(legs) {
    super('Cat', legs);
  }

  makeNoise(sound = 'meow') {
    console.log(`Cat says, "${sound}"`);
  }
}

// index.js
import {Animal, Cat} from './animal.js';

let dog = new Animal('Dog', 4);

dog.legs = 3;
dog.makeNoise();
Animal.saySomething();

console.log(dog);
console.log(dog.metaData);

let cat = new Cat(4);
cat.makeNoise();
