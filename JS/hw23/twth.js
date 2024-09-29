// Рівень 3.1 задачника JavaScript

// п.1 Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию

function checkNumber(number) {
    const numStr = String(number);
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] >= numStr[i + 1]) {
            return false
        }
    }
    return true
}

const number = 123456;

console.log(checkNumber(number));

// п.2 Удалите из массива все пустые строки.

let array = [1, '', 2, 3, '', 5];

let filteredArray = array.filter(item => item !== '');

console.log(filteredArray);

// п.3 Отсортируйте элементы в каждом подмассиве.

let array1 = [
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
]
let sortedArray = array1.map(innerArray => innerArray.sort((a, b) => a - b));

console.log(sortedArray);

// п.4 Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];

while (arr2.length > arr1.length) {
    arr2.pop();
}
console.log(arr2);

// Рівень 3.2 задачника JavaScript

// п.1 Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

for (let i = 10; i <= 1000; i++) {
    let num = Math.floor(i / 10)
    if (num % 2 === 0) {
        console.log(i);
    }
}

// п.2 Дан массив. Удалите из него каждый пятый элемент.

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

 let newArray = array2.filter((_, index) => (index + 1) % 5 !== 0);

console.log(newArray);

// п.3 Сделайте строку, содержащую столько нулей, сколько указано в переменной.

let num = 5

let strZero = '';

for (let i = 0; i < num; i++) {
    strZero += '0';
}
console.log(strZero);

// п.4 Удалите из этой строки каждое второе слово.

let str = 'aaa bbb ccc eee fff'

let newStr = str.split(' ');

let result = newStr.filter((_, index) => index % 2 === 0);

result = result.join(' ');

console.log(result);

// п.5 Найдите сумму элементов этого массива.

let array3 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
let sum = 0;

for (let i = 0; i < array3.length; i++) {
    for (let j = 0; j < array3[i].length; j++) {
        sum += array3[i][j];
    }
}
console.log(sum)

// Рівень 3.3 задачника JavaScript

// п.1 Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

let array4 = ['hi', "apple", "car", "world", "no"]

let newArray4 = array4.filter((word) => word.length <= 3);

console.log(newArray4);

// п.2 Проверьте, что все цифры этого числа являются нечетными.

let num1 = 1357

let checkNum = num1.toString().split("").every(el => el % 2 != 0)

console.log(checkNum);

// п.3 Проверьте, что это слово читается одинаково с любой стороны.

let word = "abcba"

let polindrom = word === word.split("").reverse().join("")

console.log(polindrom);

// п.4 Найдите сумму элементов этого массива.

let array5 = [
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
]
let sum1 = array5.flat(3).reduce((a, b) => a + b, 0)

console.log(sum1);

// Рівень 3.4 задачника JavaScript

// п.1 Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

for (let i = 10; i <= 1000; i++) {
    if (i.toString()[0] % 2 === 0) {
        console.log(i);
    }
}

// п.2 Поменяйте местами пары элементов этого массива:[1, 2, 3, 4, 5, 6] <-> [2, 1, 4, 3, 6, 5]

let array6 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array6.length - 1; i += 2) {
    let x = array6[i];
    array6[i] = array6[i + 1];
    array6[i + 1] = x;
}

console.log(array6); 

// п.3 Найдите сумму элементов этого объекта.

let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let sum2 = 0;

for (let key1 in obj) {
    for (let key2 in obj[key1]) {
        sum2 += obj[key1][key2];
    }
}
console.log(sum2);

// Рівень 3.5 задачника JavaScript

// п.1 Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

let text = "Apple orange  and avocado fruit";
let words = text.split(" ");
let wordsStartingA = words.filter(word => word.toLowerCase().startsWith('a'));
console.log(wordsStartingA)

// п.2 Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

let array7 = [2, 5, 7, 3, 10, 1, 15, 14, 20, 22]

let newArray7 = array7.filter(el => el % 5 == 0) 

console.log(newArray7);

// п.3 Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

let array8 = [1, 5, 10, 12, 20, 17, 130, 4, 50]

let numZero = array8.filter(el => el.toString().includes(0))

console.log(numZero);

// п.4 Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.

let array9 = [1, 2, 37, 5, 10, 4]

let numThree = array9.toString().includes(3)

console.log(numThree);

// п.5 Отсортируйте цифры этого числа. В нашем случае должно получится следующее:

let num2 = 35142

let sortNum = Number(num2.toString().split("").sort((a, b) => a - b).join(""))

console.log(sortNum);

