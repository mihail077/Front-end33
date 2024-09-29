// п.1 Створити кубік 50х50px червоного кольору із текстом Hello через js.

let kubik = document.getElementById('kubik')

let newKubik = document.createElement('div')
newKubik.style.width = '50px'
newKubik.style.height = '50px'
newKubik.style.backgroundColor = 'red'
newKubik.innerText = 'Hello'
kubik.appendChild(newKubik)

// п.2 Створити кубік 100х100px який буде кожного разу рандомного кольору,
// який буде містити текст який написав юзер в prompt.

let text = prompt('Enter text')

let kub = document.getElementById('kub')

let newKub = document.createElement('div')
newKub.style.width = '100px'
newKub.style.height = '100px'
newKub.innerText = text

setInterval(() => {
    const red = Math.round(Math.random()*255)
    const green = Math.round(Math.random()*255)
    const blue = Math.round(Math.random()*255)

   newKub.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    
}, 2000);

kub.appendChild(newKub)

// п.3 Створити круг який при відкритті буде кожні 2сек робити відступ з ліва на 15px (лише 10 разів).

const circle = document.getElementById('circle')

let newCircle = document.createElement('div')
newCircle.style.width = '100px'
newCircle.style.height = '100px'
newCircle.style.borderRadius = '50px'
newCircle.style.border = '2px solid black'
newCircle.style.backgroundColor = 'yellow'

let moveLeft = 0
let count = 0
    
setInterval(() => {

    if (count < 10) {
        moveLeft += 15;
        newCircle.style.marginLeft = `${moveLeft}px`;
        count++;
        const red = Math.round(Math.random()*255)
    const green = Math.round(Math.random()*255)
    const blue = Math.round(Math.random()*255)

   newCircle.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    } 
}, 2000);

circle.appendChild(newCircle)

// п.4 Створити 3 HTML елемента, отримати їх в js, засетати класи та id які завчасно простилізовані в css.
// Кожні 3сек видаляти/додавати класи та id в елементи.

const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')

const newElement1 = document.createElement('div')
const newElement2 = document.createElement('div')
const newElement3 = document.createElement('div')

newElement1.classList.add('k1')
newElement2.classList.add('k2')
newElement3.classList.add('k3')

element1.appendChild(newElement1)
element2.appendChild(newElement2)
element3.appendChild(newElement3)

let flag = false

setInterval(() => {
    
    if (flag) {
        element1.id = '';
        element2.id = '';
        element3.id = '';
        newElement1.classList.add('k1')
        newElement2.classList.add('k2')
        newElement3.classList.add('k3')
    } else {
        element1.id = 'element1';
        element2.id = 'element2';
        element3.id = 'element3';
        newElement1.classList.remove('k1');
        newElement2.classList.remove('k2');
        newElement3.classList.remove('k3');
    }

        flag = !flag;

}, 3000);



