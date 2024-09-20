import { createSlice } from "@reduxjs/toolkit";
import {getPosts} from '../../api/posts.api'

const posts = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        get_posts: (store, {payload}) => payload
    }
})

const { get_posts } = posts.actions

export const getAsyncPosts = () => dispatch => {
    getPosts().then(response => {
        console.log(response);
        dispatch(get_posts(response))
        
    })
}

export default posts.reducer