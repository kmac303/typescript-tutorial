// variable can be created and then be declared
// let age : any;
// age = 25;
// alternatively, a variable can be declared/initialized in one line
var age = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);
// this essentially rips out the benefits of typescript and reverts back to how JavaScript works
var mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);
var ninja;
// ninja = { name: 25, age: 'yoshi'}
ninja = { name: 'yoshi', age: 25 };
console.log(ninja);
