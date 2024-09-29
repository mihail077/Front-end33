// п.1 Використайте всі форми з домашної про форми (в модулі HTML\CSS), та отримайте дані з неї у вигляді об'єкту,
// виведіть об'єкт форми в консоль. Відмініть поведінку за замовчуванням для кнопки submit у формі (Див. лекцію). 

const ot = document.querySelector('.ot')

ot.onclick = (e) => {
    console.log(e);
    console.log(ot.value);
}
ot.oninput = (e) => {
    console.log(e, e.target.value);
}

const xs = document.getElementById('xs')

xs.onclick = (e) => {
    console.log('15w');
    console.log(e);
    console.log(xs.value);
}
xs.oninput = (e) => {
    console.log(e, e.target.value);
}

const s = document.getElementById('s')

s.onclick = (e) => {
    console.log('25w');
    console.log(e);
    console.log(s.value);
}
s.oninput = (e) => {
    console.log(e, e.target.value);
}

const m = document.getElementById('m')

m.onclick = (e) => {
    console.log('65w');
    console.log(e);
    console.log(m.value);
}
m.oninput = (e) => {
    console.log(e, e.target.value);
}

const l = document.getElementById('l')

l.onclick = (e) => {
    console.log('100w');
    console.log(e);
    console.log(l.value);
}
l.oninput = (e) => {
    console.log(e, e.target.value);
}

const xl = document.getElementById('xl')

xl.onclick = (e) => {
    console.log('200w');
    console.log(e);
    console.log(xl.value);
}
xl.oninput = (e) => {
    console.log(e, e.target.value);
}

const sm = document.getElementById('sm')

sm.onclick = (e) => {
    console.log('samsung');
    console.log(e);
    console.log(sm.value);
}
sm.oninput = (e) => {
    console.log(e, e.target.value);
}

const as = document.getElementById('as')

as.onclick = (e) => {
    console.log('asus');
    console.log(e);
    console.log(as.value);
}
as.oninput = (e) => {
    console.log(e, e.target.value);
}

const lg = document.getElementById('lg')

lg.onclick = (e) => {
    console.log('lg');
    console.log(e);
    console.log(lg.value);
}
lg.oninput = (e) => {
    console.log(e, e.target.value);
}

const ln = document.getElementById('ln')

ln.onclick = (e) => {
    console.log('lenovo');
    console.log(e);
    console.log(ln.value);
}
ln.oninput = (e) => {
    console.log(e, e.target.value);
}

const sel = document.getElementById('sel')

sel.onclick = (e) => {
    console.log(e);
    console.log(sel.value);
}
sel.oninput = (e) => {
    console.log(e, e.target.value);
}

const inp = document.getElementById('inp')

inp.onclick = (e) => {
    console.log(e);
    console.log(inp.value);
}
inp.oninput = (e) => {
    console.log(e, e.target.value);
}

const but = document.getElementById('but');

but.onclick = (event) => {
         event.preventDefault()
     }

