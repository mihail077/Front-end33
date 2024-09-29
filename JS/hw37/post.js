// 3. На сторінці posts вивести в html список постів через fetch та XMLHttpRequest. 
// Стилізувати відповідним чином. 
// https://jsonplaceholder.typicode.com/posts

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
        console.log(data);
        return data.json()
    }).then(d => {
        console.log(d)

        const postList = document.getElementById('posst-list')
        d.forEach(post => {
            const listItem = document.createElement('li')
            listItem.innerHTML = `<strong>${post.title}</strong>${post.body}`
            postList.appendChild(listItem)
        });
    })
    
    
    const postRequest = new XMLHttpRequest()
    
    postRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts')
    
    postRequest.send()
    
    postRequest.onload = (data) => {
        console.log(data);
    
        const posts = JSON.parse(data.srcElement.response)
        console.log(posts);
    }