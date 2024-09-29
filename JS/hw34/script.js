// Перепишіть домашнє завдання з попередньої лекції, але промісифікуючи функції, та через 
// обробники промісів.

// Backend

const users = [{login: 'aaa', pass: 11111, isAdmin: false}, {login: 'aaa',pass: 11111, isAdmin: true}]

function authAPI(userData) {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
        if (userData.login.length >= 3 && userData.pass.length >= 5) {
        const newUser ={
            login: userData.login,
            pass: userData.pass,
            token: null,
            isAdmin: Math.random() > 0.5
        }
        users.push(newUser)
        resolve(`user ${newUser.login} was added success`)
    } else {
        reject('so easy login or password try again')
    }
    }, 1000);
    })
}

function loginAPI(userCred) {
    return new Promise ((resolve, reject) => {
       setTimeout(() => {
        const foundedUserInd = users.findIndex( user => userCred.login === user.login && userCred.pass === user.pass)
    if (foundedUserInd >= 0) {
        const createToken = Math.random()
        users[foundedUserInd].token = createToken
        resolve(createToken)
    } else {
        reject('incorrect login or password, you are not an admin')
    }
    }, 500);  
    })
}

function adminAPI(userCred) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        const adminInstraction = 'adminInstraction'
        const loggedAdmin = users.some(user => userCred.login === user.login && userCred.token === user.token && user.isAdmin)
    if (loggedAdmin) {
        resolve(adminInstraction)
    } else {
        reject('you are not admin or you are not logged')
    }
    }, 300);
    })   
}

function adminContAPI(adminCred) {
    return new Promise ((resolve, reject) => {
       setTimeout(() => {
        const contentAdmin = 'contentAdmin'
        const loggedAdmin = users.some(user => adminCred.login === user.login && adminCred.token === user.token && user.isAdmin)
        if (loggedAdmin) {
            resolve(contentAdmin)
        } else {
            reject('you are not admin or you are not logged')
        }
    }, 500);   
    })
}

// Frontend 

 let frontToken 

 const isAuth = confirm('want auth?')

  if (isAuth) {
      const userDataAuth = prompt('enter login & pass').split(' ')

authAPI({login: userDataAuth[0], pass: userDataAuth[1]})
    .then((data) => {
        console.log(data);
         return loginAPI({login: userDataAuth[0], pass: userDataAuth[1]})
    }).then(token => {
        console.log(token);
        frontToken = token
        return adminAPI({login: 'aaa',token: frontToken})
    }).then(adminInstraction => {
        console.log(adminInstraction);
        return adminContAPI({login: 'aaa',token: frontToken})
    }).then(contentAdmin => {
        console.log(contentAdmin)
    }).catch(err => {
        console.log(err)
    }).finally(() => {
        console.log('request finished');
    })
 } else {
    console.log('you are not auth');
 }



