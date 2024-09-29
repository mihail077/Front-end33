let display = document.getElementById('display');
let history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

let calculator = document.getElementById('calculator');
let drag = document.getElementById('drag');


function clearDisplay() {
    display.value = '';
}

function deleteNumber() {
    display.value = display.value.slice(0, -1);
}

function appendValue(val) {
    display.value += val;
}

function calculate() {
        let result = eval(display.value)
        addHistory(display.value,result)
        display.value = result
 }

function addHistory(data, result) {
    let timeDate = new Date().toLocaleString();
    let totalResult = `${data} = ${result}`;
    history.push({ totalResult, timeDate });
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
}

 function calculateFunction(func) {
    let value = parseFloat(display.value);
    switch (func) {
        case 'x²':
            display.value = Math.pow(value, 2);
            break;
        case '√':
            display.value = Math.sqrt(value);
            break;
        case 'sin':
            display.value = Math.sin(value);
            break;
        case 'cos':
            display.value = Math.cos(value);
            break;
    }
    addHistory(`${func}(${value})`,display.value);
}

function historyPage() {
    window.location.href = 'history.html';
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if(event.key.startsWith('F')) {
        return
    }

    if (/\d/.test(key) || key === '.') {
        appendValue(key);
    }

    if (['+', '-', '*', '/'].includes(key)) {
        appendValue(key);
    }

    if (key === 'Enter' || key === '=') {
        calculate();
    }

    if (key === 'Escape') {
        clearDisplay();
    }

    if (key === 'Backspace') {
        deleteNumber();
    }
});

drag.addEventListener('mousedown', function(e) {
    let shiftX = e.clientX - calculator.getBoundingClientRect().left;
    let shiftY = e.clientY - calculator.getBoundingClientRect().top;

    function moveCalculator(pageX, pageY) {
        calculator.style.left = pageX - shiftX + 'px';
        calculator.style.top = pageY - shiftY + 'px';
    }

    function mouseMove(event) {
        moveCalculator(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', mouseMove);

    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', mouseMove);
    }, { once: true });
});

drag.ondragstart = function() {
    return false;
};

