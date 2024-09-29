import { createStore, legacy_createStore } from 'redux'

import { countReducer } from './reducers/counter.reducer'

export const myStore = legacy_createStore(countReducer)