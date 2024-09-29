//  п.1 цикли для парних чисел від 20 до 32

//  цикл for 
for (let i = 20; i <=32; i+=2) {
    console.log(i);    
}

console.log('--------------------');

//  цикл for of
let numbers = Array.from({length: 13}, (_, index) => index + 20);
console.log(numbers);

for (let number of numbers) {
    if (number % 2 == 0)
    console.log(number);
}

console.log('--------------------');

//  цикл for in
for (let number in numbers) {
    if (number % 2 == 0)
    console.log(number,numbers[number]);
}

console.log('--------------------');

//  цикл while
let num = 20;
while (num <= 32) {
    if (num % 2 == 0)
    console.log(num);
    num++
}

console.log('--------------------');

//  цикл do while
let num1 = 20;
do {
     if (num1 % 2 == 0)
     console.log(num1);
     num1++
    } while (num1 <= 32)

    console.log('/////////////////////////');

//  п.2 масив і тип даних 

//  for
let list = ['apple','green','Myhailo', 8, 42];
console.log(list);
for (let i = 0; i <= list.length-1; i++) {
    console.log(list[i], typeof list[i]);
}

console.log('----------------------');

// for of 
for (let i of list) {
    console.log(i, typeof i);
}

console.log('----------------------');

// for in
for (let i in list) {
    console.log(list[i], typeof list[i]);
}

console.log('---------------------');

// while
let i = 0;
while (i < list.length) {
    console.log(list[i], typeof list[i]);
    i++;
}

console.log('---------------------');

// do while
let x = 0;
do {
    console.log(list[x], typeof list[x]);
    x++;
 } while (x < list.length)

 console.log('///////////////////////');

 // п.3 цикли для не парних чисел від 17 до 39

 // for
 for (let i = 17; i <=39; i+=2) {
    console.log(i);
 }

console.log('---------------------');

// for of
let numbers1 = Array.from({length: 23}, (_, index) => index + 17);
console.log(numbers1);
for (let ix of numbers1) {
    if (ix % 2 == 1) 
    console.log(ix);      
}

console.log('--------------------');

// for in
for (let ix in numbers1) {
    if (ix % 2 == 0)
    console.log(ix, numbers1[ix]);
}

console.log('--------------------');

// while
let ix = 17;
while (ix <= 39) {
    if (ix % 2 == 1)
    console.log(ix);
    ix++
}

console.log('-------------------');

// do while
let ix1 = 17;
do {
    if (ix1 % 2 == 1)
    console.log(ix1);
    ix1++
} while (ix1 <= 39)

console.log('//////////////////////');

// п.4 масив для парних елементів 

// for
let arrayList = [1, 5, true, 'hello', false, null, 'iiii', 54, null]
console.log(arrayList);

for (let i = 0; i < arrayList.length; i++ ) {
    if (i % 2 == 0) {
    console.log(arrayList[i]);
    }
}

console.log('-------------------');

// for of
let ind1 = 0
for (let i of arrayList) {
    if (ind1 % 2 == 0) 
    console.log(i);
    ind1++
}

console.log('-------------------');

// for in
for (let i in arrayList) {
    if (i % 2 == 0) 
    console.log(i, arrayList[i]);
}

console.log('-------------------');

// while
let index = 0;
while (index <arrayList.length) {
     if (index % 2 == 0) 
    console.log(arrayList[index]);
    index++
}

console.log('----------------');

// do while
let index1 = 0;
do {
    if (index1 % 2 == 0) 
    console.log(arrayList[index1]);
    index1++
} while (index1 < arrayList.length)

console.log('/////////////////////');

// п.5 масив для не парних елементів
let arrayList1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null]
console.log(arrayList1);

for (let i = 0; i < arrayList1.length; i++ ) {
    if (i % 2 == 1) {
    console.log(arrayList1[i]);
    }
}

console.log('-------------------');

// for of
let ind = 0
for (let i of arrayList1) {
    if (ind % 2 ==1 ) {
        console.log(i);
    }
    ind++
}

console.log('-------------------');

// for in
for (let i in arrayList1) {
    if (i % 2 == 1) 
    console.log(i, arrayList1[i]);
}

