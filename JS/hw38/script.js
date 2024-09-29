//3. Із списку endpoints (APIs) https://reqres.in/ - виберіть 3 запити на метод GET

fetch('https://reqres.in/api/users?page=2')
.then(data => data.json())
.then(data => document.getElementById('get1').textContent = JSON.stringify(data))
.then(data => console.log(data))

fetch('https://reqres.in/api/users/2')
.then(data => data.json()) 
.then(data => document.getElementById('get2').textContent = JSON.stringify(data))
.then(data => console.log(data))

fetch('https://reqres.in/api/unknown/2')
.then(data => data.json())
.then(data => document.getElementById('get3').textContent = JSON.stringify(data))
.then(data => console.log(data))

//  4. Із списку endpoints (APIs) https://reqres.in/ - виберіть 3 запити на метод POST

fetch('https://reqres.in/api/users',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'morpheus',
        job: 'leader'
    })
})
.then(data => data.json())
.then(data => document.getElementById('pos1').textContent = JSON.stringify(data))
.then(data => console.log(data))


fetch('https://reqres.in/api/register',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "pistol"
    })
})
.then(data => data.json())
.then(data => document.getElementById('pos2').textContent = JSON.stringify(data))
.then(data => console.log(data))


fetch('https://reqres.in/api/login',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    })
})
.then(data => data.json())
.then(data => document.getElementById('pos3').textContent = JSON.stringify(data))
.then(data => console.log(data))

// 5. Із списку endpoints (APIs) https://reqres.in/ - виберіть 1 запит на метод PATCH
// (Запит повинен виконуватись після кліку на кнопку)

function update() {
    fetch('https://reqres.in/api/users/2', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'morpheus',
        job: 'zion resident'
    })
})
.then(data => data.json())
.then(data => document.getElementById('pat').textContent = JSON.stringify(data))
.then(data => console.log(data))

}

// 6. Із списку endpoints (APIs) https://reqres.in/ - виберіть 1 запит на метод DELETE
// (Запит повинен виконуватись після кліку на кнопку)

function delet() {
    fetch('https://reqres.in/api/users/2', {
    method: 'DELETE'
})
.then(data => document.getElementById('del').textContent = 'User deleted')
}
