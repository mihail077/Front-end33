import { createSlice } from "@reduxjs/toolkit";
import {getUsers} from '../../api/users.api'

const users = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        get_users: (store, {payload}) => payload
    }
})

const { get_users } = users.actions

export const getAsyncUsers = () => dispatch => {
    getUsers().then(response => {
        console.log(response);
        dispatch(get_users(response))
        
    })
}

export default users.reducer