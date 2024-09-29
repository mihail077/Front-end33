import { Component } from "react";
import {USERS} from '../constans/index'


export class Users extends Component {

    render() {
        return (
            <div>          
                2. Створити 3 компоненти Users, Posts, Comments
                Скопіювати дані (10 об'єктів) в масив із:
                 https://jsonplaceholder.typicode.com/users
                <br/>
                https://jsonplaceholder.typicode.com/posts
                <br/>
                https://jsonplaceholder.typicode.com/comments
                <br/>
                 Проітерувати відповідні скопійовані масиви у відповідній компоненті 
                 <br/>
                 <h3>компонента Users</h3>
       
                    {
                        USERS.map(el => {
                        return(
                        <div key={el.id} style={{padding:'15px',border:'1px solid red',margin:'15px'}}>
                        {el.id} - {el.name} - {el.email}
                        </div>
                        )
                        })    
                    }
            </div>
        )
    }
}
export default Users
