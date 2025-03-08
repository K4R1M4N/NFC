var imageIndex = 8166; // Начальный индекс картинки
var isSecondImage = false; // Флаг для отслеживания второй картинки

function changeImageAndText() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    }

    if (!isSecondImage) {
        // Меняем картинку на вторую
        imageIndex++; // Увеличиваем индекс на 1
        var newImageSrc = "images/IMG_" + imageIndex + ".png";
        document.getElementById("hamster").src = newImageSrc;

        // Меняем текст
        document.getElementById("title").innerText = "Заглушить эту хуйню";

        // Устанавливаем флаг, что это вторая картинка
        isSecondImage = true;
    } else {
        // Если это вторая картинка, переходим в Telegram
        window.location.href = "https://t.me/afevrnc";
    }
}
