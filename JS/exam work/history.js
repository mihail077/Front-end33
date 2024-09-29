let historyList = document.getElementById('historyList');
let history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

function renderHistory() {
    historyList.innerHTML = '';
    for (let { totalResult, timeDate } of history) {
        let li = document.createElement('li');
        li.innerHTML = `<span>${totalResult}</span><span>${timeDate}<span>`;
        historyList.appendChild(li);
    }
}

function clearHistory() {
    localStorage.removeItem('calculatorHistory');
    history = [];
    renderHistory();
}

function goBack() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', renderHistory);