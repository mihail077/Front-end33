// прототип 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Prot = /** @class */ (function () {
    function Prot() {
    }
    return Prot;
}());
function Pro(name, age) {
    this.name = name;
    this.age = age;
}
var Animal = {
    name: 'abc',
    run: function () {
        console.log('i`m run');
    }
};
var AnimalOwner = Object.create(Animal, {
    owner: {
        value: 'Sofia'
    }
});
console.log(AnimalOwner.__proto__ === Animal);
AnimalOwner.run();
// фабрика 
var OldCar = /** @class */ (function () {
    function OldCar(model) {
        this.price = 500;
        this.model = model;
    }
    return OldCar;
}());
var NewCar = /** @class */ (function () {
    function NewCar(model) {
        this.price = 5000;
        this.model = model;
    }
    return NewCar;
}());
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    CarFactory.prototype.create = function (payload, type) {
        if (type === void 0) { type = 'old'; }
        var defineClass = CarFactory.listClasses[type];
        return new defineClass(payload);
    };
    CarFactory.listClasses = {
        old: OldCar,
        modern: NewCar
    };
    return CarFactory;
}());
var factoryCar = new CarFactory();
var arrCars = [factoryCar.create('bmw'), factoryCar.create('audi', 'modern'), factoryCar.create('volga', 'old')];
arrCars.forEach(function (cl) {
    console.log(cl.model, cl.price);
});
// одинак
var ConnectDataBase = /** @class */ (function () {
    function ConnectDataBase(base) {
        if (ConnectDataBase.isTrue) {
            return ConnectDataBase.instance;
        }
        ConnectDataBase.isTrue = true;
        ConnectDataBase.instance = this;
        this.base = base;
    }
    ConnectDataBase.prototype.getDataBase = function () {
        return this.base;
    };
    ConnectDataBase.prototype.removeConnect = function () {
        ConnectDataBase.isTrue = false;
        this.base = '';
    };
    return ConnectDataBase;
}());
var sql = new ConnectDataBase('SQL 111');
console.log(sql.getDataBase());
var mongo = new ConnectDataBase('MongoDB');
console.log(mongo.getDataBase());
var post = new ConnectDataBase('PostGress');
console.log(post.getDataBase());
mongo.removeConnect();
var post1 = new ConnectDataBase('PostGress');
console.log(post1.getDataBase());
var sql1 = new ConnectDataBase('SQL 111');
console.log(sql1.getDataBase());
var mongo1 = new ConnectDataBase('MongoDB');
console.log(mongo1.getDataBase());
// Dependency Injection
var A = /** @class */ (function () {
    function A(classB) {
        this.classB = classB;
        this.name = 'defg';
    }
    A.prototype.doWork = function () {
        this.classB.showName(this.name);
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.showName = function (name) {
        console.log(name);
    };
    return B;
}());
var a = new A(new B());
a.doWork();
var ConcreteComponent = /** @class */ (function () {
    function ConcreteComponent() {
    }
    ConcreteComponent.prototype.operation = function () {
        return 'ConcreteComponent';
    };
    return ConcreteComponent;
}());
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this.component = component;
    }
    Decorator.prototype.operation = function () {
        return this.component.operation();
    };
    return Decorator;
}());
var ConcreteDecoratorA = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorA, _super);
    function ConcreteDecoratorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorA.prototype.operation = function () {
        return "ConcreteDecoratorA(".concat(_super.prototype.operation.call(this), ")");
    };
    return ConcreteDecoratorA;
}(Decorator));
var ConcreteDecoratorB = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorB, _super);
    function ConcreteDecoratorB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorB.prototype.operation = function () {
        return "ConcreteDecoratorB(".concat(_super.prototype.operation.call(this), ")");
    };
    return ConcreteDecoratorB;
}(Decorator));
function clientCode(component) {
    console.log("RESULT: ".concat(component.operation()));
}
var simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');
var decorator1 = new ConcreteDecoratorA(simple);
var decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);
