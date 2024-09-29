// 1. Зробити сторінку із довільним контентом і переходами на 3 сторінки:
// users
// posts
// comments



// // 2. На сторінці users вивести в html список юзерів через fetch та XMLHttpRequest. 
// // Стилізувати відповідним чином. 
// // https://jsonplaceholder.typicode.com/users

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(data => {
//     console.log(data);
//     return data.json()
// }).then(d => {
//     console.log(d)
//     const userList = document.getElementById('user-list')
        
//         d.forEach(user => {
//             const listItem = document.createElement('li')
//             listItem.textContent = `${user.name} (${user.email}), ${user.phone}, ${user.address.city}`
//             userList.appendChild(listItem)
//         });
//     })
    

//     const usersRequest = new XMLHttpRequest()

// usersRequest.open('GET', 'https://jsonplaceholder.typicode.com/users')

// usersRequest.send()

// usersRequest.onload = (data) => {
//     console.log(data);

//     const users = JSON.parse(data.srcElement.response)
//     console.log(users);
// }


// 3. На сторінці posts вивести в html список постів через fetch та XMLHttpRequest. 
// Стилізувати відповідним чином. 
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(data => {
//         console.log(data);
//         return data.json()
//     }).then(d => {
//         console.log(d)

//         const postList = document.getElementById('posst-list')
//         d.forEach(post => {
//             const listItem = document.createElement('li')
//             listItem.innerHTML = `<strong>${post.title}</strong>${post.body}`
//             postList.appendChild(listItem)
//         });
//     })
    
    
//     const postRequest = new XMLHttpRequest()
    
//     postRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts')
    
//     postRequest.send()
    
//     postRequest.onload = (data) => {
//         console.log(data);
    
//         const posts = JSON.parse(data.srcElement.response)
//         console.log(posts);
//     }

// // 4. На сторінці comments вивести в html список коментарів через fetch та XMLHttpRequest. 
// // Стилізувати відповідним чином. 
// // https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(data => {
//     console.log(data);
//     return data.json()
// }).then(d => {
//     console.log(d)

//     const commentsList = document.getElementById('coment-list')
//     d.forEach(coment => {
//         const listItem = document.createElement('li')
//         listItem.innerHTML = `<strong>${coment.name}</strong> ${coment.body}`
//         commentsList.appendChild(listItem)
//     });
// })


// const commentsRequest = new XMLHttpRequest()

// commentsRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments')

// commentsRequest.send()

// commentsRequest.onload = (data) => {
//     console.log(data);

//     const comments = JSON.parse(data.srcElement.response)
//     console.log(comments);
// }