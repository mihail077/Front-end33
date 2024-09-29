import {initCountStore } from '../stor'
import { DIVIDE, MINUS, MINUS10, PLUS, PLUS10, STO, ZERO } from "../../constans/action_types"



export const countReducer = (store = initCountStore, action) => {
     const {count} = store

    switch(action.type) {
        case PLUS: return {...store, count: count + 1}
        case MINUS: return {...store, count: count - 1}
        case PLUS10: return {...store, count: count + 10}
        case MINUS10: return {...store, count: count - 10}
        case DIVIDE: return {...store, count: count / 2}
        case ZERO: return {...store, count: 0}
        case STO: return {...store, count: 100}
        default: return {...initCountStore}
    }
}