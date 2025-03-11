var imageIndex = 1; // Начальный индекс картинки (1.png)
var isSecondImage = false; // Флаг для отслеживания второй картинки

function changeImageAndText() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play(); // Запускаем музыку при первом нажатии
    }

    if (!isSecondImage) {
        // Меняем картинку на вторую
        var newImageSrc = "images/last.pic." + imageIndex + ".png"; // Путь к второй картинке
        var hamsterImage = document.getElementById("hamster");
        hamsterImage.src = newImageSrc;

        // Добавляем класс для уменьшения размера
        hamsterImage.classList.add("second-image");

        // Меняем текст
        document.getElementById("title").innerText = "Заглушить эту хуйню";

        // Устанавливаем флаг, что это вторая картинка
        isSecondImage = true;

        // Делаем картинку не кликабельной на 2 секунды
        hamsterImage.style.pointerEvents = "none"; // Отключаем клики
        setTimeout(function() {
            hamsterImage.style.pointerEvents = "auto"; // Включаем клики через 2 секунды
        }, 2000);
    } else {
        // Если это вторая картинка, перенаправляем в Telegram
        window.location.href = "https://t.me/afevrnc";
    }
}