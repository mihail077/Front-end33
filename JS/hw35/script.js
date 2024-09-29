// п.1  Створіть функцію, яка виводить текст "Hello, World!" в консоль з затримкою у 3 секунди за допомогою setTimeout.
// Опишіть в console.info, як функція виконується асинхронно.

function greetings() {
    setTimeout(() => {
        console.log('Hello world');

        console.info(`Дана функція віконується асинхронно через метод setTimeout, 
        завдяки цьому виконання коду не блокується, а відкладається на три секунди (3000мс).
         Повідомлення 'Hello world' буде виконано асинхронно через 3000 мс, а інший код буде 
         виконуватись відразу без затримки тобто синхронно`)
    }, 3000); 
}

greetings()

// п.2 Створіть промисіфіковані функції, і функцію яка виконує кілька запитів до різних промисифікованих функцій за допомогою
// - Promise.all
// - Promise.allSettled
// - Promice.race
// - Promice.any

function example1() {
       return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('example1')
        }, 2000);
    })   
}
example1().then(data => console.log(data))


function example2() {
    return new Promise((resolve, reject) => {
        resolve('example2')
    })
}
example2().then(data => console.log(data))


function example3() {
    return new Promise((resolve, reject) => {
        resolve('example3')
    })
}
example3().then(data => console.log(data))


function example4() {
    return new Promise((resolve, reject) => {
        reject('example4')
    })
}
example4().catch(data => console.log(data))


Promise.all([example1(), example2(), example3()])
.then(data => console.log(data))

Promise.allSettled([example1(), example2(), example3(), example4()])
.then(data => console.log(data))
.catch(d => console.log(d))

Promise.race([example1(), example2(), example3()])
.then(data => console.log(data))

Promise.any([example1(), example2(), example3()])
.then(data => console.log(data))

// п.3 Використовуючи асинхронний код, напишіть програму, 
// яка виконує певну асинхронну операцію (наприклад, затримка за допомогою setTimeout) декілька разів у циклі.
// Покажіть, як код виконується асинхронно та управляється з використанням:
// - async/await
// - Promise

function delay(ms) { 
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms);
    })
}

async function asDelay() {
    for (let i = 1; i <= 5; i++) {
         const randomDelay = Math.floor(Math.random() * 1000) 
        await delay(randomDelay)
        console.log(`number:  ${i} ,time:  ${randomDelay} ms`);
}
}
asDelay()

// п.4 Створіть анімацію об'єкта на веб-сторінці, використовуючи тільки CSS для анімації (наприклад, @keyframes).
// Потім використайте JavaScript для асинхронного запуску анімації, наприклад, при кліку на кнопку.

const animation = document.getElementById('animation')

function animat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                animation.style.animation = '4s changeColor'
                resolve()
        }, 1000);
    })
}
async function an() {
    await animat()
}