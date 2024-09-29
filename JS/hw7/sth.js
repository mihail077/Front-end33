// п.1 обчислення факторіалу числа

function calculateFactorial(n) {

    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log('factorial ' + n + ' is:' + factorial);
}
calculateFactorial(5)

console.log('---------------------');

// п.2 підрахунок кількості ,букв у рядку

let sym = prompt('enter text')
countSymb(sym)

function countSymb(sym) {
    let count = 0;
    for (let index = 0; index < sym.length; index++) {
        if ((sym[index] >= 'a' && sym[index] <= 'z') || (sym[index] >= 'A' && sym[index] <= 'Z')) {
            count++;
        }
    }
    console.log(count); 
}

console.log('----------------------');

// п.3 визначення простого числа

function isPrime(number) {
    return Number.isInteger(number);
}
console.log(isPrime(1.2));

console.log('----------------------');

// п.4 запит на пароль


function passwordPrompt() {

    let password1 = prompt('enter password')
    let password2 = prompt('repeat password')

    if (password1 == password2) {
       console.log('успіх'); 
    } else {
        console.log('невдача');
    }
}
passwordPrompt()

console.log('-----------------------');

// п.5 факторіал чисел в діапазоні

let num1 = +prompt("enter start range");
let num2 = +prompt("enter end range");

function factorialRange(num1, num2) {
    let result = {};
    let factorial = 1;
    for (let i = num1; i <= num2; i++) {
        factorial *= i;
        result[i] = factorial;
    }
    return result;
}

let result = factorialRange(num1, num2);
console.log(result);

console.log('---------------------');

// п.6 калькулятор

let num3 = +prompt('enter number1')
let action = prompt('enter action: +, -, *, /')
let num4 = +prompt('enter number2')

function calc(num3, action, num4) {
    if (action == '+') {
        return num3 + num4
    } else if (action == '-') {
        return num3 - num4
    } else if (action == '*') {
        return num3 * num4
    } else if (action == '/') {
        return num3 / num4
    } else {
        return 0
    }
}
let result1 = calc(num3, action, num4)
console.log (result1);



