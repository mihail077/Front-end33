import {combineReducers, configureStore} from '@reduxjs/toolkit'

import posts from './slice/posts.slice'
import users from './slice/users.slice'
import comments from './slice/comments.slice'

const rootReducer = combineReducers({posts, comments, users})

export const myToolkitStore = configureStore({
    reducer: rootReducer
})