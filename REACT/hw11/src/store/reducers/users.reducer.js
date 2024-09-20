import { GET_USERS } from "../actions/constant.action";
import { initUsersStore } from "../store";

export const usersReducer = (state = initUsersStore, action) => {
    switch(action.type) {
        case GET_USERS: return [...state, ...action.payload];
        default: return [...state]
    }
}