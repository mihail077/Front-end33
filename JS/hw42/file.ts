// 3. Типізуйте переписану чайнінг функцію за допомогою TS

interface ICalc {
    result: number;
    pl: (num: number) => ICalc;
    min: (num: number) => ICalc;
    multiply: (num: number) => ICalc;
    divide: (num: number) => ICalc;
    getResult: () => number;
  }

function calculator(a:number, b:number, action:string):ICalc {
    let result = 0

    function pl(num:number):ICalc {
    result += num

    return {
        result,
        pl,
        min,
        multiply,
        divide,
        getResult
    }
    }

    function min(num:number):ICalc {
        result -= num

        return {
            result,
            pl,
            min,
            multiply,
            divide,
            getResult
        }
    }

    function multiply(num:number):ICalc {
        result *= num

        return {
            result,
            pl,
            min,
            multiply,
            divide,
            getResult
        }
    }

    function divide(num:number):ICalc {
        result /= num

        return {
            result,
            pl,
            min,
            multiply,
            divide,
            getResult
        }
    }

    function getResult():number {
        return result
    }

    switch (action) {
        case '+': result = a + b
            break
        case '-': result = a - b
            break
        case '*': result = a * b
            break
        case '/': result = a / b
            break
            default: result = 0
    }
    return {
        result,
        pl,
        min,
        multiply,
        divide,
        getResult
    }
}
const ress:number = calculator(1, 1, '+').pl(10).min(2).divide(2).multiply(5).getResult()
console.log(ress);

//  4. Візьміть друге дз по JS та типізуйте його через TS.

// 1. Перевести тип і в консоль вивести результат через typeof:

let a:boolean =Boolean('hello');
console.log(a);
console.log(typeof a);

let b:boolean =Boolean(10);
console.log(b);
console.log(typeof b);

let c:number =Number('10');
console.log(c);
console.log(typeof c);

let d:boolean =Boolean(null);
console.log(d);
console.log(typeof d);

let e:boolean =Boolean(undefined);
console.log(e);
console.log(typeof e);

// 2. Створити об'єкт* user із 3 рівнями вкладеностей (на кожному рівні не менше 3 поля)
// 2.1  Вивести на 2 рівні 1 поле, та на 3 рівні 2 поля в консоль

interface xxx {
    name: string
    id: string
    age: number
    house:{
        square: number
        floors: number
        price: number
        coOwner:{
            name: string
            id: string
            age: number
        }
    }
}

let user: xxx = {
    name:'user',
    id:'12',
    age: 32,
    
    house:{
        square:100,
        floors:2,
        price:10000,

        coOwner:{
            name:'mrX',
            id:'24',
            age:42
        }
    }

}
console.log(user);
console.log(user.house.square);
console.log(user.house.coOwner.name, user.house.coOwner.id);

// 3. Створити масив* list із 3 рівнями вкладеності (на кожному рівні не менше 3 елементів)
// 3.1 Вивести на 2 рівні 1 елемент, та на 3 рівні 2 елемента в консоль

let list:(string|(string|(string|(string|(string)[])[])[])) =['item1','item2','item3',['item4','item5','item6',['item7','item8','item9']]]
console.log(list);
console.log(list[3][0]);
console.log(list[3][3][1], list[3][3][2]);

// 4. Через prompt взяти вік та виконати наступні умови в if else:

let age:number = Number(prompt('enter age'));
console.log(age);

if(age>1&&age<12) {
    console.log('you are child');   
} 
else if(age>=12&&age<18) {
    console.log('you are teenager');
}
else if(age>=18&&age<60) {
    console.log('you are adult person');
}
else if(age>=60) {
    console.log('you are so old');
}

let userName:string | null = prompt('enter name');

if(userName === 'Admin') {
    console.log('I have full access');
} else if(userName === 'Student') {
    console.log('I am Student');
} else if(userName === 'Teacher') {
    console.log('I am Teacher');
} else if(userName === 'Young') {
    console.log('I young and ready to party');
} else {
console.log('You entered own name');
}

