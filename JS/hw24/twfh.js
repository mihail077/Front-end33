// п.1 Створіть клас "Користувач" (User) з властивостями і методами для реєстрації, входу в систему,
// зміну паролю та виходу з сиситеми.

class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email
        this.loggedIn = false;
    }
    signUp(newUsername, newPassword, newEmail) {
        this.username = newUsername;
        this.password = newPassword;
        this.email = newEmail
        console.log("Registration successful.");
    }
    logIn(username, password) {
        if (username === this.username && password === this.password) {
            this.logged_in = true;
            console.log("Login successful.");
        } else {
            console.log("Invalid username or password.");
        }
    }
    changePassword(oldPassword, newPassword) {
        if (oldPassword === this.password) {
            this.password = newPassword;
            console.log("Password changed successfully.");
        } else {
            console.log("Incorrect old password.");
        }
    }
    logOut() {
        this.loggedIn = false;
        console.log("Logged out successfully.");
    }
}

let user1 = new User();

user1.signUp("Mr.Smith", "pasword", "exampl@mail.com");

user1.logIn("Mr.Smith", "pasword");

user1.changePassword("pasword", "newpassword");

user1.logOut();

console.log('------------');

// п.2 Реалізуйте клас "Автомобіль" (Car) з властивостями такими як марка, модель, рік випуску,
// колір та методами для запуску двигуна, зупинки двигуна, зміни швидкості і т.д.

class Car {
    constructor(brand, model, year, color) {
        this.brand = brand
        this.model = model
        this.year = year
        this.color = color
        this.startEngine = false
        this.speed = 0
    }
    engineStarting() {
        if (!this.startEngine) {
            this.startEngine = true
            console.log("Engine started");
        } else {
            console.log("Engine is not started");
        }
    }
    engineStop() {
        if (this.startEngine) {
            this.startEngine = false
            console.log("Engine stoped");
        } else {
            console.log("the engine continues to run");
        }
    }
    accelerate(km) {
        if (this.startEngine) {
            this.speed += km
            console.log(`car speed ${km} km/h`);
        } else {
            console.log("car speed is not change");
        }
    }
    brake(km) {
        if (this.startEngine) {
            this.speed -= km
            console.log(`car speed ${km} km/h`);
        } else {
            console.log("car speed is not change");
        }
    }
    displayInfo() {
        console.log(`brand: ${this.brand}, model: ${this.model}, year: ${this.year}, color: ${this.color}, speed: ${this.speed} km/h`);
    }
}

let myCar = new Car("ford", "mustang", 2020, "yellow")

myCar.engineStarting()
myCar.accelerate(100)
myCar.brake(50)
myCar.displayInfo()
myCar.engineStop()

console.log('------------');

// п.3 Створіть клас "Калькулятор" (Calculator) який може виконувати основні математичні операції (+, -, *, /)

class Calculator {

    add(a, b) {
        console.log(a + b);
    }

    subtract(a, b) {
        console.log(a - b);
    }

    multiplay(a, b) {
        console.log(a * b);
    }

    divide(a, b) {
        if (b == 0) {
            console.log("divide by zero is impossible");
        } else {
            console.log(a / b);
        }
    }
}

let calc = new Calculator()

calc.add(7, 3)
calc.subtract(12, 4)
calc.multiplay(2, 5)
calc.divide(9, 3)
calc.divide(5, 0)

console.log('---------');

// п.4 Зробіть клас "Книга" (Book) з властивостями, такими як назва, автор, жанр та методами
//  для додавання та видалення книги з бібліотеки.

class Book {
    constructor(title, author, genre) {
        this.title = title
        this.author = author
        this.genre = genre
    }  
}
class Library {
    constructor() {
        this.books = []
    }

    addBook(book) {
        this.books.push(book)
        console.log(`Book "${book.title}" by ${book.author} added to the library.`);
    }

    removeBook(title, author) {
        this.books = this.books.filter(book => book.title !== title)
        console.log(`Book "${title}" by ${author} removed from the library`);
    }

    libraryInfo() {
        console.log(`books in the library`);
        this.books.forEach(book => {
            console.log(`title: ${book.title}, author: ${book.author}, genre: ${book.genre}`);  
        });
    }
}
const book1 = new Book('Taras Bulba','Nikolay Gogol','story')
const book2 = new Book('1984','George Orwell','dystopia')
const book3 = new Book('Dandelion Wine','Ray Bradbury','novel')

const readBooks = new Library()

readBooks.addBook(book1)
readBooks.addBook(book2)
readBooks.addBook(book3)
readBooks.libraryInfo()

readBooks.removeBook('1984','George Orwell')
readBooks.libraryInfo()

console.log('------------');

// п.5 Створіть клас "Покупець" (Customer) з методами для додавання товарів до кошика, видалення товарів з кошика
// та офщрмлення замовлення.

class Customer {
    constructor() {
      this.cart = [];
    }
  
    addToCart(item) {
      this.cart.push(item);
      console.log(`${item} - item added to cart`);
    }
  
    removeFromCart(item) {
      const index = this.cart.indexOf(item);
        this.cart.splice(index, 1);
        console.log(`${item} - item removed from cart`);
    }
  
