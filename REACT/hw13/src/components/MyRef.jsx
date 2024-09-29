import { Component,PureComponent, createRef } from "react";
import { getUserById } from "../api/users.api";

 export class MyRef extends PureComponent {

        inputRef = createRef();
        state = {
          user: null
        };

    fetchUser = () => {
        const userId = this.inputRef.current.value; 
    
        getUserById(userId)
          .then((data) => {
            this.setState({ user: data });
          })
      };

    render () {
        const { user } = this.state;

        return (
            <>
                <h3>myRef component</h3>

                <input type="number" ref={this.inputRef} placeholder="enter user id" />
                <button onClick={this.fetchUser}>get data</button>

                {user && (
                <div>
                    <p>user: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>phone: {user.phone}</p>
                </div>
                )}
            </>
        )
    }
}