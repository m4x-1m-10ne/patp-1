
const currentUrl = encodeURIComponent(window.location.href);
const title = encodeURIComponent(document.title);
const description = encodeURIComponent('Изменения с 01 ноября 2025 года в маршруте № 6 «парк «Осановская роща»»');

function shareVK() {
    const url = `https://vk.com/share.php?url=${currentUrl}&title=${title}&description=${description}`;
    window.open(url, '_blank', 'width=600,height=400');
}

function shareOdnoklassniki() {
    const url = `https://connect.ok.ru/offer?url=${currentUrl}&title=${title}`;
    window.open(url, '_blank', 'width=600,height=400');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showCopyNotification();
    }).catch(err => {
        console.error('Ошибка копирования: ', err);
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopyNotification();
    });
}

function showCopyNotification() {
    const notification = document.getElementById('copyNotification');
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}
