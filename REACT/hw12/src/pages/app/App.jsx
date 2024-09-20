import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

import {Link} from 'react-router-dom'

import '../../App.css'

function App() {

  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h3>Vite + React</h3>
      <hr />
      <Link to = '/users'>
        users
      </Link>

      <Link to = '/posts'>
        posts
      </Link>

      <Link to = '/comments'>
        comments
      </Link>
      
    </>
  )
}

export default App
