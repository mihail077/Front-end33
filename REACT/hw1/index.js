console.log(222);
const express = require("express")

const app = express()

let countVisit = 0

app.get('/',(res,req) => {
    // console.log(res);
    countVisit++
    console.log('user visit server: ' + countVisit);
    // req.send('hello world')
    req.json('JSON JSON')
})

app.get('/hello', (res,req) => req.send('fdgydhgiuauieh'))

app.post('/data',(res, req) => req.json('DATA'))

app.listen(5000, () => {
    console.log('ura port 5000');
})

