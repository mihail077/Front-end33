// // методи масивів 

// п.1 

let arr = [1, 5, true, 'hello', false, null, 'iiii', 54, null]
console.log(arr);

arr.forEach(function(element, index, array) {
    console.log(element,'-el ', index,'-ind ', array,'-array');
})

console.log('-------------');

// п.2 

let arr1 = [1, 'iiii', 54, false]
console.log(arr1);

arr1.push(433)
console.log(arr1);

console.log('-------------');

// п.3 

let arr2 = [1, 'iiii', 54, false]
console.log(arr2);

arr2.unshift('hello ay')
console.log(arr2);

console.log('------------');

// п.4 

let arr3 = [1, 'iiii', 54, false]
console.log(arr3);

arr3.pop()
console.log(arr3);

console.log('------------');

// п.5

let arr4 = [1, 'iiii', 54, false]
console.log(arr4);

arr4.shift()
console.log(arr4);

console.log('------------');

// п.6 

let arr5 = [5, 44, true, 'he', true, 5, 6]
console.log(arr5);

let newArr = arr5.slice(2,6)
console.log(newArr);

console.log('------------');

// п.7 

let arr6 = [5, 44, true, 'he', true, 5, 6]
console.log(arr6);

arr6.splice(2, 4)
console.log(arr6);

console.log('-----------');

// п.8 

let arr7 = [5, 44, true, 'he', true, 5, 6]
console.log(arr7);

arr7.splice(3, 3, 11, 101, 224)
console.log(arr7);

console.log('------------');

// п.9 пошук елемента 

let arr8 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11]
console.log(arr8);

let found = arr8.find(function (element) {
    if (element === 3) {
        return true;
    } 
});
console.log(found);

found = arr8.find(element => element === 1);
console.log(found);

found = arr8.find(element => element === 100);
console.log(found);

console.log('------------');

// п.10 фільтрування

let arr9 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11]
console.log(arr9);

let filtered = arr9.filter(element => element < 10 || element> 50);
console.log(filtered);

console.log('------------');

// п.11 перевірка всіх елементів 

let arr10 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11]
console.log(arr10);

let everyZero = arr10.every(element => element > 0)
console.log(everyZero);

console.log('------------');

// п.12 перевірка будь якого елемента 

let arr11 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11]
console.log(arr11);

let someZero = arr11.some(element => element < 0)
console.log(someZero);

console.log('-------------');

// п.13 сортування 

let arr12 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11]
console.log(arr12);

let sortArr = arr12.sort((a, b) => { return a - b})
    // if (a > b) {
    //    return 1 
    // } else {
    //     return -1
    // }
console.log(sortArr);

 sortArr = arr12.sort((a, b) => { return b - a})
   
console.log(sortArr);

console.log('-------------');

// п.14 пошук ітдекса

let arr13 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11]
console.log(arr13);

let ind = arr13.indexOf(14)
console.log(ind, '-index 14');

ind = arr13.indexOf(66)
console.log(ind,'-index 66');

ind = arr13.indexOf(11)
console.log(ind, '-first index 11');

let lastInd = arr13.lastIndexOf(11)
console.log(lastInd, '-last index 11');
