// п.1 Створити 2 кубіка, при кліку на перший: другий повинен змінювати свій колір на рандомний

const firstKub = document.getElementsByClassName('firstKub')[0]

firstKub.style.width = '100px'
firstKub.style.height = '100px'
firstKub.style.border = '2px solid black'
firstKub.style.margin = '10px'

const secondKub = document.createElement('div')

secondKub.style.width = '100px'
secondKub.style.height = '100px'
secondKub.style.border = '2px solid black'
secondKub.style.margin = '10px'

document.body.appendChild(secondKub)

console.log([firstKub]);
console.log([secondKub]);

firstKub.onclick = function () {
    
    const red = Math.round(Math.random()*255)
    const green = Math.round(Math.random()*255)
    const blue = Math.round(Math.random()*255)

    secondKub.style.backgroundColor = `rgb(${red}, ${green}, ${blue})` 
}

// п.2 Створити текстовий блок, при спробі його скопіювати покажіть користувачу вікно "Текст неможливо скопіювати!!"

let notCopy = document.querySelector('p')

notCopy.oncopy = ($event) => {
    $event.preventDefault()
    console.log($event);
    console.log(document.getSelection().toString());

    alert('COPY TEXT IS IMPOSSIBLE')
}

// п.3 Створити кубік 100х100 який міняє свій колір в залежності від того на яких координатах ви знаходитесь 
// (r - X координата, g - Y координата, b - середнє арифметичне X+Y/2).

const colorCube = document.getElementById('colorCube')
console.log([colorCube]);

document.onmousemove = (event) => {

    const x = event.clientX; 
    const y = event.clientY; 
    const red = x % 255;  
    const green = y % 255; 
    const blue = Math.floor((x + y) / 2) % 255;

    colorCube.style.backgroundColor = `rgb(${red}, ${green}, ${blue})` 
}

// п.4 Створіть 3 кубіка один в одному які будуть при кліку виводити щось про себе в консоль (аналогічно лекції).

const kubik1 = document.getElementById('kubik1')
const kubik2 = document.createElement('div')
kubik2.style.width = '150px'
kubik2.style.height = '150px'
kubik2.style.backgroundColor = 'yellow'
kubik1.appendChild(kubik2)

const kubik3 = document.createElement('div')
kubik3.style.width = '100px'
kubik3.style.height = '100px'
kubik3.style.backgroundColor = 'blue'
kubik2.appendChild(kubik3)

kubik1.onclick = (event) => {
    console.log('kubik1', event)
    event.stopPropagation();
};
kubik2.onclick = (event) => {
    console.log('kubik2', event)
    event.stopPropagation();
};
kubik3.onclick = (event) => {
    console.log('kubik3', event)
    event.stopPropagation();
};
