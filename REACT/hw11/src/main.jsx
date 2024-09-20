import { createRoot } from 'react-dom/client'
import App from './pages/app/App.jsx'
import './index.css'

import {Provider} from 'react-redux'
import {myOwnStore}   from './store'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { Users } from './pages/users/Users.jsx'
import { Posts } from './pages/posts/Posts.jsx'
import { Comments } from './pages/comments/Comments.jsx'
import { Error } from './pages/error/Error.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={myOwnStore}> 
    <BrowserRouter>
        
      <Routes>
        <Route path='/' Component={App}/>
        <Route path='/users' Component={Users}/>
        <Route path='/posts' Component={Posts}/>
        <Route path='/comments' Component={Comments}/>
        <Route path='*' Component={Error}/>
      </Routes>

    </BrowserRouter>
  </Provider>  
)
