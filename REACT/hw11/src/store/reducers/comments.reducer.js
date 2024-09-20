import { GET_COMMENTS } from "../actions/constant.action";
import { initCommentsStore } from "../store";

export const commentsReducer = (state = initCommentsStore, action) => {
    switch(action.type) {
        case GET_COMMENTS: return [...state, ...action.payload];
        default: return [...state]
    }
}