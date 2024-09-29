import { useState } from 'react'
import HomeworkPage from './components/HomeworkPage'

import Users from './components/Users'
import Posts from './components/Posts'
import Comments from './components/Comments'

import Content from './components/Content'
import './App.css'

function App() {
  
  return (
    
      <div>
        <HomeworkPage/>
        <Users/>
        <Posts/>
        <Comments/>
        <Content/>
      </div>
      
  )
}

export default App
