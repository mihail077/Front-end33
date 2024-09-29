// функціі:

// //
function summ(n1, n2) {
    return n1 + n2
}
console.log(summ(10, 10)); 

console.log('-------------');

// //
function palindrome(str) {
    let str1 = str.replace(/\s/g, '').toLowerCase();
   
 let reversedStr = ''
for (let i = str1.length - 1; i >= 0; i--) {
    reversedStr += str1[i]
} 
if (str1 == reversedStr) {
    return str1 + ':' + ' palindrome'
} else {
    return str1 + ':' + ' not palindrome'
}   
}   
console.log(palindrome('race fast safe car'))
console.log(palindrome('level'))
console.log(palindrome('hello world'))
console.log(palindrome('330'))
console.log(palindrome('1105011'))

console.log('-------------');

// методи масивів:

// //
let arrayRandom = [5, 'hello', 'true', 44, 'false', 10, 'null']
console.log(arrayRandom,'original array');

arrayRandom.push('end')
console.log(arrayRandom, 'push method');

arrayRandom.pop()
console.log(arrayRandom, 'pop method');

console.log('------------');
// //
let arrayRandom1 = ['start', 3, 'hello', 'true', 22, 'false', 'null', 100, 'bye']
console.log(arrayRandom1, 'original array');

arrayRandom1.shift()
console.log(arrayRandom1, 'shift method');

arrayRandom1.unshift('xxx')
console.log(arrayRandom1, 'unshift method');

let arrayRandom2 = arrayRandom1.slice(2, 6)
console.log(arrayRandom2, 'slice method');

console.log('-------------------');
// //
let arrayRandom3 = ['start', 3, 'hello', 'true', 22, 'false', 'null', 100, 'bye']
console.log(arrayRandom3, 'original array');

arrayRandom3.splice(2, 5)
console.log(arrayRandom3, 'splice method');

console.log('------------------');

// метод forEach:

// //
let users = [
    { name: 'Petro', age: 30 },
    { name: 'Vasyl', age: 25 },
    { name: 'Anna', age: 20 }
  ];
  
  users.forEach(function(user) {
    console.log(user.name, user.age);
  });
  

