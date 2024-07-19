'use strict'

// const myMap = new Map();
// myMap.set('firstname', 'Ulugbek');
// myMap.set('lastname', 'Samigjonov');
// myMap.set('age', 25);
// console.log(myMap.get('firstname'));
// myMap.set('job', 'Software Engineer');
// console.log(myMap.get('job'));
// console.log(myMap.size);
// myMap.delete('lastname');
// console.log(myMap.size);


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
// console.log(mySet.has(10)); // false;

// const mySet = new Map();

//first name last name password by prompt 

// console.log(myMap.get('pasword'));

// const logIn = (myMap) => {
//     if (myMap.get('pasword') !== 123) {
//         console.log("JOHA");
//     } else {
//         console.log('Menam boray');
//     }
// }    

// console.log(myMap);

// const i = undefined;
// console.log(i ?? "JOHA HAROMU");

// const subject = undefined;
// const emailSubject = subject ?? 'A default subject';
// console.log(emailSubject);

// if (myMap.get("username") === '') {
//     myMap.set("username", "Olim");
// } if (myMap.get("lastname") === '') {
//     myMap.set("lastname", "Olimovich");
// } if (myMap.get("pasword") === '') {
//     myMap.set("pasword", "1234")
// }
// console.log(myMap);



// function defaultUsernamePasword (username, lastname ,password) {
//     if (username ==='') {
//         myMap.set("username", "Olim");
//     } if (lastname === '') {
//         myMap.set("lastname", "Olimovich");
//     } if (password === '') {
//         myMap.set("pasword", "12345");
//     }
// };
// defaultUsernamePasword(myMap.get("username"), myMap.get("lastname"), myMap.get("pasword"));
// console.log(myMap);


const myMap = new Map();
myMap.set("username", prompt("Your name:"));
myMap.set("lastname", prompt("Your familiya:"));
myMap.set("pasword", prompt("Your pasword:"));

const defaultName = myMap.get("username") || myMap.set("username", "Olim");
const defaultLastName = myMap.get("lastname") || myMap.set("lastname", "Olimovich");
const defaultPasword = myMap.get("pasword") || myMap.set("pasword", "1234")

console.log(myMap);

