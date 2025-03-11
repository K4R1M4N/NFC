// Воспроизводим музыку сразу при загрузке страницы
document.getElementById("audio").play();

// Через 3 секунды показываем вторую картинку и меняем текст
setTimeout(function() {
    document.getElementById("title").innerText = "Заглушить эту хуйню";
    document.getElementById("secondImage").style.display = "block";
}, 3000);

// Функция для перехода в Telegram
function redirectToTelegram() {
    window.location.href = "https://t.me/afevrnc";
}