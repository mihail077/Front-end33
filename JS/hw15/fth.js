// п.1 ітерація масива за допомогою рекурсії

let array = ['hello', 1, 7, true, 99]
console.log(array);

function itArray (array, index) {
    if (array.length > index) {
        console.log(array[index]);
        index += 1
        itArray(array, index)
    }
}

itArray(array, 0)

console.log('-----------');

// п.2 ітерація чисел за допомогою рекурсії

function itNumbers(start, end) {
    if (start > end) return
      console.log(start);
      itNumbers(++start, end);
    
}
itNumbers(0, 10);

console.log('----------');

// п.3 замикання 

function calculator(num) {
    num = 10;
  
    function add(n) {
      num += n;
      return num;
    }
  
    function subtract(n1) {
      num -= n1;
      return num;
    }

    function multiply(n2) {
        num *= n2
        return num
    }

    function divide(n3) {
        num /= n3
        return num
    }
  
    return {
      add,
      subtract,
      multiply,
      divide
    };
  }
  
  console.log(calculator().add(5)); 
  console.log(calculator().subtract(3)); 
  console.log(calculator().multiply(2));
  console.log(calculator().divide(4));

  console.log('-----------');

  // п.4 callBack

  // filter
  function metFil(arr, fn) {

    let filteredArray = []

    for (let i =0; i < arr.length; i++) {
        let isGoodItem = fn(arr[i], i)
        console.log(isGoodItem);

        if (isGoodItem) {
          filteredArray.push(arr[i])
        }
    }
    return filteredArray
  }

  let arrNum = [1.5, 4, 3.2, 5, 7, 8.1, 2]
  let filArrNum = metFil(arrNum, (el) => {
    console.log(el);
    return el %1 == 0
  })
  console.log(filArrNum);

  console.log('----------');

  // find
  function metFind(arr, fn) {
    for (let i =0; i < arr.length; i++) {
      if (fn(arr[i],i)) {
        return arr[i]
      }
    }
  }
  let arrN = [2, 5, 3, 7, 6, 4, 5]
  let findArrN = metFind(arrN,(el, ind) => {
    return ind === 3
  })
  console.log(findArrN);

  console.log('---------');

  // some
  function metSome(arr, fn) {
    for (let i =0; i < arr.length; i++) {
      if (fn(arr[i])) {
        return true
      } 
    }
    return false
  }
  let arrNn = [2, 5, 3, 7, 6, 4, 5]
  let someArrNn = metSome(arrNn,(el) => {
    return el > 5
  })
  console.log(someArrNn);

  console.log('---------');

  // every
  function metEvery(arr, fn) {
    for (let i =0; i < arr.length; i++) {
      if (!fn(arr[i])) {
        return false
      } 
    }
    return true
  }
  let arNn = [2, 5, 3, 7, 6, 4, 5]
  let someArNn = metEvery(arrNn,(el) => {
    return el > 5
  })
  console.log(someArNn);

  console.log('---------');

  // forEach
function metForE(arr, fn) {
  for (let i =0; i < arr.length; i++) {
    fn(i, arr[i], arr)
  }
}
metForE([2, 3, 5, 1, 4], (ind, el, array) => {
  console.log(ind, ' -index', el, ' -element', array, ' -array');
})
  