import { createSlice } from "@reduxjs/toolkit";
import {getComments} from '../../api/comments.api'

const comments = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {
        get_comments: (store, {payload}) => payload
    }
})

const { get_comments } = comments.actions

export const getAsyncComments = () => dispatch => {
    getComments().then(response => {
        console.log(response);
        dispatch(get_comments(response))
        
    })
}

export default comments.reducer