// п.6 Напишите программу, которая сформирует следующую строку:'-1-2-3-4-5-'

let str1 = '-';
for (let i = 1; i <= 5; i++) {
    str1 += i + '-';
}
console.log(str1);

// п.7 Найдите сумму элементов этого объекта.

let obj1 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}

function sumObj(obj1) {
    let sum = 0;
    
    for (let key in obj1) {
        if (typeof obj1[key] === 'object') {
            sum += sumObj(obj1[key])
        } else {
            sum += obj1[key];
        }
    }
    
    return sum;
}
let total = sumObj(obj1)
console.log(total);

// Рівень 3.6 задачника JavaScript

// п.1 Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.

let array10 = [2, 3324, 5, 10, 320, 5555, 7, 43287, 0.000001]

let filteredArray10 = array10.filter(num => String(num).length <= 3);

console.log(filteredArray10);

// п.2 Проверьте, что все цифры этого числа больше нуля.

let num3 = 12345;

let checkNum3 = num3.toString().split("").every(el => el > 0)

console.log(checkNum3);

// п.3 Слейте все элементы этого массива в один массив, разбив их посимвольно:

let arr3 = [123, 456, 789]

let changedArr = arr3.join('').split('').map(Number);

console.log(changedArr);

// п.4 Найдите сумму элементов этой структуры.

let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];
let sum3 = 0;

for (let key1 in data) {
    for (let key2 in data[key1]) {
        sum3 += data[key1][key2];
    }
}
console.log(sum3);

// Рівень 3.7 задачника JavaScript

// п.1 Дана строка со словами. Отсортируйте слова в алфавитном порядке.

let str2 = "hello, world, javaScript, apple, laptop, bye"

let sortStr2 = str2.split(" ").sort()

console.log(sortStr2);

// п.2 Дано число. Получите массив делителей этого числа.

function divisors(n) {
    let divisor = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisor.push(i);
        }
    }
    return divisor;
}
let n = 20;
let divisor = divisors(n);
console.log("number divisors", n, ":", divisor);

// п.3 Даны два числа. Получите массив общих делителей этих чисел.

function twoDivisors(number1, number2) {
    let maxNumber = Math.max(number1, number2);
    let newDivisors = [];

    for (let i = 1; i <= maxNumber; i++) {
        if (number1 % i === 0 && number2 % i === 0) {
            newDivisors.push(i);
        }
    }
    return newDivisors;
}
let number1 = 20;
let number2 = 30;
let newDivisors = twoDivisors(number1, number2);
console.log("number divisors", number1, "and", number2, ":", newDivisors);

// п.4 Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

function isPrime(number3) {
    if (number3 <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number3); i++) {
        if (number3 % i === 0) {
            return false;
        }
    }
    return true;
}

let number3 = 17;

console.log(isPrime(number3));

// п.5 Через запятую написаны числа. Получите максимальное из этих чисел.

let numbersString = "5, 17, 9, 23, 42, 12, 55, 1"

let numbersArray = numbersString.split(',').map(Number);

let maxNumber = Math.max(...numbersArray);

console.log(maxNumber);

// п.6 Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

let numbers = [1, 2, 3, 4, 5, 10, 14, 22];
let result1 = [];

for (let i = 0; i < numbers.length; i++) {
    result1.push(numbers[i]);
    if (numbers[i] >= 0 && numbers[i] <= 9) {
        result1.push(numbers[i]);
    }
}
console.log(result1);

// п.7 Дана строка. Удалите из нее все гласные буквы.

function vowels(str) {
    return str.replace(/[aeiouAEIOU]/g, "");
}
let inputString = "Hello World";
let resultString = vowels(inputString);
console.log(resultString);

// п.8 Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

let str3 = "hello world";
let result2 = str3.replace(/\b(\w*)(\w)\b/g, function(_, start, lastLetter) {
    return start + lastLetter.toUpperCase();
});
console.log(result2);

// п.9 Найдите сумму элементов этой структуры.

let data1 = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];
let sum4 = 0;

for (let i = 0; i < data1.length; i++) {
    let obj = data1[i];
    for (let key in obj) {
        sum4 += obj[key].reduce((a, b) => a + b, 0);
    }
}
console.log(sum4);

// Рівень 3.8 задачника JavaScript

// п.1 Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

let arr = [3, 23, 31, 131, 33, 103, 302]

let numThree1 = arr.every(el => el.toString().includes(3))

console.log(numThree1);

// п.2 Дана строка в формате:'kebab-case' Преобразуйте ее в формат:'snake_case'

let kebabCase = 'kebab-case'

