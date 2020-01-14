// DESTRUCTURING OBJECTS

const personalInfo = {
  firstName: 'Justine',
  lastName: 'Valmores',
  city: 'Cebu',
  country: 'Philippines',
  zipCode: '6000'
};

const {firstName: fn, lastName: ln} = personalInfo;
console.log(`${fn} ${ln}`);