console.log('-------------------');

// while
let index2 = 0;
while (index2 <arrayList1.length) {
     if (index2 % 2 == 1) 
    console.log(arrayList1[index2]);
    index2++
}

console.log('----------------');

// do while
let index3 = 0;
do {
    if (index3 % 2 == 1) 
    console.log(arrayList1[index3]);
    index3++
} while (index3 < arrayList1.length)

console.log('/////////////////////');

// п.6 масив сума чисел 

// for
let arrayList2 =[1, 2, 4, 2, 3, 55, 66, 777, 12];
console.log(arrayList2);

let sum = 0
for (let i = 0; i<arrayList2.length; i++) {
    sum += arrayList2[i]
}
console.log(sum);

console.log('-----------------');

// for of 
let sum1 = 0
for (let i of arrayList2) {
    sum1 += i
}
 console.log(sum1);

 console.log('----------------');

// for in
 let sum2 = 0
for (let i in arrayList2) {
    sum2 += arrayList2[i]
}
 console.log(sum2);

 console.log('---------------');

 // while 
 let sum3 = 0
 let i1 = 0
 while (i1 < arrayList2.length) {
    sum3 += arrayList2[i1]
    i1++
 }
 console.log(sum3);

 console.log('----------------');

 // do while
 let sum4 = 0
 let i2 = 0
 do {
    sum4 += arrayList2[i]
    i2++
 } while (i2 < arrayList2.length)
 console.log(sum3);

 console.log('////////////////////');

 //  п.7 масив множення елементів

 // for 
 let arrayList3 = [1, 2, 4, 2, 3, 5, 6, 7, 1];
 console.log(arrayList3);

 let sum5 = 1
 for ( let i = 0; i<arrayList3.length; i++) {
    sum5 *= arrayList3[i]
}
console.log(sum5);

console.log('----------------------');

// for of
let sum6 = 1
for (let i of arrayList3) {
    sum6 *= i;
}
console.log(sum6);

console.log('---------------------');

// for in 
let sum7 = 1
for (let i in arrayList3) {
    sum7 *= arrayList3[i];
}
console.log(sum7);

console.log('-------------------');

// while
let sum8 = 1
let i3 = 0
while (i3 < arrayList3.length) {
    sum8 *= arrayList3[i3]
    i3++
}
console.log(sum8);

console.log('-------------------');

// do while
let sum9 = 1
let i4 =0
do {
    sum9 *= arrayList3[i4];
    i4++
} while (i4 <arrayList3.length) 
console.log(sum9);

console.log('/////////////////////////');

//  п.8 prompt ітерація чисел

// for
let userNum = Number(prompt ('enter number'));

for (let i = 0; i <= userNum; i++) {
    if (i >= 100) { console.log('limit number');
      break  
    }
    if (i >=5 && i <=10) {
        continue;
    }
    console.log(i);
}

console.log('---------');

// for of
for (let xx of Array.from({ length: userNum + 1 }, (_, index) => index)) {
    if (xx >= 100) {
        console.log("limit number");
        break;
    }
    if (xx >= 5 && xx <= 10) {
        continue;
    }
    console.log(xx);
}

console.log('--------------');

// for in
for (let xx in Array.from({ length: userNum + 1 }, (_, index) => index)) {
    if (xx >= 100) {
        console.log("limit number");
        break;
    }
    if (xx >= 5 && xx <= 10) {
        continue;
    }
    console.log(xx);
}

console.log('------------------');

// while
let xNum = 0; 
    while (xNum <= userNum && xNum < 100) {
        if (xNum >= 5 && xNum <= 10) {
            xNum++;
            continue;
        }
        console.log(xNum);
        xNum++;
        if (xNum >= 100) {
            console.log("limit number");
    }
}

console.log('---------------------');

// do while
let xNum1 = 0;
do {
    if (xNum1 >= 5 && xNum1 <= 10) {
        xNum1++;
        continue;
    }
    console.log(xNum1);
    xNum1++;
} while (xNum1 <= userNum && xNum1 < 100);

if (xNum1 >= 100) {
    console.log("limit number");
} 

















