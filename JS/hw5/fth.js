let variable = 'hello';
console.log(variable, typeof variable);

console.log('-------------------');

///////  2

let someString = '100'
console.log(someString, typeof someString);
let num = Number(someString)
console.log(num, typeof num);

console.log('-------------------');

///////  3

let number = Number(prompt('enter number'))

if (number % 2 === 0) {
    console.log(number + " it's an even number");
} else {
    console.log(number + " it's not an even number.");
}

console.log('------------------');

/////  4

let number1 = Number(prompt("enter number"));

if (number1 > 0) {
    console.log(number1 + " positive number");
} else if (number1 < 0) {
    console.log(number1 + " negative number");
} else {
    console.log(number1 + " zero");
}

console.log('--------------------');

//////  5

let N = Number(prompt("enter number N:")); 

let sum = 0; 

for (let i = 1; i <= N; i++) {
    sum += i; 
}
console.log("sum of numbers from 1 to " + N + " is " + sum);

console.log('--------------------');

//////  6

let year = Number(prompt('enter year'))

if (year % 4 == 0) {
    console.log(year +' leap year');
} else {
    console.log(year + ' not a leap year');
}

console.log('-------------------');

//////  7

let num1 = Number(prompt('enter factorial number'))

 let factorial = 1;

for (let i = 1; i <= num1; i++) {
    factorial *= i;
}
console.log('factorial ' + num1 + ' is:' + factorial);

console.log('----------------------');

//////  8

let array = [5, 2, 9, 1, 7, 3, 8];
console.log(array);

let maxElement = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
        maxElement = array[i];
    }
}
console.log(maxElement);

console.log('-------------------');

//////  9

let celsius = Number(prompt("enter temperature of celsius"));

let fahrenheit = (celsius * 9/5) + 32;
console.log("temperature of fahrenheit " + fahrenheit);

let fahrenheit1 = Number(prompt("enter temperature of fahrenheit"));

let celsius1 = (fahrenheit - 32) * 5/9;
console.log("temperature of celsius " + celsius1);

console.log('-------------------');

/////  10

let month = Number(prompt("enter number of month (1-12): "));
let days

    switch (month) {
        case 1:
            days = 31;
            break;
        case 2:
            days = 28; 
            break;
        case 3:
            days = 31;
            break;
        case 4:
            days = 30;
             break;
        case 5:
            days = 31;
            break;
        case 6:
            days = 30;
            break;
        case 7:
            days = 31;
            break;
        case 8:
            days = 31;
            break;
        case 9:
            days = 30;
            break;
        case 10:
            days = 31;
            break;
        case 11:
            days = 30;
            break;
        case 12:
            days = 31;
            break;
        default:
            days = 'error';
            break;
    }
    console.log(days);

    console.log('----------------');

/////  11

let start = prompt('enter number')
let end = prompt('enter number')

console.log('prime numbers of range from ' + start + ' to ' + end);

for (let num = start; num <= end; num++) {
        let isPrime = num > 1;
    for (let i = 2; isPrime && i < num; i++) {
        isPrime = num % i !== 0;
    }
    if (isPrime) {
        console.log(num);
    }
}

console.log('------------------');

/////  12

let text = prompt('enter text')
let vowels = 0;

 for (let i of text) {
    switch (i) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            vowels++;
            break;
        default:
    }
}
console.log("number of vowels:", vowels);

    console.log('-------------------');

//////  13

    let number2 = prompt('enter number')

if (number2 > 0 && (number2 & (number2 - 1)) === 0) {
    console.log(number2 + " - is a power of two");
} else {
    console.log(number2 + " - is not a power of two");
}

console.log('--------------------');

//////  14

let number3 = (prompt("enter number"));

let sum1 = 0;

for (let i = 0; i < number3.length; i++) {
    sum1 += Number(number3[i]);
}
console.log("sum of numbers:", sum1);

console.log('--------------------');

/////  15

let Minutes = Number(prompt('enter the number of minutes'))

let hours = Math.floor(Minutes / 60);
let minutes = Minutes % 60;

console.log("time is: "  + hours, "hour", minutes, "minutes")












       



