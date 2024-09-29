// Виконати по 1 підрівні з цілого задачника в 10 рівнів, наприклад:
// на рівні 1 виконати підрівень 1.4, а на рівні 2 підріень 2.4 ітд

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

// // рівень 2.9

// п.1 Знайти суму пар цифр цього числа 123456. В нашему випадку мається на увазі: 12 + 34 + 56

const number = 123456;
const numberString = String(number);
let result = 0;

for (let i = 0; i < numberString.length; i += 2) {
    const pair = Number(numberString[i] + numberString[i + 1]);
    result += pair;
}

console.log(result);


// п.2 Вивести в консоль елементи  массива в зворотньому  порядку

let array = [1, 2, 3, 4, 5]

console.log(array.reverse());

console.log('-------------');

// // рівень 3.4

// п.1 Вивести в консоль всі числа в проміжку от 10 до 1000, у яких перша цифра четная.

for (let i = 10; i <= 1000; i++) {
    if (i.toString()[0] % 2 === 0) {
        console.log(i);
    }
}

// п.2 Поміняти місцями пары элементів цього массива:[1, 2, 3, 4, 5, 6] <-> [2, 1, 4, 3, 6, 5]

let array6 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array6.length - 1; i += 2) {
    let x = array6[i];
    array6[i] = array6[i + 1];
    array6[i + 1] = x;
}

console.log(array6); 

// п.3 Знайти сумму елементів цього объекта.

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

console.log('---------');

// // рівень 4.7

// п.1 зробити функцію, яка параметром буде приймати текст зі словами, а повертать 
// текст, в якому ці слова будут відсортовані в алфавытному порядку.

let text = ['hello', 'abc', 'world', 'bye' ]

function sortText(text) {
    console.log(text.sort());
}
sortText(text)

// п.2 зробити функцію, яка параметром буде приймати два масива і повертать масив їх спільних елементів.

let arr1 = [1, 3, 5, 7, 9]
let arr2 = [2, 3, 5, 4, 9]

function elements(arr1, arr2) {
        return arr1.filter(element => arr2.includes(element));
    }
    let commonElements = elements(arr1, arr2);
    console.log(commonElements)

// п.3 Сделайте функцию, которая будет возвращать случайное число. 
// Функция не должна возвращать одно и тоже число два раза подряд.

let lastNum = null

function randomNumber() {
    let randomNum = Math.round(Math.random()*100)
    while (randomNum === lastNum) {
        randomNum = Math.floor(Math.random() * 100)
    }
    lastNum = randomNum
    return randomNum
}
console.log(randomNumber());

// п.4 Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:
// let arr = [1, 2, 3, 4, 5];
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1

function nextElement(arr, elem) {
    let index = arr.findIndex(e => e === elem);
    
    if (index === -1) {
        return undefined;
    }
        return arr[(index + 1) % arr.length];
}
let arr = [1, 2, 3, 4, 5];

console.log(nextElement(arr, 1))
console.log(nextElement(arr, 4))
console.log(nextElement(arr, 5))

console.log('----------------');

// // рівень 5.2

// п.1 Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.

function sumNumbers() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    document.getElementById('result').innerText = 'sum of numbers from 1 to 100: ' + sum;
}

// п.2 Дана кнопка и два инпута. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел.

const input1 = document.getElementById('number1')
const input2 = document.getElementById('number2')

function sumInputs() {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    const sum = num1 + num2
    alert('sum of numbers: ' + sum)
}

// п.3 Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.

const sumParagraphs = document.getElementById('sumParagraphs');
const resultDiv = document.getElementById('resultDiv');
const paragraphs = document.getElementsByTagName('p');
    
    sumParagraphs.addEventListener('click', () => {
            
        const count = paragraphs.length;
            
        resultDiv.textContent = `sum of paragraphs: ${count}`;
    });

    // п.4 Дана кнопка и инпут. В инпут вводится строка. По нажатию на кнопку определите,
    // сколько символов в введенной строке.

    const button = document.getElementById('sumCharacters');
        const input = document.getElementById('inputText');
        
        button.addEventListener('click', () => {
            const inputValue = input.value;
            
            const count = inputValue.length;
            alert('sum of characters: ' + count)
        });

// // рівень 6.8

