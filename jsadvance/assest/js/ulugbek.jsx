'use strict'

// // 2 - DARS DESTRUCTION, SPREAD, REST OPERATORLARI

// //Destructuring 
// const nums = [10, 15, 20, 25];

// const [num1, num2] = nums;
// console.log(num1, num2);

// const [firstValue, ...otherValue] = nums;
// console.log(firstValue);
// console.log(otherValue);

// //object

// const person = {
//     ism: 'Jahongir',
//     age: 16,
//     familiya: 'Holmirzaev'
// };

// const { ism, age } = person;
// console.log(ism, age);

// const {ism, ...other} = person;
// console.log(ism);
// console.log(other);

// // rest operatori
// const total = (...numbers) => {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(total(10, 15, 20));

// // rest operatori
// const total = (...numbers) => {
//     return numbers.reduce((acc, curr) => acc + curr);
// }
// console.log(total("JOHA ", "HAROMI ", "LOHA"));

// // spread operatori
// const  numbers = [10, 15, 20];
// const max = Math.max(...numbers);
// console.log(max);

// const arr1 = [10, 15, 20];
// const arr2 = [...arr1, 25, 30];
// console.log(arr2);
// console.log(arr1);

// const person = {
//     ism: 'Jahongir',
//     age: 16,
//     familiya: 'Holmirzaev'
// };
// const allPerson = {...person, job: "Cola", color: "BlackJoha"};
// console.log(allPerson);

// //

// // 3 - DARS Shortcirut, Nullish va Optional chaning
// // Shortcirut
// console.log(true || false);
// console.log(10 || "Joha");
// console.log('' || "Joha");
// console.log(true || 0);

// const person = {
//     ism: "Joha",
//     age: 25
// };
// console.log(person.job || "Olim");

// console.log(true && false);
// console.log(10 && "Joha");
// console.log('' && "Joha");
// console.log(true && null);

// const person = {
//     ism: "Joha",
//     age: 25
// };
// console.log(person.job && "Olim");

// console.log(true || false && true || false  && false);

// Nulish (??)
// const subject = '';
// const emailSubject = subject ?? 'A default subject';
// console.log(emailSubject );

// const person = {
// name: 'Ulugbek',
// age: 25
// };
// const companyName = person.job?.companyName;
// console.log(companyName);
// console.log(person.study?.());

// const arr = [1,6.2,3,4,5,6];
// const [num1, ...num3] = arr;

// console.log(num3);

// OPTIONAL CHANING (?.)
// const person = {
//     ism: "Joha",
//     age: 25,
// };

// const companyName = person.job?.companyName;
// console.log(companyName);
// console.log(person.study?.());

// // 


// // 4 - DARS Maps Sets

// const myMap = new Map(); // map yaratepmiz
// myMap.set('firstname', 'Ulugbek'); // (set) mapimizga element qoshadi
// myMap.set('lastname', 'Samigjonov');
// myMap.set('age', 25);
// console.log(myMap.get('firstname'));
// myMap.set('job', 'Software Engineer');
// console.log(myMap.get('job')); // (get) mapdi ichidagi k - value tanlab oladi
// console.log(myMap.size); // (size) mapdi uzunligini aniqlab beradi
// myMap.delete('lastname'); // (delete) mapdi hosasini uchirib tashidi
// console.log(myMap.size);

// const myMap = new Map();
// myMap['firstname'] = 'Ulugbek';
// myMap['lastname'] = 'Samigjonov';

// console.log(myMap);
// console.log(myMap.has("firstname"));
// myMap.delete("firstname");
// console.log(myMap);

// // sets 
// const mySet = new Set();
// mySet.add(10); // Set(1) { 10 }
// mySet.add(15); // Set(2) { 10, 15 }
// mySet.add(15); // Set(2) { 10, 15 }
// mySet.add('Ulugbek'); // Set(3) { 1, 5, 'Ulugbek' }
// const person = { age: 25, job: 'Software Engineer' };
// mySet.add(person);
// console.log(mySet);
// mySet.add({ age: 25, job: 'Software Engineer' });
// console.log(mySet.has(10)); // true
// console.log(mySet.has(11)); // false
// console.log(mySet.has(person)); // true
// console.log(mySet.size); // 5
// mySet.delete(10);
// console.log(mySet.has(10)); // false

// const newSet = new Set()
// newSet.add(10);
// newSet.add(15);
// newSet.add('Ulugbek');


// // 6 - dars Event Loop
// function greet () {
//     console.log("Hello");
// }

// function respond () {
//     return setTimeout(() => {
//         console.log("JOHA");
//     }, 1000)
// }
// greet();
// respond();

// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"), 1000);
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

// var i;

// name("ksksksk");

// function name (i) {
//     console.log(i);
//     // return i;
// }
// // console.log( name("ksksksk"));

// function name (i) {
//     console.log(i);
//     // return i;
// }