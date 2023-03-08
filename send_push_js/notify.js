let button = document.getElementById('btn');

let title = 'Collection Alert!'
let = message = 'You have a collection to do'
let url = 'https://www.google.com'

const ShowNotification = (title, message, click_url) => {
    const notification = new Notification(title, {
        body: message,
        icon: 'bell-icon.png'
    });

    setTimeout(() => {
        notification.close();
    }, 10 * 1000); //(10 * 1000) = 10sec

    notification.addEventListener('click', () => {
        window.open(click_url, '_blank');
    });
}

button.addEventListener('click', () => {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted'){
            ShowNotification(title, message, url)
        }
        else if(perm === 'denied'){
            showError()
        }
    })
})