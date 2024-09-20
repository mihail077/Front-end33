import {GET_USERS } from "./constant.action";
import {getUsers as backEndUsers } from '../../api/users.api'

export const getUsers = (payload) => ({type:GET_USERS, payload})

export const fetchUsers = () => (dispatch) => {
    backEndUsers().then(users => dispatch(getUsers(users)))
}