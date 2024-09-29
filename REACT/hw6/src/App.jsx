import { useState } from 'react'
import myImg from './assets/reactjs_javascript_library_atom_atomic_react-512.webp'
import { Wrapper } from './components/Wrapper'

import './App.css'

function App() {

  return (
    
      <div>
      <img src={myImg} alt="logo" />
      <hr />
      <br/>
      <Wrapper/>

      </div>
      
  )
}

export default App
