// 1.  Використайте дз із теми: Запити на бекенд.

// 2. Типізуйте запити на бекенд, використовуючи інтерфейси
// (по можливості застосуйте енамки).

// 3. Типізуйте решту частину ДЗ

//3. Із списку endpoints (APIs) https://reqres.in/ - виберіть 3 запити на метод GET

interface UserData {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
  interface UserData2 {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string
  }

fetch('https://reqres.in/api/users?page=2')
.then(data => data.json())
.then((data: UserData) => document.getElementById('get1')!.textContent = JSON.stringify(data))
.then(data => console.log(data))

fetch('https://reqres.in/api/users/2')
.then(data => data.json()) 
.then((data: UserData )=> document.getElementById('get2')!.textContent = JSON.stringify(data))
.then(data => console.log(data))

fetch('https://reqres.in/api/unknown/2')
.then(data => data.json())
.then((data: UserData2) => document.getElementById('get3')!.textContent = JSON.stringify(data))
.then(data => console.log(data))

//  4. Із списку endpoints (APIs) https://reqres.in/ - виберіть 3 запити на метод POST

interface Users {
    name: string;
    job: string;
    id: string;
    createdAT: string
}
interface Register {
    id: number;
    token: string
}
interface Login {
    token:string
}

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
.then((data: Users) => document.getElementById('pos1')!.textContent = JSON.stringify(data))
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
.then((data: Register) => document.getElementById('pos2')!.textContent = JSON.stringify(data))
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
.then((data: Register) => document.getElementById('pos3')!.textContent = JSON.stringify(data))
.then(data => console.log(data))

// 5. Із списку endpoints (APIs) https://reqres.in/ - виберіть 1 запит на метод PATCH
// (Запит повинен виконуватись після кліку на кнопку)

enum CodeName {
    NAME = 'morpheus'
}
interface User {
    name: CodeName;
    job: string;
    updatedAt: string
}

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
.then(data => data.json())
.then((data: User) => document.getElementById('pat')!.textContent = JSON.stringify(data))
.then(data => console.log(data))
}

// 6. Із списку endpoints (APIs) https://reqres.in/ - виберіть 1 запит на метод DELETE
// (Запит повинен виконуватись після кліку на кнопку)

function delet(): void {
    fetch('https://reqres.in/api/users/2', {
    method: 'DELETE'
})
.then(data => document.getElementById('del')!.textContent = 'User deleted')
}
