let carObj = {
    car: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
  }

  console.log(carObj);
  console.log('*  *  *  *  *  *  *  *  *');

  // п.1 ключі об'єкта 

  let keysObj = Object.keys(carObj)
  console.log(keysObj);

  console.log('--------------');

  // п.2 значення об'єкта 

  let valObj = Object.values(carObj)
  console.log(valObj);

  console.log('-------------');

  // п.3 ключі та значення об'єкта 

  let keyVal = Object.entries(carObj)
  console.log(keyVal);

  console.log('------------');

  // п.4 копіювання об'єкта 

  let newObject = Object.assign({}, carObj)
  console.log(newObject);

  console.log('------------');

  // п.5 створення і об'єднання об'єкта

  let userObj =  {
    id: 'john',
    age: 22,
    city:'New York'
  }

  console.log(userObj);

  let newObj = Object.assign(userObj,carObj)
  console.log(newObj);

console.log('--------------');

// п.6 перевірка полів об'єкта 

console.log(carObj.hasOwnProperty('car', 'age', 'wheel', 'data', 'parents'));

console.log('--------------');

// п.7 заборона зміни і створення полів

let fr = Object.freeze(carObj)

fr.name = 'volvo'
delete fr.model
fr.color = 'red'
console.log(carObj);

console.log('--------------');

// п.8 заборона створення полів 

let obj = {
  id: 333,
  color: 'green',
  heigth: 100
}
console.log(obj);

let sl = Object.seal(obj)

sl.id = '555'
delete sl.color
sl.width = 30
console.log(obj);

console.log('--------------');


// п.9 створення нового об'єкта (create)


let nObject = Object.create({}, {
  weight: {value: 20},
  width: {value: 30},
  heigth: {value: 50},
  volume: {value: 'no'},
  color: {value:'blue'},
  id: {value:245}
});
console.log(nObject);

console.log('-------------');

  // п.10 створення об'єкта з масиву 

  let arrObj =  [[true, 2], ['student', true], [null, null], [12, 'hello']]
console.log(arrObj);

console.log(Object.fromEntries(arrObj));