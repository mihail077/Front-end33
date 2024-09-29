// п.1 
// Через клас створити об'єкт People який всі дані отримує ззовні з полями:
// name, f_name, old, isMarried, hasPossition, children
// Вивести об'єкт в консоль.

class People {
    name = 'Petro'
    f_name = 'Petrenko'
    old = 30
    isMarried = true
    hasPossition = 'manager'
    children = 'son'
}
const person = new People
console.log(person);

console.log('----------');

// п.2 
// Через клас shortWork створити власні методи масивів всередині класу: filter, find, includes, join, slice



class shortWork {
    constructor(array) {
        this.array = array
    }

    // filter

    myFilter(fn) {
        let filteredArray =[]
        for (let i = 0; i < this.array.length; i++) {
             if (fn(this.array[i])) {
              filteredArray.push(this.array[i])
             }  
        }
        return filteredArray
      }

      // find

      myFind = function (fn) {
        for (let i = 0; i < this.array.length; i++) {
             if (fn(this.array[i])) {
              return this.array[i]
             }  
        }
      }

      // includes 

      myIncludes(el) {
        for (let i = 0; i <this.array.length; i++) {
          if (this.array[i] === el) {
            return true
          }
        }
        return false
    }

    // join

    myJoin(str) {
        let result = ''
      
        for (let i = 0; i < this.array.length; i++) {
             result += this.array[i] 
      
             if (i !== this.array.length - 1) {
                result += str
             }
        }
        return result
      }

      // slice 

      mySlice(el1,el2) {
        let copyArr = []
      
        for (let i = el1; i < el2 && i < this.array.length; i++) {
          copyArr.push(this.array[i])
        }
        return copyArr
      }
    }

let number = [1, 2, 3, 4, 5, 6]
const sw = new shortWork(number)

const filteredArray = sw.myFilter(el => el % 2 == 0)
console.log(filteredArray);

const array = sw.myFind(el => el >5)
console.log(array);

console.log(sw.myIncludes(4));

console.log(sw.myJoin(','));

console.log(sw.mySlice(1,4));

console.log('--------------');

// п.3 
// Через клас створити об'єкт Car який всі дані отримує ззовні  з полями:
// name, model, year, isNew, cost, wheels
// Вивести об'єкт в консоль.

class Car {
    constructor (name, model, year, isNew, cost, wheels) {
        this.name = name
        this.model = model
        this.year = year
        this.isNew = isNew
        this.cost = cost
        this.wheels = wheels
    }
}
const myCar = new Car ('honda', 'accord', 2020, false, 10000, 4)
console.log(myCar);

console.log('------------');

// п.4 
// Через клас створити об'єкт Animal який отримує дані ззвоні, створити мінімум 3 поля,
// та додати через прототайп поведінку для об'єкту (мінімум 2 методи).

class Animal {
    name = "sharik"
    kind = "dog"
    age = 3
    color = "black"
    
constructor (name, kind, age, color) {
    if (name && kind && age && color) {
        this.name = name
        this.kind = kind
        this.age = age
        this.color = color
    }
        
}
changeAge () {
        this.age += 1
        console.log("sharik's age added one year");
}
changeColor ( newColor){
        this.color = newColor
        console.log("sharik's color is change");
}

}
const pet = new Animal('sharik', 'dog', 3, 'black')
console.log(pet);

pet.changeAge()
pet.changeColor("white")

console.log('----------');

// п.5 
// Створити клас Dog, через прототип унаслідувати поведінку від класу Animal
// та додати власну поведінку (мінімум 2 методи).

class Dog extends Animal {
    name = "pluto"
    height = 100
    weight = 30

    greet() {
        console.log("hello i'm dog");
    }
    bark () {
        console.log("sharik voice: ", "woof woof woof");
    }

}
const myDog = new Dog ()
console.log(myDog);

myDog.changeAge()
myDog.changeColor("white")
myDog.greet()
myDog.bark()

console.log('--------------');

// п.6
// Створити клас Poli Який в консоль буде виводити короткий опис того що таке поліморфізм

class Poli {
    constructor() {}
        describePolymorphism() {
            console.log("Polymorphism is the ability to callthe same method on different objects,and each object reacts differently");
        }
}

const poliMorf = new Poli()
console.log(poliMorf);

poliMorf.describePolymorphism()

console.log('-------------');

// п.7 
// Привести приклад поліморфізму.

class Runner {
    age
    constructor(age) {
        this.age = age
    }
    run() {
        console.log("Runner runs fast");
    }
}

class Teenager extends Runner {
    run() {
        console.log("Teenager doesn't run fast");
    }
}

class OldMan extends Runner {
    run() {
        console.log("Old man running realy slowly");
    }
}

const person1 = new Runner(25)
console.log(person1);

const person2 = new Teenager(12)
console.log(person2);

const person3 = new OldMan(65)
console.log(person3);

person1.run()
person2.run()
person3.run()

console.log('-----------');

// п.8 
// Створити клас Inc Який в консоль буде виводити короткий опис того що таке інкапсуляція.

class Inc {
    constructor() {}
    describeEncapsulation() {
        console.log("encapsulation restricts access to some components of an object and hides its implementation details.");
    }
}

const incaps = new Inc ()
console.log(incaps);

incaps.describeEncapsulation()
