// п.2 В окремому HTML\JS файликах створіть функціонал використовуючи всі івенти які ми вивчали,підключайте івенти 
// 3 способами.

const text = document.querySelector('.text')
text.oncopy = () => {
    console.log('you copied text');
    console.log(document.getSelection().toString());
}
text.oncut = () => {
    console.log('element is cut out');
}

const rectangle = document.getElementById('rectangle')
rectangle.onmousedown = () => {
    console.log('Mouse button down');
}

rectangle.onmouseup = () => {
    console.log('Mouse button up');
}

rectangle.onmouseenter = () => {
    console.log('rectangle entrance');
}

rectangle.onmouseleave = () => {
    console.log('exit from  rectangle');
}

rectangle.onmousemove = () => {
    console.log('cursor moves');
}

const int = document.getElementById('int')
const but = document.getElementById('but')

int.onpaste = () => {
    console.log('you inserted text');
}
int.oninput = () => {
    console.log('data received');
}

int.onchange = () => {
    console.log('data changed');
}

but.addEventListener('click',() => {console.log('Thank you');})

document.onkeydown = (event) => {
    console.log('down', event.key);
}

document.onkeyup = (event) => {
    console.log('up', event.key);
}

const kub = document.getElementById('kub')
const kubik1 = document.querySelector('.kubik1')
const kubik2 = document.querySelector('.kubik2')

kub.addEventListener('click',() => {
    console.log('kub', );
    event.stopPropagation();
})

kubik1.addEventListener('click',() => {
    console.log('kubik1', );
    event.stopPropagation();
})

kubik2.addEventListener('click',() => {
    console.log('kubik2', );
    event.stopPropagation();
})

const lorem = document.getElementById('lorem')

lorem.oncopy = () => {
    event.preventDefault()
    console.log('copying blocked');
}

lorem.onpaste =() => {
    event.preventDefault()
    console.log('onpaste blocked');
}

lorem.oncut =() => {
    event.preventDefault()
    console.log('oncut blocked');
}

document.addEventListener('scroll',() => {
    console.log('scroll');
})