// п.1 Дана таблица. По клику на ячейку, если нажата клавиша Shift, 
// красьте ячейку в красный цвет, а если клавиша Ctrl, то в зеленый.

const cells = document.querySelectorAll('td');
        
        cells.forEach(cell => {
            cell.addEventListener('click', (event) => {
                if (event.shiftKey) {
                    cell.style.backgroundColor = 'red';
                } else if (event.ctrlKey) {
                    cell.style.backgroundColor = 'green';
                }
            });
        });

// п.2 Дан див и кнопка. По первому клику на кнопку покажите див, а по второму клику - спрячьте.

const but = document.getElementById('toggleButton');
        const div = document.getElementById('toggleDiv');
        
        but.addEventListener('click', () => {
            if (div.style.display === 'none' ) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });

// // рівень 7.7

// п.1 Дан массив с числами. Подсчитайте общее количество цифр 3 во всех числах данного массива.

function countNumbers(numbers) {
    let count = 0;
    numbers.forEach(number => {
        count += number.toString().split('').filter(digit => digit === '3').length;
    });
    return count;
}
const numbers = [3, 33, 453, 789, 301];
const resultNumbers = countNumbers(numbers);
console.log("number of digits three:", resultNumbers);

// п.2 Напишите программу, которая сформирует следующий массив:
// [
// 	'1',
// 	'12',
// 	'123',
// 	'1234',
// 	'12345',
// ]

function generateArray() {
    const result = [];
    let str = '';
    for (let i = 1; i <= 5; i++) {
        str += i.toString();
        result.push(str);
    }
    return result;
}
const resultArray = generateArray();
console.log(resultArray);

// п.3 Дан массив:

// let affairs = [
// 	{
// 		date:  '2019-12-29',
// 		event: 'name1',
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name2',
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name3',
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name4',
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name5',
// 	},
// 	{
// 		date:  '2019-12-31',
// 		event: 'name6',
// 	},
// 	{
// 		date:  '2019-12-29',
// 		event: 'name7',
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name8',
// 	},
// 	{
// 		date:  '2019-12-30',
// 		event: 'name9',
// 	},
// ]
// Получите из этого массива уникальные даты, то есть вот так:

['2019-12-29', '2019-12-30', '2019-12-31']

let affairs = [
    { date: '2019-12-29', event: 'name1' },
    { date: '2019-12-31', event: 'name2' },
    { date: '2019-12-29', event: 'name3' },
    { date: '2019-12-30', event: 'name4' },
    { date: '2019-12-29', event: 'name5' },
    { date: '2019-12-31', event: 'name6' },
    { date: '2019-12-29', event: 'name7' },
    { date: '2019-12-30', event: 'name8' },
    { date: '2019-12-30', event: 'name9' }
];

function getDates(affairs) {
    return affairs.reduce((uniqueDates, affairs) => {
        if (!uniqueDates.includes(affairs.date)) {
            uniqueDates.push(affairs.date);
        }
        return uniqueDates;
    }, []);
}
const datesArray = getDates(affairs);
console.log(datesArray);  

console.log('-------------');

// // рівень 8.1

// п.1 [
// 	[1, 2, 3],
// 	[1, 2],
// 	[1, 2, 3, 4, 5],
// 	[1],
// 	[1, 2, 3, 4],
// ]
// Отсортируйте элементы массива по возрастанию количества элементов в подмассиве

let array1 = [
    [1, 2, 3],
    [1, 2],
    [1, 2, 3, 4, 5],
    [1],
    [1, 2, 3, 4]
];

array1.sort((a, b) => a.length - b.length);

console.log(array1);

// п.2 [
// 	[2, 4, 5],
// 	[1, 2, 3],
// 	[0, 1, 1],
// 	[5, 7, 1],
// ]
// Отсортируйте элементы массива по возрастанию суммы элементов подмассива.

let array2 = [
    [2, 4, 5],
    [1, 2, 3],
    [0, 1, 1],
    [5, 7, 1]
];

const sum3 = arr => arr.reduce((a, b) => a + b, 0);

array2.sort((a, b) => sum3(a) - sum3(b));

console.log(array2);

// п.3 Выведите на экран следующую пирамидку:
// x
// xx
// xxx
// xxxx
// xxxxx