    checkout() {
        console.log("order placed, Thank you");
    }
  }
  
  const client = new Customer();

  client.addToCart("jeans");
  client.addToCart("shoes");
  client.addToCart("shirt");
  client.removeFromCart("shirt");
  client.checkout();

  console.log('---------');

  // п.6 Реалізуйте клас "Банківський рахуно" (BancAccount) з методами для зняття та внесення коштів, 
  // перевірки балансу та переказу коштів на інший рахунок.

  class BankAccount {
    constructor(balance, accountNumber) {
      this.balance = balance
      this.accountNumber = accountNumber
    }
  
    deposit(cash) {
        this.balance += cash;
        console.log(`${cash} $ was deposited into the account.`);
    }
  
    withdraw(cash) {
      if (cash <= this.balance) {
        this.balance -= cash;
        console.log(`${cash} $ was withdrawn from the account.`);
      } else {
        console.log("Not enough cash.");
      }
    }
  
    checkBalance() {
      console.log(`Number account:${this.accountNumber}; Current account balance: ${this.balance} $`);
    }
  
    transfer(cash, recipientAccount) {
      if (cash <= this.balance) {
        this.balance -= cash;
        recipientAccount.balance += cash;
        console.log(`${cash} $ was successfully transferred to the recipient's account.`);
      } else {
        console.log("Not enough cash.");
      }
    }
  }
  
  const account1 = new BankAccount(1000, "account1");
  const account2 = new BankAccount(500, "account2");
  
  account1.checkBalance();
  account2.checkBalance();
  
  account1.deposit(200);
  account1.checkBalance();
  
  account1.withdraw(300);
  account1.checkBalance();
  
  account1.transfer(500, account2);
  account1.checkBalance();
  account2.checkBalance();

  console.log('-----------');

  // п.7 Створіть клас "Команда" (Team) з властивостями, такими як назва, капітан, склад гравців 
  // та методами для додавання та видалення гравців.

  class Team {
    constructor(name, captain) {
      this.name = name;
      this.captain = captain;
      this.players = [];
    }
  
    addPlayer(player) {
      this.players.push(player);
      console.log(`${player} added to the team.`);
    }
  
    removePlayer(player) {
      const index = this.players.indexOf(player);
        this.players.splice(index, 1);
        console.log(`${player} removed from the team.`);
    }

    info() {
        console.log(`team name: ${this.name}`);
        console.log(`team captain: ${this.captain}`);
        console.log('players:');
        this.players.forEach(player => {
        console.log(player);
    })
  }
}
  
  const team1 = new Team("Arsenal", "Martin Odegaard");
  team1.addPlayer("Taylor Foran");
  team1.addPlayer("Keyon Edwards");
  team1.addPlayer("Billy Wiger");
  team1.addPlayer("Josh Robinson");

  team1.removePlayer("Billy Wiger");  
  team1.removePlayer("Josh Robinson");
  team1.info()

  console.log('----------');

  // п.8 Розробіть клас "Співробітник" (Employee) з властивостями, такими як ім'я, посада, зарплата 
  // та методами для підвищеня заплати та зміни посади.

  class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    increaseSalary(money) {
        this.salary += money;
        console.log(`Employee salary ${this.name}, was increased for ${money} $. New salary: ${this.salary}$`);
    }

    changePosition(newPosition) {
        this.position = newPosition;
        console.log(`Employee ${this.name}, transferred to a new position: ${newPosition}.`);
    }
}

const employee1 = new Employee("John Jones", "manager", 5000);

employee1.increaseSalary(1000);
employee1.changePosition("senior manager");

console.log('----------');

// п.9 Створіть клас "Продукт" (Product) з властивостями, такими як назва, ціна, кількість на складі 
// та методами для додавання та видалення продуктів зі складу.

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    addProduct(amount) {
        this.quantity += amount;
        console.log(`Add ${amount} units of product: ${this.name}. Quantity of product in warehouse: ${this.quantity}.`);
    }

    removeProduct(amount) {
            this.quantity -= amount;
            console.log(`Removed ${amount} units of product:  ${this.name}. Quantity of product in warehouse: ${this.quantity}.`);
        }
}
const product1 = new Product("Apple", 200, 100);

product1.addProduct(20);
product1.removeProduct(70);

console.log('----------');

// п.10 Реалізуйте клас "Геометрична фігура" (Shape) з методами для обчислення площі та периметра 
// різних геометричніх фігур, таких як квадрат, коло, трикутник тощо.

class Shape {
    constructor(type, sides) {
        this.type = type;
        this.sides = sides;
    }
  
    calculateArea() {
        let area = 0;
        if (this.type === 'square' && this.sides.length === 1) {
            area = this.sides[0] * this.sides[0];
            console.log('area of the square: ',area);
  
        } else if (this.type === 'circle' && this.sides.length === 1) {
            area = Math.PI * this.sides[0] ** 2;
                   console.log('area of ​​a circle: ',area);
  
        } else if (this.type === 'triangle' && this.sides.length === 3) {
            const [a, b, c] = this.sides;
            const s = (a + b + c) / 2;
            area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
            console.log('area of ​​a triangle: ',area);
        }
    }
  
    calculatePerimeter() {
        let perimeter = 0;
        if (this.type === 'square' && this.sides.length === 1) {
            perimeter = 4 * this.sides[0];
            console.log('perimeter of a square: ',perimeter);
  
        } else if (this.type === 'circle' && this.sides.length === 1) {
            perimeter = 2 * Math.PI * this.sides[0];
            console.log('circle perimeter: ',perimeter);
  
        } else if (this.type === 'triangle' && this.sides.length === 3) {
            perimeter = this.sides[0] + this.sides[1] + this.sides[2];
            console.log('perimeter of triangle: ',perimeter);
  
        }
    }
  }
  const square = new Shape('square', [5]);
  square.calculateArea()
  square.calculatePerimeter()
  
  const circle = new Shape('circle', [3]);
  circle.calculateArea()
  circle.calculatePerimeter()
  
  const triangle = new Shape('triangle', [3, 4, 5]);
  triangle.calculateArea()
  triangle.calculatePerimeter()
  