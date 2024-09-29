// Имитация рандомного выбора значений для слотов
function getRandomValue() {
    // Здесь можно задать ваши изображения или текстовые значения
    const symbols = ['🍒', '🍊', '🍋', '🍇', '🍉'];
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Получение элементов слотов и кнопки
const slots = document.querySelectorAll('.slot');
const playButton = document.getElementById('playButton');

// Обработчик нажатия на кнопку "Играть"
playButton.addEventListener('click', () => {
    // Заполняем каждый слот случайным значением
    slots.forEach(slot => {
        slot.textContent = getRandomValue();
    });

    // Проверяем, все ли слоты совпали
    if (slots[0].textContent === slots[1].textContent && slots[1].textContent === slots[2].textContent) {
        alert('Поздравляем! Вы выиграли!');
    } else {
        alert('Увы, вы проиграли. Попробуйте еще раз!');
    }

    // TODO: Сохранение результатов в историю (можно использовать localStorage или отправлять на сервер)
});




        

    



