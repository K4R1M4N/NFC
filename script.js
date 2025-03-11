var imageIndex = 2; // Начальный индекс картинки (last.pic.1.png)
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

        // Меняем текст
        document.getElementById("title").innerText = "Нажми, чтобы заглушить\nэтот шедевр";

        // Устанавливаем флаг, что это вторая картинка
        isSecondImage = true;

        // Делаем картинку не кликабельной на 2 секунды
        hamsterImage.style.pointerEvents = "none"; // Отключаем клики
        setTimeout(function() {
            hamsterImage.style.pointerEvents = "auto"; // Включаем клики через 2 секунды
        }, 2000);
    } else {
        // Если это вторая картинка, перенаправляем в Telegram
        window.location.href = "https://t.me=afevrnc"; // Ссылка для открытия в приложении
    }
}