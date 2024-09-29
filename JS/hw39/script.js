// 1. Створити функцію калькулятор із 4 діями *, +, -, \. Написати до функції юніт тести

function calc(num1, action, num2) {
    if (action == '+') {
        return num1 + num2
    } else if (action == '-') {
        return num1 - num2
    } else if (action == '*') {
        return num1 * num2
    } else if (action == '/') {
        return num1 / num2
    } else {
        return 0
    }
}

function testAdd() {
    const num1 = 5
    const num2 = 5
    const result = 10

    let add = calc(num1, '+', num2)
    if (add === result) {
        console.log('add: ok');
    } else {
        //throw('not ok');
        console.log('add: not ok');
    }
}
testAdd()

function testSubtraction() {
    const num1 = 5
    const num2 = 5
    const result = 0

    let subtraction = calc(num1, '-', num2)
    if (subtraction === result) {
        console.log('subtraction: ok');
    } else {
        console.log('subtraction: not ok');
    }
}
testSubtraction()

function testMultiply() {
    const num1 = 5
    const num2 = 5
    const result = 25

    let multiply = calc(num1, '*', num2)
    if (multiply === result) {
        console.log('multiply: ok');
    } else {
        console.log('multiply: not ok');
    }
}
testMultiply()

function testDivide() {
    const num1 = 5
    const num2 = 5
    const result = 1

    let divide = calc(num1, '/', num2)
    if (divide === result) {
        console.log('divide: ok');
    } else {
        console.log('divide: not ok');
    }
}
testDivide()

// 2. Написати свої методи масивів (filter, find, some, every), використати до них контекст call, apply, bind

let number = [1, 2, 3, 4, 5]

function myFilter(array, cbFn) {
    let myArray = []
    for (let i = 0; i < array.length; i++) {
        if (cbFn(array[i],i)) {
            myArray.push(array[i])
        }
    }
    return myArray
}

let filterCall = myFilter.call(null,number, num => num < 4);
console.log(filterCall);

let filterApply = myFilter.apply(null, [number, num => num < 4])
console.log(filterApply);

let filterBind = myFilter.bind(null, number, num => num < 4)
let filArrBind = filterBind()
console.log(filArrBind);


function myFind(array, cbFn) {
    for (let i = 0; i < array.length; i++) {
        if (cbFn(array[i],i)) {
           return array[i] 
        }
    }
}

let findCall = myFind.call(null, number, num => num > 2);
console.log(findCall); 

let findApply = myFind.apply(null, [number, num => num > 2])
console.log(findApply);

let findBind = myFind.bind(null, number, num => num > 2)
let findArrBind = findBind()
console.log(findArrBind);

    
Array.prototype.mySome = function (cbFn) {
    for (let i = 0; i < this.length; i++) {
         if (cbFn(this[i], i)) {
          return true
         }  
    }
    return false
  }

let someCall = Array.prototype.mySome.call(number, num => num > 2)
console.log(someCall);

let someApply = Array.prototype.mySome.apply(number, [num => num > 2])
console.log(someApply);

let someBind = Array.prototype.mySome.bind(number, num => num > 2)
let someArrBind = someBind()
console.log(someArrBind);


Array.prototype.myEvery = function(cbFn) {
    for (let i = 0; i < this.length; i++) {
        if (!cbFn(this[i])) {
            return false
        }
    }
    return true
}
let everyCall = Array.prototype.myEvery.call(number, num => num > 2)
console.log(everyCall);

let everyApply = Array.prototype.myEvery.apply(number, [num => num > 2])
console.log(everyApply);

let everyBind = Array.prototype.myEvery.bind(number, num => num > 2)
let everyArrBind = everyBind()
console.log(everyArrBind);

// 3. Створити масив, написати юніт тести до методів масиву: filter, find, some, every

let array = [1, 2, 3, 4, 5]

  function filteredArray(array) {
    return array.filter(el => el < 4)
  } 

  function testFilter() {
    const array = [1, 2, 3, 4, 5]
    const result = [1, 2, 3]

    const filterRes = filteredArray(array)

    if (JSON.stringify(filterRes) == JSON.stringify(result)) {
        console.log('test successful');
    } else {
        console.log('error');
    }
  }
  testFilter()

  function findArray(array) {
    return array.find(el => el > 2)
  }

  function testFind() {
    const array = [1, 2, 3, 4, 5]
    const result = 3

    const findRes = findArray(array)
    if (findRes === result) {
        console.log('test successful');
    } else {
        console.log('error');
    }
  }
  testFind()

  function someArray(array) {
    return array.some(el => el > 2)
  }

  function testSome() {
    const array = [1, 2, 3, 4, 5]
    const result = true

    const someRes = someArray(array)
    if (someRes === result) {
        console.log('test successful');
    } else {
        console.log('error');
    }
  }
  testSome()

  function everyArray(array) {
    return array.every(el => el < 6)
  }

  function testEvery() {
    const array = [1, 2, 3, 4, 5]
    const result = true

    const everyRes = everyArray(array)
    if (everyRes === result) {
        console.log('test successful');
    } else {
        console.log('error');
    }
  }
  testEvery()