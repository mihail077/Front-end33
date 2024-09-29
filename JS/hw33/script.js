// п.1 Перепишіть колбек функцію з пари, додавши додаткову функціональнісь:

// додайте API з можливістю реєстрації юзера (лоігка дз: auth => login => admin Instruction => Admin Content).

// юзери повинні бути записані у вигляді масиву об'єктів, для кожного юзера при реєстрації створюйте токен 


// Backend

let users = [
    { name: 'A', pass: 123},
    { name: 'B', pass: 123},
    { name: 'C', pass: 123}
];

token = null

function loginAPI(loginData, cb) {
    setTimeout(() => {
        const foundUser = users.find(user => user.name === loginData.name && user.pass === loginData.pass);

        if (foundUser) {
            token = Math.random()
            cb(null, token);
        } else {
            cb('Error: credentions is not correct', null);
        }
    }, 500);
}

function userAPI(dataUser, cb) {
    setTimeout(() => {
        const userInstruction = 'user instruction';

        if (dataUser.token === token && dataUser.name != 'A') {
            cb(null, userInstruction);
        } 
    }, 500);
}

function userContentAPI(dataUser, cb) {
    setTimeout(() => {
        const contentUser = 'user content';

        if (dataUser.token === token && dataUser.name != 'A') {
            cb(null, contentUser);
        } else {
            cb('Error: you not have admin rules for get content admin', null);
        }
    }, 1000);
}

function adminAPI(dataAdmin, cb) {
    setTimeout(() => {
        const adminInstruction = 'admin instruction';

        if  (dataAdmin.token === token && dataAdmin.name === 'A') {
            cb(null, adminInstruction);
        } else {
            cb('Error: you not have admin rules', null);
        }
    }, 1000);
}

function adminContentAPI(dataAdmin, cb) {
    setTimeout(() => {
        const contentAdmin = 'admin content';

        if (dataAdmin.token === token && dataAdmin.name === 'A') {
            cb(null, contentAdmin);
        } else {
            cb('Error: you not have admin rules for get content admin', null);
        }
    }, 1000);
}

// Frontend

let userData = { name: prompt('enter name'), pass: 123 };

loginAPI(userData, (error, accessToken) => {
    if (!error) {
        console.log('You are logged');
        let userAdmin = {token: accessToken, name: userData.name}

        userAPI(userAdmin, (err, userInst) => {
            if (!err) {
                console.log('You instructions: ', userInst, userAdmin.name);
            }
        });

        userContentAPI(userAdmin, (errAdCont, userContent) => {
            if (!errAdCont) {
                console.log('You content: ', userContent);
            }
        });

        adminAPI(userAdmin, (errorAdmin, adminInst) => {
            if (!errorAdmin) {
                console.log('You instructions: ', adminInst);

                adminContentAPI(userAdmin, (errAdCont, adminContent) => {
                    if (!errAdCont) {
                        console.log('You content: ', adminContent);
                    } else {
                        console.log(errAdCont);
                    }
                });
            } else {
                console.log(errorAdmin);
            }
        });
    } else {
        console.log(error);
    }
});

