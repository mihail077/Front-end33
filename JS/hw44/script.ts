// прототип 

class Prot {
    constructor() {}
}

function Pro(this: any,name: string,age: number) {
    this.name = name
    this.age = age
}

const Animal = {
    name: 'abc',
    run() {
        console.log('i`m run');
    }
}

const AnimalOwner = Object.create(Animal, {
    owner: {
        value:'Sofia'
    }
})
console.log(AnimalOwner.__proto__ === Animal);
AnimalOwner.run()

// фабрика 

class OldCar {
    model: string;
    price = 500;

    constructor(model: string) {
        this.model = model
    }
}

class NewCar {
    model: string;
    price = 5000;

    constructor(model: string) {
        this.model = model
    }
}

class CarFactory {
    static listClasses: any = {
        old: OldCar,
        modern: NewCar
    }

    create(payload: string, type = 'old') {
            const defineClass = CarFactory.listClasses[type];
            return new defineClass(payload)
    }
}
const factoryCar = new CarFactory()

const arrCars = [factoryCar.create('bmw'), factoryCar.create('audi','modern'), factoryCar.create('volga','old')]

arrCars.forEach(cl => {
    console.log(cl.model, cl.price);
})

// одинак

class ConnectDataBase {
    static instance: any
    static isTrue: boolean;
    base;

    constructor(base: string) {

        if (ConnectDataBase.isTrue) {

            return ConnectDataBase.instance
        }

        ConnectDataBase.isTrue = true;

        ConnectDataBase.instance = this;
        this.base = base 
    }

    getDataBase() {
        return this.base
    }

    removeConnect() {

        ConnectDataBase.isTrue = false;
        this.base = ''
    }
}

const sql = new ConnectDataBase('SQL 111')
console.log(sql.getDataBase());

const mongo = new ConnectDataBase('MongoDB')
console.log(mongo.getDataBase());

const post = new ConnectDataBase('PostGress')
console.log(post.getDataBase());

mongo.removeConnect()

const post1 = new ConnectDataBase('PostGress')
console.log(post1.getDataBase());

const sql1 = new ConnectDataBase('SQL 111')
console.log(sql1.getDataBase());

const mongo1 = new ConnectDataBase('MongoDB')
console.log(mongo1.getDataBase());

// Dependency Injection

class A {
    name = 'defg'
    constructor(
        private classB: B
    ) {}

    doWork() {
        this.classB.showName(this.name)
    }
}

class B {
    showName(name: string) {
        console.log(name); 
    }
}

let a = new A(new B())

a.doWork()

// Decorator

interface Component {
    operation(): string;
}

class ConcreteComponent implements Component {
    public operation(): string {
        return 'ConcreteComponent';
    }
}
class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }
    public operation(): string {
        return this.component.operation();
    }
}
class ConcreteDecoratorA extends Decorator {
    
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}
function clientCode(component: Component) {

    console.log(`RESULT: ${component.operation()}`);

}

const simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);