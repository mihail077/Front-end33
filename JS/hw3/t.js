//п.1 цикл for для парних чисел
for (let i = 2; i <=20; i = i + 2) {
    console.log(i);
}


// п.2 масив
let list = ['apple','green',42];
console.log(list);
for (let i = 0; i <= list.length-1; i++) {
    console.log(list[i], typeof list[i]);
}


// п.3 prompt, порівняння чисел 
let num1 = prompt ('enter number1');
let num2 = prompt ('enter number2');

if (num1>num2) {
    console.log('larger number' + num1);
} else if (num2>num1) {
    console.log('larger number' + num2);
} else {
    console.log('equal numbers');
}


// п.4 цикл for для непарних чисел
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}


// п.5 масив з парними елементами
let array1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

console.log(array1);
console.log(array1.length);

for (let i = 0; i <= array1.length-1; i++ ) {
    if (i % 2 == 0) {
    console.log(array1[i]);
    }
}


//п.6 масив з непарними елементами
let array2 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

console.log(array2);

for (let i = 0; i <= array2.length-1; i++ ) {
    if (i % 2 == 1) {
    console.log(array2[i]);
    }
}


// п.7 масив ,сума елементів
let array3 = [1, 2, 4, 2, 3, 55, 66, 777, 12];

console.log(array3);
let sum = 0
for (let i = 0; i<array3.length; i++) {
    sum += array3[i]
}
console.log(sum);


// п.8 масив ,перемноженя елементів
let array4 = [1, 2, 4, 2, 3, 5, 6, 7, 1];

console.log(array4);
let sum1 = 1
for ( let i = 0; i<array4.length; i++) {
    sum1 *= array4[i]
}
console.log(sum1);


// п.9 prompt
let name = prompt ('enter name');
let num = prompt ('enter number');

if(name == 'Admin' && num > 100) {
    console.log('good job');
} else if(name == 'System' && num == 10) {
    console.log('admin job');
} else if(name == 'World' && num > 200) {
    console.log('good world');
} else if(name == 'Smth' && num <0) {
    console.log('minus num');
} else {
    console.log('you are not identified');
}

