// // методи масива //

// reverse

let array = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];
console.log(array);

array.reverse()
console.log(array);

console.log('----------------');

// flat 

let array1 = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];
console.log(array1);

let arr = array1.flat(Infinity)
console.log(arr);

console.log('---------------');

// includes,

let array2 = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];
console.log(array2);

console.log(array2.includes(20));
console.log(array2.includes(100));

console.log('--------------');

// join

let array3 = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];
console.log(array3);

let st = array3.join()
console.log(st);

console.log('----------------');

// map

let array4 = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];
console.log(array4);

let mapArr = array4.map((element, num) => {
    if (num > 5) {
        return {
            index: num,
            value: element 
        }
    } else {
        return element *2
    }
})
console.log(mapArr);

console.log('----------------');

// reduce

let array5 = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11,];
console.log(array5);

let sum = array5.reduce((previousValue, _, index) => {
    return  previousValue + index    
 }, 0);

console.log(sum);

console.log('---------------');

// // методи стрічки //

// split

let str = 'Hello world and my dear friend ...'
console.log(str);

let nArr = str.split(" ")
console.log(nArr);

console.log('---------------');

// trim 

let str1 = ' Hello world and my dear friend ... '
console.log(str1);

console.log(str1.trim());

console.log('---------------');

// toLocaleUpperCase

let str2 = 'Hello world and my dear friend ...'
console.log(str2);

console.log(str2.toLocaleUpperCase());

console.log('--------------');

// toLocaleLowerCase

let str3 = 'Hello world and my dear friend ...'
console.log(str3);

console.log(str3.toLocaleLowerCase());

console.log('-------------');

// charAt

let str4 = 'Hello world and my dear friend ...'
console.log(str4);

console.log(str4.charAt(6));

console.log('-------------');

// charCodeAt

let str5 = 'Hello world and my dear friend ...'
console.log(str5);

console.log(str5.charCodeAt(6));

console.log('------------');

// includes 

let str6 = 'Hello world and my dear friend ...'
console.log(str6);

console.log(str6.includes('Hello'));
console.log(str6.includes('bye'));

console.log('-------------');

// concat

let arrCon = nArr.concat(array1)
console.log(arrCon);

console.log('-------------');

// search

let str7 = 'Hello world and my dear friend ...'
console.log(str7);

console.log(str7.search('and'));

console.log('-----------');

// startsWith

let str8 = 'Hello world and my dear friend ...'
console.log(str8);

console.log(str8.startsWith('Hello'));
console.log(str8.startsWith('A'));

console.log('----------');

// endsWith

let str9 = 'Hello world and my dear friend ...'
console.log(str9);

console.log(str9.endsWith('...'));
console.log(str9.endsWith('d'));

console.log('----------');

// indexOf

let str11 = 'Hello world and my dear friend ...'
console.log(str11);

console.log(str11.indexOf('w'), '-index w');

console.log('-------------');

// lastIndexOf

let str12 = 'Hello world and my dear friend ...'
console.log(str12);

console.log(str11.lastIndexOf('l'), '-last index l');

console.log('-------------');

// replace

let str13 = 'Hello world and my dear friend ...'
console.log(str13);

console.log(str13.replace('Hello', 'Bye'));

