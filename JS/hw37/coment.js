// 4. На сторінці comments вивести в html список коментарів через fetch та XMLHttpRequest. 
// Стилізувати відповідним чином. 
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(data => {
    console.log(data);
    return data.json()
}).then(d => {
    console.log(d)

    const commentList = document.getElementById('coment-list')
    d.forEach(coment => {
        const listItem = document.createElement('li')
        listItem.innerHTML = `<strong>${coment.name}</strong> ${coment.body}`
        commentList.appendChild(listItem)
    });
})


const commentsRequest = new XMLHttpRequest()

commentsRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments')

commentsRequest.send()

commentsRequest.onload = (data) => {
    console.log(data);

    const comments = JSON.parse(data.srcElement.response)
    console.log(comments);
}