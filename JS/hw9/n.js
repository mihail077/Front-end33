//  ////  forEach  ////

// п.1 парні числа 

let numbers = [];

for (let i = 20; i <= 32; i++) {
    numbers.push(i);
}
console.log(numbers);

numbers.forEach(function(number) {
    if (number % 2 === 0) {
        console.log(number);
    }
});

console.log('--------------------');

// п.2 тип даних масиву 

let arrList = ['apple' ,'green', 'Myhailo', 7, 42]
console.log(arrList);
arrList.forEach(element => {
    console.log(element, typeof element);
});

console.log('-------------------');

// п.3 непарні числа

let numbers1 = [];

for (let i = 17; i <= 39; i++) {
    numbers1.push(i);
}
console.log(numbers1);

numbers1.forEach(function(number) {
    if (number % 2 === 1) {
        console.log(number);
    }
});

console.log('--------------------');

// п.4 парні елементи масиву

let arrayList = [1, 5, true, 'hello', false, null, 'iiii', 54, null]
console.log(arrayList);

arrayList.forEach (function (element,index) {
    if (index % 2 == 0) {
        console.log(element);
    }
})

console.log('------------------');

// п.5 непарні елементи масиву 

let arrayList1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null]
console.log(arrayList1);

arrayList1.forEach (function (element,index) {
    if (index % 2 == 1) {
        console.log(element);
    }
})

console.log('------------------');

// п.6 сума елементів масиву

let = arrayList2 = [1, 2, 4, 2, 3, 55, 66, 777, 12]
console.log(arrayList2);

let sum = 0

arrayList2.forEach(function (element) {
    sum += element
})
console.log(sum);

console.log('----------------');

// п.7 перемноження елементів масиву 

let = arrayList3 = [1, 2, 4, 2, 3, 5, 6, 7, 1]
console.log(arrayList3);

let sum1 = 1

arrayList3.forEach(function (element) {
    sum1 *= element
})
console.log(sum1);

console.log('----------------');

// п.8 ітерація чисел 

let array = +prompt('enter number')

let arrayNumbers = [];

for (let i = 0; i <=array; i++) {
    arrayNumbers.push(i)
}

arrayNumbers.forEach(function(number) { 
     if (number >= 100) {
        return;
    } else if (number >= 5 && number <= 10) {
        return; 
    }
    console.log(number);
});

console.log('----------------');

// ////  Math  ////

// п.9 заокруглення до меншого числа

function roundingNumber (num) {
    return Math.floor (num)
}
console.log(roundingNumber(1.74));
console.log(roundingNumber(55.43));

console.log('---------------------');

// п.10 заокруглення до більшого числа

function roundingNumber1 (num) {
    return Math.ceil (num)
}
console.log(roundingNumber1(7.34));
console.log(roundingNumber1(25.63));

console.log('--------------------');

// п.11 рандомне число

function randomNumber () {
    return Math.random() * 1000
}
console.log(randomNumber());

console.log('-------------------');

// п.12 степінь числа 

function numberPower(x, y) {
    return Math.pow(x, y)
}
console.log(numberPower(10, 3));

console.log('------------------');

// п.13 корінь числа та заокруглення 

function rootNumber(number) {
    return Math.round(Math.sqrt(number))
}
console.log(rootNumber(53));

console.log('------------------');

// //// методи масивів ////

// п.14 додавання в кінець масиву

let arr = [1, 5, true]
console.log(arr);
arr.push('hello')
console.log(arr);

console.log('------------------');

// п.15 додавання в початок масиву

let arr1 = [1, 5, true]
console.log(arr1);
arr1.unshift('HelloArray')
console.log(arr1);

console.log('-----------------');

// п.16 видалення останього елменту 

let arr2 = [1, 5, true]
console.log(arr2);
arr2.pop()
console.log(arr2);

console.log('----------------');

// п.17 видалення першого елементу 

let arr3 = [1, 5, true]
console.log(arr3);
arr3.shift()
console.log(arr3);

console.log('---------------');

// п.18 вирізання в новий масив 

let arr4 = [5, true, 'hello', false, null, 5]
console.log(arr4);
let newArr = arr4.slice(1, 5)
console.log(newArr);

console.log('---------------');

// п.19 вирізання

let arr5 = [5, true, 'hello', false, null, 5]
console.log(arr5);
arr5.splice(1, 4)
console.log(arr5);

console.log('---------------');

// п.20 вирізання та вставляння 

let arr6 = [5, true, 'hello', false, null, 5]
console.log(arr6);
arr6.splice(1, 4, 10, 100, 111, 222)
console.log(arr6);