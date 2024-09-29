// 2. На сторінці users вивести в html список юзерів через fetch та XMLHttpRequest. 
// Стилізувати відповідним чином. 
// https://jsonplaceholder.typicode.com/users

fetch('https://jsonplaceholder.typicode.com/users')
.then(data => {
    console.log(data);
    return data.json()
}).then(d => {
    console.log(d)
    const userList = document.getElementById('user-list')
        
        d.forEach(user => {
            const listItem = document.createElement('li')
            listItem.textContent = `${user.name}, ${user.email}, ${user.phone}, ${user.address.city}`
            userList.appendChild(listItem)
        });
    })
    

    const usersRequest = new XMLHttpRequest()

usersRequest.open('GET', 'https://jsonplaceholder.typicode.com/users')

usersRequest.send()

usersRequest.onload = (data) => {
    console.log(data);

    const users = JSON.parse(data.srcElement.response)
    console.log(users);
}
