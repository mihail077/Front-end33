// п.1 Створити промпт при заповненні якого вас перенаправляє на сайт який був введений в промпті.

let url = prompt('enter site address')

//window.location.href = url

// п.2 Створити функцію яка буде показувати на екрані геолокацію та url шлях сайту.

function showLocationAndURL() {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log('geolocation: ', position)
    }) 

     let currentURL = window.location.href;
     console.log('URL: ', currentURL);
}

showLocationAndURL();

// п.3 Створити стрім із мікро і відео

const vid = document.getElementById('vvv')

navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(data => {
    vid.srcObject = data
    vid.play()
    console.log(data)
})
