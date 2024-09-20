import {GET_COMMENTS } from "./constant.action";
import {getComments as backEndComments } from '../../api/comments.api'

export const getComments = (payload) => ({type:GET_COMMENTS, payload})

export const fetchComments = () => (dispatch) => {
    backEndComments().then(comments => dispatch(getComments(comments)))
}