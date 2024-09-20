import { GET_POSTS } from "../actions/constant.action";
import { initPostsStore } from "../store";

export const postsReducer = (state = initPostsStore, action) => {
    switch(action.type) {
        case GET_POSTS: return [...state, ...action.payload];
        default: return [...state]
    }
}