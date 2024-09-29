// п.1 Використайте всі форми з домашної про форми (в модулі HTML\CSS), та отримайте дані з неї у вигляді об'єкту,
// виведіть об'єкт форми в консоль. Відмініть поведінку за замовчуванням для кнопки submit у формі (Див. лекцію)


const nameId = document.getElementById('name')

nameId.onclick = (e) => {
    console.log(e);
    console.log(nameId.value);
}
nameId.oninput = (e) => {
    console.log(e, e.target.value);
}

const password = document.getElementById('password')

password.onclick = (e) => {
    console.log(e);
    console.log(password.value);
}
password.oninput = (e) => {
    console.log(e, e.target.value);
}

const repeat = document.getElementById('repeat')

repeat.onclick = (e) => {
    console.log(e);
    console.log(repeat.value);
}
repeat.oninput = (e) => {
    console.log(e, e.target.value);
}

const date = document.getElementById('date')

date.onclick = (e) => {
    console.log(e);
    console.log(date.value);
}
date.oninput = (e) => {
    console.log(e, e.target.value);
}

const radio = document.querySelector('.radio')
const m = document.getElementById('m')
const w = document.getElementById('w')

radio.onclick = (e) => {
    console.log(e);
}
radio.oninput = (e) => {
    console.log(e, e.target.value);
}
m.onclick = () => {
    console.log('man');
}
w.onclick = () => {
    console.log('woman');
}

const age = document.getElementById('age')

age.onclick = (e) => {
    console.log(e);
    console.log(age.value);
}
age.oninput = (e) => {
    console.log(e, e.target.value);
}

const description = document.getElementById('description')

description.onclick = (e) => {
    console.log(e);
    console.log(description.value);
}
description.oninput = (e) => {
    console.log(e, e.target.value);
}

const sub = document.getElementById('sub');

sub.onclick = (event) => {
         event.preventDefault()
     }



