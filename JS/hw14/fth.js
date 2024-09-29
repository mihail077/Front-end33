// // методи масивів 

let array = [22, null, 5, 8, true, 22]
console.log(array);

console.log('------------');

// push 
array.push(100)
console.log(array);

console.log('-----------');

// pop 
array.pop()
console.log(array);

console.log('----------');

// unshift
array.unshift('hello')
console.log(array);

console.log('---------');

// shift 
array.shift()
console.log(array);

console.log('----------');

// splice 
array.splice(1, 3, 'bye', 50, false, 'xxx')
console.log(array);

console.log('--------');

//slice
let arr = array.slice(1, 4)
console.log(arr);

console.log('---------');

// forEach 
array.forEach((el, ind, arr) => console.log(el, ind, arr));

console.log('--------');

// find 

let found = array.find((_, ind) => ind == 4)
console.log(found);

console.log('---------');

// filter
let filtered = array.filter(el => typeof el === 'number' || typeof el === 'string')
console.log(filtered);

console.log('----------');

// some 
let someFifty = array.some(el => el == 50)
console.log(someFifty);

console.log('-----------');

// every
let everyFifty = array.every(el => el == 50)
console.log(everyFifty);

console.log('-----------');

// indexOf
let array1 = [22, 3, 4, 8, 22, 10, 5, 33]
console.log(array1);

console.log(array1.indexOf(22), ' -index 22');

console.log('-----------');

// lastIndexOf
console.log(array1.lastIndexOf(22), ' -index 22');

console.log('----------');

// sort 
let sorted = array1.sort((a, b) => a - b)
console.log(sorted);

 sorted = array1.sort((a, b) => b - a)
console.log(sorted);

console.log('----------');

// reverse 
let array2 = [10, 2, 5, 77, 8, 'hello', [11,15, [500]]]
console.log(array2);

console.log(array2.reverse());

console.log('----------');

// flat 
console.log(array2.flat(Infinity));

console.log('-----------');

// includes
console.log(array2.includes(5));
console.log(array2.includes(555));

console.log('------------');

console.log(array2.join());

console.log('--------');

// concat
console.log(array2.concat(array1));

console.log('-----------');

// findIdex
console.log(array1);
let find = array1.findIndex(el => el === 10)
console.log(find, ' -index 10');

console.log('-----------');

// map 
console.log(array1);
let mapArr = array1.map((el,ind) => {
    if (ind > 3) {
        return el * 2
             
    } else  {
        return el / 2
    }
})
console.log(mapArr);

console.log('----------');

// reduce 
console.log(array1);
let sum = array1.reduce((a, b) => a + b)
console.log(sum);

console.log('-----------');

// // методи стрічок 

let str = 'Hello World And Good Luck'
console.log(str);

// split
console.log(str.split(' '));

console.log('----------');

// trim
let str1 = ' Hello World And Good Luck '
console.log(str1);

console.log(str1.trim());

console.log('-----------');

// toLocaleUpperCase
console.log(str.toLocaleUpperCase());

console.log('----------');

// toLocaleLowerCase
console.log(str.toLocaleLowerCase());

console.log('---------');

// chartAt
console.log(str.charAt(6));

console.log('-------');

// chartCodeAt
console.log(str.charCodeAt(6));

console.log('---------');

// includes
console.log(str.includes('Hello'));
console.log(str.includes('bye'));

console.log('----------');

// search
console.log(str.search('And'))

console.log('----------');

// startsWith
console.log(str.startsWith('Hello'));
console.log(str.startsWith('Luck'));

console.log('---------');

// endsWith
console.log(str.endsWith('Luck'));
console.log(str.endsWith('Hello'));

console.log('----------');

// replace
console.log(str);
console.log(str.replace('Hello', 'Bye'));

console.log('----------');

// // методи чисел 

// toString
let num = 12.245
console.log(num);

console.log(num.toString());

console.log(('---------'));

// toLocalString
console.log(num.toLocaleString());

console.log('-------');

// toFixed
console.log(num.toFixed(2));

console.log('--------');

// toExpotention
console.log(num.toExponential());

console.log('----------');

// toPrecision
console.log(num.toPrecision(7));

console.log('---------');

// valueOf
console.log(num.valueOf());

console.log('----------');

// // методи об'єкта

let user = {
    name: 'John',
    age: 20,
    city: 'New York'
}
console.log(user);

// Object.keys
let keysObj = Object.keys(user)
  console.log(keysObj);

console.log('--------------');

// Object.values

let valObj = Object.values(user)
console.log(valObj);

console.log('-------------');

// Object.entries
let keyVal = Object.entries(user)
console.log(keyVal);

console.log('------------');

// Object.fromEntries
console.log(Object.fromEntries(keyVal));

console.log('------------');

// Object.create
let nObj = Object.create({}, {
    model: {value: 'fiat'},
    engine: {value: 2.0},
    year: {value: 2020},
    color: {value: 'green'},
  });
console.log(nObj);
  
console.log('-------------');

// Object.assign
let newObject = Object.assign({}, user)
  console.log(newObject);

  console.log('------------');

  let userObj =  {
    id: 55,
    val: 'xxx',
    price: 300
  }

  let newObj = Object.assign(user,userObj)
  console.log(newObj);

console.log('--------------');

// Object.freeze
let fr = Object.freeze(user)

fr.name = 'Piter'
delete fr.age
fr.num = 123456789

console.log(user);

console.log('---------');

// Object.seal

let ob = {
    a: 'hello',
    b: 100,
    c: 'xxx'
}
console.log(ob);

let sl = Object.seal(ob);

sl.a = 'world'
delete sl.b
sl.num = 123456789

console.log(ob);

console.log('--------');

// Object.isSealLed
console.log(Object.isSealed(ob));
console.log(Object.isSealed(nObj));

console.log('---------');

// Object.isFrozen
console.log(Object.isFrozen(fr));
console.log(Object.isFrozen(ob));

console.log('---------');

// hasOwnProperty
console.log(nObj.hasOwnProperty('model', 'engine', 'year', 'color'));

console.log('----------');

// Object.getOwnPropertyNames
console.log(Object.getOwnPropertyNames(nObj));

console.log('----------');

// // Math 

let numm = 7.45
console.log(numm);

console.log(Math.round(numm));

console.log(Math.floor(numm));

console.log(Math.ceil(numm));

let a = 5 
let b = 4

console.log(Math.pow(a,b));

let c = 120

console.log(Math.sqrt(c));

let randomNum = Math.floor(Math.random() * 40) + 10;
console.log(randomNum); 






