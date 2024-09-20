import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension'
import {thunk} from 'redux-thunk'

import { usersReducer } from './reducers/users.reducer';
import { postsReducer } from './reducers/posts.reducer';
import { commentsReducer } from './reducers/comments.reducer';

const reducers = combineReducers ({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
})

export const myOwnStore = legacy_createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
