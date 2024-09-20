import {GET_POSTS } from "./constant.action";
import {getPosts as backEndPosts } from '../../api/posts.api'

export const getPosts = (payload) => ({type:GET_POSTS, payload})

export const fetchPosts = () => (dispatch) => {
    backEndPosts().then(posts => dispatch(getPosts(posts)))
}