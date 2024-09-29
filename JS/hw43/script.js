// 1.  Використайте дз із теми: Запити на бекенд.
fetch('https://reqres.in/api/users?page=2')
    .then(function (data) { return data.json(); })
    .then(function (data) { return document.getElementById('get1').textContent = JSON.stringify(data); })
    .then(function (data) { return console.log(data); });
fetch('https://reqres.in/api/users/2')
    .then(function (data) { return data.json(); })
    .then(function (data) { return document.getElementById('get2').textContent = JSON.stringify(data); })
    .then(function (data) { return console.log(data); });
fetch('https://reqres.in/api/unknown/2')
    .then(function (data) { return data.json(); })
    .then(function (data) { return document.getElementById('get3').textContent = JSON.stringify(data); })
    .then(function (data) { return console.log(data); });
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'morpheus',
        job: 'leader'
    })
})
    .then(function (data) { return data.json(); })
    .then(function (data) { return document.getElementById('pos1').textContent = JSON.stringify(data); })
    .then(function (data) { return console.log(data); });
fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "pistol"
    })
})
    .then(function (data) { return data.json(); })
    .then(function (data) { return document.getElementById('pos2').textContent = JSON.stringify(data); })
    .then(function (data) { return console.log(data); });
fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    })
})
    .then(function (data) { return data.json(); })
    .then(function (data) { return document.getElementById('pos3').textContent = JSON.stringify(data); })
    .then(function (data) { return console.log(data); });
// 5. Із списку endpoints (APIs) https://reqres.in/ - виберіть 1 запит на метод PATCH
// (Запит повинен виконуватись після кліку на кнопку)
var CodeName;
(function (CodeName) {
    CodeName["NAME"] = "morpheus";
})(CodeName || (CodeName = {}));
function update() {
    fetch('https://reqres.in/api/users/2', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: CodeName.NAME,
            job: 'zion resident'
        })
    })
        .then(function (data) { return data.json(); })
        .then(function (data) { return document.getElementById('pat').textContent = JSON.stringify(data); })
        .then(function (data) { return console.log(data); });
}
// 6. Із списку endpoints (APIs) https://reqres.in/ - виберіть 1 запит на метод DELETE
// (Запит повинен виконуватись після кліку на кнопку)
function delet() {
    fetch('https://reqres.in/api/users/2', {
        method: 'DELETE'
    })
        .then(function (data) { return document.getElementById('del').textContent = 'User deleted'; });
}
