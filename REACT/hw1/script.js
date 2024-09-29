
// const Hello = require('../hw1/script2')

// import { HELLO } from '../hw1/script2';
// import HELLO from '../hw1/script2'

// console.log(333);

// let a = 1
// let b = 4

// console.log(a+b);
// console.log(globalThis);
// console.log(Hello);


fetch('http://localhost:5000/')
.then (d => d.json())
.then( d => console.log(d))

fetch('http://localhost:5000/data', {method: 'POST'}).then(d => d.json()).then(d => console.log(d))