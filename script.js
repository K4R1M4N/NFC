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
        var hamsterImage = document.getElementById("hamster");
        hamsterImage.src = newImageSrc;

        // Добавляем класс для уменьшения размера
        hamsterImage.classList.add("second-image");

        // Меняем текст
        document.getElementById("title").innerText = "Заглушить эту хуйню";

        // Устанавливаем флаг, что это вторая картинка
        isSecondImage = true;
    } else {
        // Если это вторая картинка, переходим в Telegram
        window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=QoeDkDSCgnL"";
    }
}