let snakeCase = kebabCase.replace(/-/g, "_").replace("kebab", "snake")

console.log(snakeCase);

// п.3 Дана строка в формате:'snake_case' Преобразуйте ее в формат:'camelCase'

function snakeCamel(str) {
    return str.replace('snake','camel').replace(/_([a-z])/g, function(_, x) {
        return x.toUpperCase();
    });
}
let str4 = 'snake_case';
let camelCaseString = snakeCamel(str4);
console.log(camelCaseString);

// п.4 Дана строка в формате:'camelCase' Преобразуйте ее в формат:'snake_case'

function camelSnake(str) {
    return str.replace("camel", "snake").replace(/[A-Z]/g, function(x) {
        return '_' + x.toLowerCase();
    });
}
let str5 = 'camelCase';
let snakeCaseString = camelSnake(str5);
console.log(snakeCaseString); 

// п.5 Сформируйте с помощью циклов следующий массив:
/*[
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
]*/

let arr4 = [];

for (let i = 0; i < 5; i++) {
    let arr = []; 
    for (let j = 0; j < 3; j++) {
        arr.push(j + 1); 
    }
    arr4.push(arr);
}
console.log(arr4);

// Рівень 3.9 задачника JavaScript

// п.1 Дана строка. Проверьте, что эта строка состоит только из цифр.

function onlyNum(str) {
    return str.split('').every(n => !isNaN(Number(n)));
}
let testStr = '12345';
console.log(onlyNum(testStr)); 

// п.2 Дана строка. Проверьте, что эта строка состоит только из четных цифр.

function evenNumbers(str) {
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i]) % 2 !== 0) {
            return false;
        }
    }
    return true;
}

let testString = '2468';
console.log(evenNumbers(testString));

// п.3 Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

function twoOrMoreZeros(arr) {
    return arr.filter(num => num.toString().split('0').length - 1 < 2);
}
let numbers1 = [100, 200, 110, 2020, 303, 400, 500];
let filteredNumbers = twoOrMoreZeros(numbers1);
console.log(filteredNumbers); 

// п.4 Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

function checkNum13() {
    
let number13 = [];

for (let i = 1; i <= 1000; i++) {
    let sumNumbers = i.toString().split('').reduce((a, n) => a + Number(n), 0);
    
    if (sumNumbers === 13) {
        number13.push(i);
    }
}
return number13
}
let result4 = checkNum13()
console.log(result4);

// п.5 Сформируйте с помощью циклов следующий массив: 
/*[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]*/

let arr5 = [];
let counter = 1;

for (let i = 0; i < 3; i++) {
    let innerArray = [];

    for (let j = 0; j < 3; j++) {
        innerArray.push(counter);
        counter++;
    }
    arr5.push(innerArray);
}
console.log(arr5);

// Рівень 3.10 задачника JavaScript

// п.1 Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

let arr6 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr6.length; i++) {
    arr6.splice(i, 0, arr6[i]);
    i++; 
}
console.log(arr6);

// п.2 Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.

let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num4 = 6;

let divisors1 = arr7.filter(el => num4 % el === 0);

console.log(divisors1);

// п.3 Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

function arrNum(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();

    let digit1 = str1.split('');
    let digit2 = str2.split('');

    let commonDigits = digit1.filter(digit => digit2.includes(digit));

    return commonDigits;
}

let num5 = 12345;
let num6 = 54321;

let commonDigits = arrNum(num5, num6);
console.log(commonDigits);

// п.4 Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

function positions3(number) {
    let numberStr = number.toString();
    let positions = [];

    let count = 0;

    for (let i = 1; i < numberStr.length - 1; i++) {
        if (numberStr[i] === '3') {
            count++;
            if (count > 1) {
                positions.push(i);
            }
        }
    }
    return positions;
}
let number4 = 123435363;
let digitPositions = positions3(number4);

console.log(digitPositions);

// п.5 Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.

function differentDigits(number) {
    let digits = number.toString().split('');
    let seen = [];

    for (let digit of digits) {
        if (seen.includes(digit)) {
            return false;
        }
        seen.push(digit);
    }
    return true;
}

function filterDifferentDigits(array) {
    return array.filter(number => differentDigits(number));
}
let numbers2 = [123, 456, 33, 789, 121, 1234, 5678, 99, 987, 1000];

let filteredNumbers1 = filterDifferentDigits(numbers2)
console.log(filteredNumbers1);

// п.6 Слейте элементы этого массива в один одномерный массив:

let arr8 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

let nArr = arr8.flat(Infinity)

console.log(nArr);