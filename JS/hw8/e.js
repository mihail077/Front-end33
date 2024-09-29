// п.1 квадрат числа 

let n = Number(prompt ('enter number'))

function squareNumber(n) {
    let result = n * n
    console.log('Square of', n, 'is: ', result);
    return result
}
squareNumber(n)

console.log('-----------------------');

// п.2 степінь числа

let num1 = Number(prompt('enter number1'))
let num2 = Number(prompt('enter number2'))

function power(num1, num2) {
    let result = num1 ** num2
    console.log('result of exponentiation: ' ,result);
    return result
}
power(num1, num2)

console.log('------------------------');

// п.3 калькулятор

let num3 = +prompt('enter number1')
let action = prompt('enter action: +, -, *, /')
let num4 = +prompt('enter number2')

function calc(num3, action, num4) {
    function plus () {return num3 + num4}
    function minus () {return num3 - num4}
    function multiply () {return num3 * num4}
    function divide () {return num3 / num4}

    switch (action) {
        case '+':
            return plus();
        case '-':
            return minus();
        case '*':
            return multiply();
        case '/':
            return divide();
        default:
            return 0
    }
}
let result1 = calc(num3, action, num4)
console.log ('calculation result: ' ,result1);

console.log('--------------------------');

// п.4 заокругленя дробових чисел

function rounding(num) {
    let text = num + '';
    let integer = '';
    let decimal = '';
    let isDecimal = false;

    for (let index = 0; index < text.length; index++) {
        let value = text[index];
        console.log(value);

        if (value === '.') {
            isDecimal = true;
            continue; 
        } else if (isDecimal) {
            decimal += value;
        } else { 
            integer += value;
        }
    }
    console.log("rounding result:" + integer);
}
rounding(7.3);

console.log('--------------------------');

// п.5 повернення масиву

function duplicateValues(array) {
    let duplicatedArray = [];
    
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        let found = false;

        for (let j = 0; j < i; j++) {
            if (array[j] === value) {
                found = true;
                break;
            }
        }
        if (found) {
            duplicatedArray[duplicatedArray.length] = value;
        }
    }
    return duplicatedArray;
}

let array = [1, 2, 3, 4, 2, 5, 6, 3, 7, 1, 10, 1];
console.log('array to check:', array);
console.log("duplikated array:", duplicateValues(array));



