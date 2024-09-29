// Напишіть функцію, яка приймає два числа в якості параметрів і повертає їх суму.

function summ(a, b) {
    return a + b 
}
console.log(summ(2, 5));

// Напишіть функцію, яка приймає рядок як параметр і повертає обернений рядок.

function reverseStr(str) {
    return str.split('').reverse().join('')  
}

let str = "hello"
console.log(reverseStr(str));

// Напишіть функцію, яка приймає масив чисел і повертає масив, в якому кожен елемент піднесений до квадрату.

let array = [1, 2, 3, 4, 5, 6, 7]

function sqrNum (array) {
    return array.map(num => num ** 2) 
}
console.log(sqrNum(array));

// Напишіть функцію, яка приймає рядок як параметр і повертає кількість голосних літер у цьому рядку.

function vowels(str) {
    let text = 0;

 for (let i of str) {
    switch (i) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            text++;
            break;
        default:
    }
}
    return text
}
console.log(vowels("hello world"));

// Напишіть функцію, яка приймає масив чисел і повертає середнє значення цих чисел.

function averageValue(array) {
    let summa = 0
    for (let i = 0; i < array.length; i++) {
        summa += array[i]
    }
    return summa / array.length
}

console.log(averageValue(array));

// Напишіть функцію, яка приймає масив рядків і повертає новий масив, в якому кожен рядок перетворений у верхній регістр.

function transformation(arr) {
    return arr.map(str => str.toUpperCase());
}
arr = ['hello', 'world']
console.log(transformation(arr));

// Напишіть функцію, яка приймає масив чисел і число, 
// а потім повертає індекс першого елемента в масиві, який дорівнює заданому числу. 
// Якщо такого елемента немає, поверніть -1.

function index(array, el) {
    return array.indexOf(el);
}

let array1 = [1, 2, 3, 5, 3, 4];
let el = 3;
let ind = index(array1, el);
console.log(ind);

// Напишіть функцію, яка приймає рядок і повертає новий рядок, 
// в якому всі слова починаються з великої літери.

function changingLetters(sentence) {
    return sentence.replace(/\b\w/g, function(str) {
        return str.toUpperCase()
    } ) 
}

let sentence = 'sentence that we are changing'
let changedLetters = changingLetters(sentence)
console.log(changedLetters);

// Напишіть функцію, яка приймає масив рядків і повертає новий масив, 
// в якому кожен рядок складається з перших трьох символів оригінального рядка.

function firstThree(aray) {
    return aray.map(str => str.slice(0, 3)) 
}

let originalAray = ["JavaScript", "Programming", "Example"]
let newAray = firstThree(originalAray)
console.log(newAray);

// Напишіть функцію, яка приймає масив чисел і повертає новий масив, 
// в якому всі додатні числа помножені на 2.

function multiply(array2) {
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] > 0) {
            array2[i] *= 2
        }
    }
     return array2
}

let array2 =[-1, 3, 0, 2, -5, -4, 2]
let result = multiply(array2)
console.log(result);