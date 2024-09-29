// п. 1 Використайте всі форми з домашної про форми (в модулі HTML\CSS), та отримайте дані з неї у вигляді об'єкту,
// виведіть об'єкт форми в консоль. Відмініть поведінку за замовчуванням для кнопки submit у формі (Див. лекцію). 

const brand = document.getElementById('brand')

brand.onclick = (e) => {
    console.log(e);
    console.log(brand.value);
}
brand.oninput = (e) => {
    console.log(e, e.target.value);
}

const year = document.getElementById('year')

year.onclick = (e) => {
    console.log(e);
    console.log(year.value);
}
year.oninput = (e) => {
    console.log(e, e.target.value);
}

const sedan = document.getElementById('sedan')

sedan.onclick = (e) => {
    console.log('sedan');
    console.log(e);
    console.log(sedan.value);
}
sedan.oninput = (e) => {
    console.log(e, e.target.value);
}

const hatchback = document.getElementById('hatchback')

hatchback.onclick = (e) => {
    console.log('hatchback');
    console.log(e);
    console.log(hatchback.value);
}
hatchback.oninput = (e) => {
    console.log(e, e.target.value);
}

const universal = document.getElementById('universal')

universal.onclick = (e) => {
    console.log('universal');
    console.log(e);
    console.log(universal.value);
}
universal.oninput = (e) => {
    console.log(e, e.target.value);
}

const engine = document.getElementById('engine')

engine.onclick = (e) => {
    console.log(e);
    console.log(engine.value);
}
engine.oninput = (e) => {
    console.log(e, e.target.value);
}

const capacity = document.getElementById('capacity')

capacity.onclick = (e) => {
    console.log(e);
    console.log(capacity.value);
}
capacity.oninput = (e) => {
    console.log(e, e.target.value);
}

const sub3 = document.getElementById('sub3');

sub3.onclick = (event) => {
         event.preventDefault()
     }

