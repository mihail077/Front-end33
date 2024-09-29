// // п.1 Через функцію конструктор створити об'єкт People з полями:
// name, f_name, old, isMarried, hasPossition, children
// Вивести об'єкт в консоль.

function People(name, f_name, age, isMarried, hasPossition, children) {
    this.name = name;
    this.f_name = f_name;
    this.age = age;
    this.isMarried = isMarried;
    this.hasPossition = hasPossition;
    this.children = children;
  }
  const person = new People('Petro', 'Petrenko', 25, true, true, 'Vasyl');
  
  console.log(person);

  console.log('-----------');

  // // п.2 Через прототайп створити власні методи масивів: filter, find, includes, join, slice

// filter

  let arr = [1, 5, 3, 4, 2, 7, 10]

Array.prototype.myFilter = function (fn) {
  let filteredArray =[]
  for (let i = 0; i < this.length; i++) {
       if (fn(this[i])) {
        filteredArray.push(this[i])
       }  
  }
  return filteredArray
}
let nArr = arr.myFilter(function(el) {
    return el % 2 === 0
});
console.log(nArr);

// find

let arr1 = [1, 5, 3, 4, 2, 7, 10]

Array.prototype.myFind = function (fn) {
  for (let i = 0; i < this.length; i++) {
       if (fn(this[i])) {
        return this[i]
       }  
  }

}
let nArr1 = arr.myFind(function(el) {
    return el > 5
});
console.log(nArr1);

// includes 

let arr2 = [1, 5, 3, 4, 2, 7, 10]

Array.prototype.myIncludes = function(el) {
  for (let i = 0; i <this.length; i++) {
    if (this[i] === el) {
      return true
    }
  }
  return false
}
console.log(arr2.myIncludes(4));

// join

let arr3 = [1, 5, 3, 4, 2, 7, 10]

Array.prototype.myJoin = function(str) {
  let result = ''

  for (let i = 0; i < this.length; i++) {
       result += this[i] 

       if (i !== this.length - 1) {
          result += str
       }
  }
  return result
}
console.log(arr3.myJoin(','));

// slice

let arr4 = [1, 5, 3, 4, 2, 7, 10]

Array.prototype.mySlice = function(el1,el2) {
  let copyArr = []

  for (let i = el1; i < el2 && i < this.length; i++) {
    copyArr.push(this[i])
  }
  return copyArr
}
console.log(arr4.mySlice(1, 5));

console.log('-------------');

// // п.3 Через функцію конструктор створити об'єкт Car з полями:
//name, model, year, isNew, cost, wheels
//Вивести об'єкт в консоль.

function Car(name, model, year, isNew, cost, wheels) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.isNew = isNew;
    this.cost = cost;
    this.wheels = wheels;
  }
  const car = new Car('Toyota', 'Corolla', 2020, true, 10000, 4);
  
  console.log(car);

  console.log('-------------');

// // п.4 Через функцію конструктор створити об'єкт Animal, створити мінімум 3 поля,
//та додати через прототайп поведінку для об'єкту (мінімум 2 методи).

  function Animal(name, type, age, weight) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.weight = weight;
    this.currentAge = age
    this.currentWeight = weight
}

Animal.prototype.animalGrow = function () {
  this.currentAge += 1
  this.currentWeight += 15
  console.log('Animal grow'); 
}

const wildAnimal = new Animal('wolf', 'mammals', 1, 10)
console.log(wildAnimal);

wildAnimal.animalGrow()
wildAnimal.animalGrow()

console.log('-------------');

// // п.5 Створити об'єкт Dog, через прототип унаслідувати поведінку від об'єкту Animal
//та додати власну поведінку (мінімум 2 методи).

function Dog (color, type, speed) {
  this.color = color
  this.type = type
  this.speed = speed
  this.currentAge = 0
  this.currentWeight = 0
}

Dog.prototype = Object.assign({},(Animal.prototype))

let labrador = new Dog ('black', 'mammals', 0)
labrador.animalGrow()
console.log(labrador);

Dog.prototype.dogRun = function () {
  this.speed += 5
  console.log('dog run'); 
}

labrador.dogRun()
console.log(labrador);

Dog.prototype.changeColor = function (newColor) {
  this.color = newColor
  console.log('dog chage color'); 
}

labrador.changeColor('white')
console.log(labrador)
