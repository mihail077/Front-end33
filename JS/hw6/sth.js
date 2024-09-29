////  п.1  лінійний пошук
let counter1 = 0

let city = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів']

console.log('linear search');
console.log(city);

let searchElement = 'Донецьк'

for (i = 0; i <= city.length - 1; i++) {
    counter1++
    console.log(i);
    if (searchElement === city[i]) {
        console.log('found element: ',i, city[i]); 
        break
    }
}
console.log('number of iterations: ', counter1);

console.log('-----------------------');

////  п.2  бінарний пошук 
let counter = 0;

let num = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110];

console.log('binary search');
console.log(num);

let found = 55;

let start = 0;
let end = num.length -1;

let middle = 0;

for (; start <= end; counter++) {
    middle = Math.round((start + end) / 2);
    if (num[middle] === found ) {
        console.log('found element: ', num[middle]);
        break;
    } else if ( num[middle] > found ) {
        end = middle - 1;
    } else {
        start = middle + 1;
    }
}
console.log('number of iterations: ', counter);

console.log('-------------------------');

////  п.3 сортування бульбашкою 
let counter2 = 0
let num1 = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19];

console.log('bubble sort');
console.log(num1);

for (let j = 0; j < num1.length; j++) {
    for (let i = 0; i < num1.length; i++) {
        counter2++
        if (num1[i] > num1[i +1]) {
            let temp = num1[i+1]
            num1[i+1] = num1[i]
            num1[i] = temp
        }
    } 
}
console.log(num1);
console.log('number of iterations: ',counter2);



