// padStart and padEnd

let name = 'Francis';

console.log(name.padStart(10, '0'));
console.log(name.padEnd(10, '0'));

let mimi = 'Mimiy';
mimi = `${mimi.padEnd(8, 'u')}h`;
console.log(mimi);
