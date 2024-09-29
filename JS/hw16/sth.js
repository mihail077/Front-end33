// // рівень 1.2

// п.1 вивести в консоль першу цифру числа 
let number = 12345;
let strNumber = number.toString();
console.log(strNumber[0]);

// п.2 вивести в консоль останню цифру числа 
let number1 = 12345;
let strNumber1 = number1.toString();
console.log(strNumber1[strNumber1.length-1])

// п.3 вивести в консоль сумму першої і останньої цифри
let number2 = 12345;
let strNumber2 = number2.toString();

let firstDigit = Number(strNumber2[0]);
let lastDigit = Number(strNumber2[strNumber2.length - 1]);

console.log(firstDigit + lastDigit);

// п.4 вивести кількість цифр в числі 
let numbe3 = 12345;
let strNumber3 = number.toString();  
let numDigits = strNumber3.length;  
console.log(numDigits); 

// п.5 перевірити чи співпадають перші цифри чисел 
let num1 = 12345
let num2 = 2345

let strNum1 = num1.toString()
let strNum2 = num2.toString()

if (strNum1 === strNum2) {
   console.log(true); 
} else {
    console.log(false);
}

console.log('---------');

// // рівень 1.3 

// п.1 якщо в рядку більше одного символа вивести в консоль передостанній 

let str = 'hello'
if (str.length > 1) {
    console.log(str.charAt(str.length - 2));
}

// п.2 перевірка ділення першого числа на друге 
let a = 5
let b = 5 
if (a / b === 1) {
    console.log(true);
} else {
    console.log(false);
}

console.log('---------');

// // рівень 1.4

// п.1 вивести в консоль всі цілі числа від 1 до 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// п.2 вивести в консоль всі цілі числа від -100 до 0
for (let i = -100; i <= 0; i++) {
    console.log(i);
}

// п.3 вивести в консоль всі цілі числа від 100 до 1
for (let i = 100; i >= 1; i--) {
    console.log(i);
}

// п.4 вивести в консоль парні числа від 1 до 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// п.5 вивести в консоль числа кратні трьом від 1 до 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

console.log('----------');

// // рівень 1.5

// п.1 знайти суму всіх цілих чисел віл 1 до 100
let summ = 0

for (let i = 1; i <= 100; i++) {
    summ += i
}
console.log(summ);

// п.2 знайти суму всіх цілих не парних чисел від 1 до 100
let sum = 0

for (let i = 1; i <= 100; i += 2) {
        sum += i
    }
console.log(sum);

// п.3 знайти суму всіх цілих парних чисел від 1 до 100
let sum1 = 0

for (let i = 2; i <= 100; i += 2) {
        sum1 += i
    }
console.log(sum1);

// п.4 знайти остаток від ділення першого числа на друге 
let n = 10
let x = 3
console.log(n % x);

// п.5 вивести в консоль всі символи рядка з кінця 
let str1 = "hello world";

for (let i = str1.length - 1; i >= 0; i--) {
    console.log(str1[i]);
}

console.log('-----------');

// // рівень 1.6

// п.1 знайти суму квадратів елементів масива 
let array = [1, 2, 3, 4, 5];
let sumOfSqr = 0;

for (let i = 0; i < array.length; i++) {
    sumOfSqr += array[i] ** 2;
}

console.log(sumOfSqr);

// п.2 знайти суму квадратних коренів елементів масива 
let array1 = [1, 2, 3, 4, 5];
let sumOfSqrt = 0;

for (let i = 0; i < array.length; i++) {
    sumOfSqrt += Math.sqrt(array[i]);
}

console.log(sumOfSqrt);

// п.3 знайти суму позитивних елементів масиву 
let array2 = [1, -2, 3, -4, 5, -6, 7];
let sum2 = 0;

for (let i = 0; i < array2.length; i++) {
  if (array2[i] > 0) {
    sum2 += array2[i];
  }
}

console.log(sum2); 

// п.4 знайти суму елементів масиву які більше 0 і менше 10
let array3 = [1, -2, 3, -4, 5, -6, 7, 10, 14, 20, 9];
let sum3 = 0;

for (let i = 0; i < array3.length; i++) {
  if (array3[i] > 0 && array3[i] < 10) {
    sum3 += array3[i];
  }
}

console.log(sum3);

console.log('---------');

// // рівень 1.7

// п.1 отримати масив літер зі стрічки 
let str2 = 'abcde'
console.log(str2.split(''));

// п.2 отримати масив цифр числа 
let num = 12345;
let arr = num.toString().split('').map(Number)
console.log(arr);

// п.3 перевернути число 
console.log(arr.reverse());

// п.4 сума цифр числа 
let sum4 = arr.reduce((a, b) => a + b)
console.log(sum4);

console.log('--------');

// // рівень 1.8

// п.1 заповнити масив числами від 1 до 10
let array4 = []
for (let index = 1; index <= 10; index++) {
    array4.push(index)
}
console.log(array4);

// п.2 заповнити масив парними числами від 1 до 100
let array5 = []
for (let index = 2; index <= 100; index += 2) {
    array5.push(index)
}
console.log(array5);

// п.3 заокруглення до одного знака в дробовій частині 
let arrNum = [1.456, 2.125, 3.32, 4.1, 5.34];
let roundNum = arrNum.map(num => Number(num.toFixed(1)));
console.log(roundNum);