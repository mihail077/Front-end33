import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



import { Plus, Minus, Plus10, Minus10, Divide, Zero, Sto } from './components'

import Count from './components/Count'

import './App.css'

function App() {

  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h3>Vite + React</h3>

      <hr />

      <div>
        <Count/>
        <Plus/>
        <Minus/>
        <Plus10/>
        <Minus10/>
        <Divide/>
        <Zero/>
        <Sto/>
      </div>
      
    </>
  )
}

export default App
