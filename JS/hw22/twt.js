// п.1 
// Створити клас калькурятор на геттерах і сеттерах з діями *, /, +, -, вираховувати степінь, факторіал, корінь
// Клас повинен містити поле date яке буде обновляти конкретну дату і час використання калькулятора.

class Calculator {
    
        result = 1
        date = new Date()

        get methodCalc() {
            return this.result;
        }
    
        set newMethodCalc(value) {
            this.result = value;
        }
    
        multiply(number) {
            this.result *= number;
        }

        divide(number) {
            this.result /= number
        }

        add(number) {
            this.result += number
        }

        subtraction(number) {
            this.result -= number
        }

        power(number) {
            this.result **= number
        }

        factorial() {
            let result1 = 1;
            for (let i = 2; i <= this.result; i++) {
                result1 *= i;
            }
            this.result = result1;
        }

        root() {
            this.result = Math.sqrt(this.result)
        }

}

const calc = new Calculator()

calc.multiply(4)
console.log(calc.methodCalc);

calc.divide(2)
console.log(calc.methodCalc);

calc.add(3)
console.log(calc.methodCalc);

calc.subtraction(2)
console.log(calc.methodCalc);

calc.power(2)
console.log(calc.methodCalc);

calc.factorial()
console.log(calc.methodCalc);

calc.root()
console.log(calc.methodCalc);

console.log(calc.date);

calc.newMethodCalc = 2

calc.multiply(4)
console.log(calc.methodCalc);

calc.divide(2)
console.log(calc.methodCalc);

calc.add(3)
console.log(calc.methodCalc);

calc.subtraction(3)
console.log(calc.methodCalc);

calc.power(2)
console.log(calc.methodCalc);

calc.factorial()
console.log(calc.methodCalc);

calc.root()
console.log(calc.methodCalc);

console.log(calc.date);

console.log('------------');

// п.2 
// Запишіть створений об'єкт створений в класі з дати і числа в localStorage, sessionStorage.

class StorageObj {
    constructor(date, number) {
        this.date = date
        this.number = number
    } 
}

const myObj = new StorageObj(new Date(), 77)
const objStr = JSON.stringify(myObj)

localStorage.setItem(myObj, objStr)

sessionStorage.setItem(myObj, objStr)


// п.3
// Самостійно попрактикуйте використання JSON, localStorage, sessionStorage

localStorage.setItem("greet", "hello")
sessionStorage.setItem("greet", "hello")

localStorage.setItem("key", "value")
localStorage.removeItem("key")

const getStorage = localStorage.getItem("greet")
console.log(getStorage);

let user = {
    name: "Petro",
    age: 30
}

let newUser = JSON.stringify(user)

localStorage.setItem("user", newUser)
sessionStorage.setItem("user", newUser)

let userFromLocalStorage = JSON.parse(localStorage.getItem('user'));

console.log(userFromLocalStorage);

console.log(localStorage.length);
