// п.1 
// Через функцію конструктор створити об'єкт Car з полями:
// name, model, old, price, wheels
// Вивести об'єкт в консоль.

function Car (name, model, old, price, wheels) {
    this.name = name
    this.model = model
    this.old = old
    this.price = price
    this.wheels = wheels
}
const myCar = new Car('bmw', 'x5', 2020, 20000, 4)
console.log(myCar);

console.log('-----------');

// п.2
// Через прототайп створити власні методи масивів: some, every, reduce, splice

// some
let array = [2, 4, 5, 3, 1, 7, 10]

Array.prototype.mySome = function (fn) {
    for (let i = 0; i < this.length; i++) {
         if (fn(this[i])) {
          return true
         }  
    }
    return false
  }
  let nArray = array.mySome(function(el) {
    return el > 5
});
console.log(nArray);

// every

Array.prototype.myEvery = function(fn) {
    for (let i = 0; i < this.length; i++) {
        if (!fn(this[i])) {
            return false
        }
    }
    return true
}
let nArray1 = array.myEvery(function(el) {
    return el > 5
})
console.log(nArray1);

// reduce

Array.prototype.myReduce = function(fn, initialValue) {
    let currentValue = initialValue

    for (let i = 0; i < this.length; i++) {


        if (currentValue !== undefined) {
            currentValue = fn(currentValue, this[i])
        } else {
            currentValue = this[i]
        }
    }
    return currentValue
}
let nArr2 = array.myReduce(function(a, b) {
    return a + b 
}, 0)
console.log(nArr2);

// splice

Array.prototype.mySplice = function(el1, el2, ...el3) {
      
    const a = this.slice(el1 + el2);
    this.length = el1;
    this.push(...el3, ...a);
  };
  
  let arr = [1, 2, 3, 4, 5, 6];
  arr.mySplice(3, 3, 'a', 'b', 'c');
  console.log(arr);

  console.log('-------------');
// п.3 
// Через функцію конструктор створити об'єкт dog з полями:
// name, model, year, cost
// Вивести об'єкт в консоль.

function Dog (name, model, year, cost) {
    this.name = name
    this.model = model
    this.year = year
    this.cost = cost
}
const terrier = new Dog('rex','fox terrier', 5, 1000)
console.log(terrier);

console.log('------------');

// п.4
// Через функцію конструктор створити об'єкт Parent, створити мінімум 3 поля,
// та додати через прототайп поведінку для об'єкту (мінімум 2 методи).

function Parent (name, age, city, children) {
    this.name = name
    this.age = age
    this.city = city
    this.children = children
    this.currentAge = age
}

Parent.prototype.introduce = function () {
    console.log('My name is '+ this.name + ", I'm " + this.age + " years old");
}
Parent.prototype.nAge = function () {
    this.currentAge += 1
    console.log("I'm growing up");    
}

let father = new Parent("Vasyl", 30, "Kyiv", "son")
console.log(father);

father.introduce()
father.nAge()

console.log('----------');

// п.5 
// Створити об'єкт Son, через прототип унаслідувати поведінку від об'єкту Parent
// та додати власну поведінку (мінімум 2 методи).

function Son (name, age, city, brother) {
    this.name = name
    this.age = age
    this.city = city
    this.brother = brother
    this.currentAge = age
}

Son.prototype = Object.assign({},(Parent.prototype))

let petro = new Son ('Petro', 10, 'Kyiv' ,true)
console.log(petro);
petro.introduce()
petro.nAge()

Son.prototype.greet = function () {
    console.log('Hello');
}

Son.prototype.game = function () {
    console.log('I love playing dominoes');
}

Son.prototype.trip = function (city) {
    this.city = city
    console.log('trip to ' + city);
}

petro.greet()
petro.game()
petro.trip('Lviv')

console.log('------------');

// п.6 
// Створити КЛАС People із полями: name, age, isMarried, isChilds, job
// створити 3 інстанси класу People і вивести їхні поля в консоль.

class People {
    
    constructor (name, age, isMarried, isChildren, job) {
        this.name = name
        this.age = age
        this.isMarried = isMarried
        this.isChildren = isChildren
        this.job = job
    }
}

const person1 = new People ('Ivan', 35, true, 'son', 'doctor')
console.log(person1);

console.log(person1.name);
console.log(person1.age);
console.log(person1.isMarried);
console.log(person1.isChildren);
console.log(person1.job);

const person2 = new People ('Petro', 30, true, 'daughter', 'engineer')
console.log(person2);

console.log(person2.name);
console.log(person2.age);
console.log(person2.isMarried);
console.log(person2.isChildren);
console.log(person2.job);

const person3 = new People ('Olena', 25, true, 'son', 'teacher')
console.log(person3);

console.log(person3.name);
console.log(person3.age);
console.log(person3.isMarried);
console.log(person3.isChildren);
console.log(person3.job);

console.log('-----------');

// п.7
// Створити КЛАС Tiger із полями: name, kind, age, speed, wight, height
// Додатково створити методи: changeName, addAge, changeSpeed, run
// Вивести поля класу в консоль та використати методи

class Tiger {
    name = 'striped'
    kind = 'bengal'
    age = 3
    speed = 0
    wight = 200
    height = 120

    changName(newName) {
        this.name = newName;
        console.log('new name tiger: ' + newName);
    }

    addAge () {
        this.age += 1
        console.log('biger age: ' + this.age);
    }

    changeSpeed (newSpeed) {
        this.speed = newSpeed
        console.log('speed changed: ' + this.speed);
    }

    run () {
        console.log('tiger is run,speed = '+ this.speed);
    }
}
const myTiger = new Tiger
console.log(myTiger);

console.log('');

console.log('name: ' + myTiger.name);
console.log('kind: ' + myTiger.kind);
console.log('age: ' + myTiger.age);
console.log('speed: ' + myTiger.speed + ' km/h');
console.log('wight: ' + myTiger.wight + ' kg');
console.log('height: ' + myTiger.height + ' cm');

console.log('');

myTiger.changName('Tom')
myTiger.addAge()
myTiger.changeSpeed(40)
myTiger.run()

console.log('------------');

// п.8 
// Перевірити всі створені об'єкти на те чи вони походять від кожного класу (чи ф-ції конструктора),
// вивести результат в консоль.

console.log(myCar instanceof Car);
console.log(terrier instanceof Dog);
console.log(father instanceof Parent);
console.log(petro instanceof Son);
console.log(myTiger instanceof Tiger);
console.log(person1 instanceof People);
console.log(person2 instanceof People);
console.log(person3 instanceof People);

console.log('');

console.log(myCar instanceof Dog);
console.log(terrier instanceof Car);
console.log(father instanceof Son);
console.log(petro instanceof Parent);
console.log(myTiger instanceof People);
console.log(person1 instanceof Tiger);

