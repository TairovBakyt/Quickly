const textElement = document.getElementById('typing-text');
const fullText = "With Quickly, you can get more productive work done in far less time than ever before.";
let index = 0;

function type() {
  if (index < fullText.length) {
    // Добавляем по одной букве
    textElement.innerHTML += fullText.charAt(index);
    index++;
    // Скорость печати (100мс между буквами)
    setTimeout(type, 100); 
  } else {
    // Текст напечатан полностью. Ждем 8 секунд (8000 мс)
    setTimeout(erase, 15000);
  }
}

function erase() {
  // Очищаем текст и индекс
  textElement.innerHTML = "";
  index = 0;
  // Начинаем печатать заново через небольшую паузу
  setTimeout(type, 500);
}

// Запускаем первый раз
type();