let heightPyramid = 5;

for (let i = 1; i <= heightPyramid; i++) {
    let xxx = '';
    for (let j = 0; j < i; j++) {
        xxx += 'x';
    }
    console.log(xxx);
}

console.log('------------');

// // рівень 9.1 

// п.1 Дан текст со знаками препинаний. Получите массив предложений этого текста.

let text1 = "Hello! How are you? Thank you I am very well. And you?";

let sentences = text1.split(/(?<=[.!?])\s+/);

console.log(sentences);

// п.2 Всем ссылкам, ведующим на чужой сайт, добавьте target="_blank".

let links = document.querySelectorAll('a');

links.forEach(link => {
        link.setAttribute('target', '_blank');
});

// п.3 Дана некоторая строка:

// let str = 'abcde abcde'
// В переменной хранятся символы:
// let del = 'abe';
// Удалите из строки все указанные в переменной символы. В нашем случае должно получится следующее:
// 'cd cd'

let str = 'abcde abcde';
let del = 'abe';

let regex = new RegExp(`[${del}]`, 'g');

let result1 = str.replace(regex, '');

console.log(result1); 

console.log('------------');

// // рівень 10.2

// п.1 Дана таблица. При клике на ячейку она активируется каким-нибудь цветом.
// Сделайте так, чтобы ячейки вокруг активированной не активировались.

let cells2 = document.querySelectorAll('.td2')
 
cells2.forEach(cell => {
    cell.addEventListener('click', () =>{
        cell.style.backgroundColor =  '#'+ Math.round(Math.random()*16777215).toString(16)
    })
})

// п.2 Дана таблица. Сделайте так, чтобы каждую секунду активировалась случайная ячейка таблицы. 
// Одна ячейка не может быть активной два раза подряд.

const cells3 = document.querySelectorAll('.td3');
        let previousIndex = -1;

        function activateRandomCell() {
            let index;
            do {
                index = Math.floor(Math.random() * cells3.length);
            } while (index === previousIndex);

            if (previousIndex !== -1) {
                cells3[previousIndex].classList.remove('active');
            }

            cells3[index].classList.add('active');
            previousIndex = index;
        }
        setInterval(activateRandomCell, 1000);

// п.3 Дан текстареа. Как известно, его размер можно менять, потянув за уголок. 
// Сделайте так, чтобы можно было изменить размер этого текстареа, 
// а затем обновить страницу - и изменения не должны пропасть.

const textarea = document.getElementById('textarea');

        function loadSize() {
            const savedWidth = localStorage.getItem('textareaWidth');
            const savedHeight = localStorage.getItem('textareaHeight');
            if (savedWidth) {
                textarea.style.width = savedWidth + 'px';
            }
            if (savedHeight) {
                textarea.style.height = savedHeight + 'px';
            }
        }
        function saveSize() {
            localStorage.setItem('textareaWidth', textarea.offsetWidth);
            localStorage.setItem('textareaHeight', textarea.offsetHeight);
        }
        textarea.addEventListener('mouseup', saveSize);

        window.addEventListener('load', loadSize);

// п.4 Дан инпут и кнопка. По клику на кнопку выведите список список ul всех избыточных чисел из промежутка, 
// заданном значениями инпутов.

function isCorrectNum(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum > num;
}
document.getElementById('button').addEventListener('click', function() {
    const start = Number(document.getElementById('start').value);
    const end = Number(document.getElementById('end').value);
    const resultList = document.getElementById('resultList');

    for (let i = start; i <= end; i++) {
        if (isCorrectNum(i)) {
            const listItem = document.createElement('li');
            listItem.textContent = i;
            resultList.appendChild(listItem);
        }
    }
});

// п.5 Дана квадратная HTML таблица произвольного размера. 
// По нажатию на кнопку заполните половину таблицу следующим образом:
// +	+	+	+	+
// +	+	+	+	
// +	+	+		
// +	+			
// +		

function fillTable() {
    const table = document.getElementById('myTable');
    const tableSize = table.rows.length;

    for (let i = 0; i < tableSize; i++) {
        for (let j = 0; j < tableSize - i; j++) {
            table.rows[i].cells[j].textContent = '+';
        }
    }
}
     

