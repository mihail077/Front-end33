// п.1 Зміна стилю елементу: Створіть HTML-сторінку з декількома елементами, такими як кнопки або тексти.
// Використовуючи JavaScript, змініть стиль одного або декількох елементів 
// (наприклад, колір фону або розмір шрифту).


let greet = document.getElementById('greet')
greet.style.fontSize = '40px'
greet.style.color = 'blue'

let but = document.getElementsByClassName('color');
but[0].style.backgroundColor = 'green'
but[1].style.backgroundColor = 'red'

// п.2 Зміна текстового вмісту: Створіть елементи, які містять текст. 
// За допомогою JavaScript, змініть текстовий вміст одного або декількох елементів.

let text = document.getElementsByTagName('p')
console.log(text[1].innerText);
text[1].innerText = 'Hello world'
console.log(text[1].innerText);

// п.3 Додавання нового елементу: За допомогою JavaScript,
// додайте 3 нові елемент до DOM-структури.

let addEl = document.getElementById('addEl')

const tagDiv = document.createElement('div')
tagDiv.innerText = 'adding elements'
console.log(tagDiv);
const tagH = document.createElement('h3')
tagH.innerText = 'glad to see you'
console.log(tagH);
const tagMark = document.createElement('mark')
tagMark.innerText = 'Have a good day'
console.log(tagMark);

greet.appendChild(tagDiv)
addEl.appendChild(tagH)
addEl.appendChild(tagMark)

// п.4 Видалення елементу: За допомогою JavaScript, видаліть декілька елементів з DOM.

addEl.removeChild(tagH)
greet.removeChild(tagDiv)

let removeP = document.getElementById('text')
removeP.remove()

// п.5 Зміна атрибутів: Створіть елементи, які мають атрибути 
// (наприклад, "src" для зображення або "href" для посилання).
// За допомогою JavaScript, змініть атрибути цих елементів.

let link = document.querySelector('a');

link.href = 'newexampl';

// п.6 Сортування списку: Створіть список (наприклад, список <ul>) з декількома пунктами. 
// Використовуючи JavaScript, відсортуйте цей список в алфавітному порядку.

let list = document.getElementById("myList");

        let items = list.getElementsByTagName("li");

        let itemsArray = Array.from(items);

        itemsArray.sort(function(a, b) {
            return a.innerHTML.localeCompare(b.innerHTML);
        });

        itemsArray.forEach(function(item) {
            list.appendChild(item);
        })

// п.7 Зміна порядку елементів: Створіть декілька елементів. За допомогою JavaScript,
// змініть порядок цих елементів в DOM.

const parentEl = document.getElementById('changingEl')

const element1 = document.createElement('div')
element1.innerText = 'element 1'
console.log(element1);

const element2 = document.createElement('div')
element2.innerText = 'element 2'
console.log(element2);

const element3 = document.createElement('div')
element3.innerText = 'element 3'
console.log(element3);

parentEl.appendChild(element1)
parentEl.appendChild(element2)
parentEl.appendChild(element3)

parentEl.insertBefore(element2,element1)
parentEl.insertBefore(element3,element2)
       
// п.8 Видалення дочірніх елементів: Створіть батьківський елемент, який містить декілька дочірніх елементів.
// Використовуючи JavaScript, видаліть всі дочірні елементи цього батьківського елемента.

let parent = document.getElementById('parentElement')

let child = parent.querySelectorAll('div')

child.forEach(el => {
    parent.removeChild(el)
});

// п.9 Зміна класів: Створіть сторінку з елементами, які мають CSS-класи. За допомогою JavaScript, 
// змініть класи цих елементів без використання подій.

console.log(greet.classList);
console.log(greet.className);

greet.classList.add('addClass')
greet.classList.replace('addClass','changClass')

addEl.classList.add('addClass')
addEl.classList.remove('addClass')

console.log(greet.classList);
console.log(greet.className);

// п.10 Зміна HTML-структури: Створіть сторінку з деревом DOM-структури. 
// Використовуючи JavaScript, змініть HTML-структуру шляхом додавання нових елементів,
// переміщення або видалення існуючих елементів.

let container = document.getElementById('container');

const item1 = document.createElement('div')
item1.innerText = '1el'
console.log(item1);
const item2 = document.createElement('div')
item2.innerText = '2el'
console.log(item2);
const item3 = document.createElement('div')
item3.innerText = '3el'
console.log(item3);
const item4 = document.createElement('div')
item4.innerText = '4el'
console.log(item4);
const item5 = document.createElement('div')
item5.innerText = '5el'
console.log(item5);

container.appendChild(item1)
container.appendChild(item2)
container.appendChild(item3)
container.appendChild(item4)
container.appendChild(item5)

container.insertBefore(item5, item4)

container.removeChild(item2)
container.removeChild(item3)

let del = document.getElementById('first')
container.removeChild(del)

let third = document.getElementById('third')
let newText = document.createElement('div')
newText.innerText = 'new text '

container.replaceChild(newText, third)

