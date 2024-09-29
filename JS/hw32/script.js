// п.1 Створити промпт при заповненні якого вас перенаправляє на сайт який був введений в промпті.

let url = prompt('enter site address')

//window.location.href = url

window.open(url) 

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

// п.4 Створити функцію яка через рест оператор приймає довільну кількість аргументів
// та ітерацією показує їх в масиві.

function restFn(...n) {
    n.forEach(el => console.log(el))
    console.log(n);
}

restFn(11, 22, 33, 44, 55, 66, 77)

// п.5 Створити довільний об'єкт та масив, вставити через спред оператор їх в інший об'єкт, масив.

let arr1 = [1, 2, 3, 4]

let arr2 = [...arr1, 5, 6, 7]

console.log(arr2);

let obj1 = {
    name: 'Petro',
    age: 22
}

let obj2 = {...obj1, city: 'Kiyv', id: 555}

console.log(obj2);

// п.6 Дано об'єкт, через деструктиризацію дістати: name, isCar, salary, location, a

let object = {
    name: 'fgf',
    age: 33,
    isCar: true,
    job: {
        position: 'dsgs',
        salary: 'ddd',
        location: 'dgsgsg',
        career: {
            a: 1
        }
}
 }

 let {name, isCar, job:{salary, location: loc, career:{a}}} = object

 console.log(name, isCar, salary, loc, a);

 // п.7 Дано масив, через деструктиризацію дістати: 'fgf', true, 'ddd', 'dgsgsg', 1

let array = ['fgf', 33, true, ['dsgs', 'ddd', 'dgsgsg', [1]]]

let [first, , third, [ , fifth, sixth, [seventh]]] = array

console.log(first, third, fifth, sixth, seventh);