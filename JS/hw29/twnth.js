const area1 = document.getElementById('area1');
const keyBoard = document.getElementById('keyBoard');
const area2 = document.getElementById('area2');
const area3 = document.getElementById('area3');

let activeArea

function addElement(el) {
  if (activeArea) {
    activeArea.value += el;
  }
}

function clearArea() {
    if (activeArea) {
      activeArea.value = '';
    }
}

area1.onclick = () => {
    keyBoard.style.display = 'block'
    activeArea = area1
}

area2.onclick = () => {
    keyBoard.style.display = 'block'
    activeArea = area2
}

area3.onclick = () => {
  keyBoard.style.display = 'block'
  activeArea = area3
}

document.body.onclick = (event) => {
    if(event.target !== area1 && event.target !== area2 && event.target !== area3) {
        keyBoard.style.display = 'none'
    }
}

keyBoard.onclick = (event) => {
    event.stopPropagation()
}
  

