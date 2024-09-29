import { Component } from 'react'

import { USERS } from '../constants/index'

export class Users extends Component {

  state = {
    USERS: USERS.map(user => ({...user,isShow:false}))
  }

  showDetails(id) {
    const {USERS} = this.state

    const user = USERS.find(user => user.id === id)
    user.isShow = !user.isShow

    const indexOfUser = USERS.findIndex(user =>user.id === id)
    USERS.splice(indexOfUser,1,user)
    this.setState({USERS:USERS})
  }

  render() {

    const {USERS} = this.state

    return (<div className='user'>
      <h3>users</h3>
      {
      USERS.map((el,ind) => (
          <div key={ind} className='us'>
            id:{el.id}; name:{el.name}; email:{el.email}
            <div>
              <button onClick={()=>this.showDetails(el.id)}>{el.isShow?'hide details':'show details'}</button>
            </div>
            {
              el.isShow &&
              <div>
              {el.username}
              <br/>
              {el.phone}
            </div>
            } 
          </div>
      ))
    }
      </div>
    )
  }
}