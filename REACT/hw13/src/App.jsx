import { Component,PureComponent, useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyRef } from './components/myRef'
import { Cont1 } from './components/Cont1'
import { Cont } from './components/Cont'
import { Portal } from './components/Portal'


export const myContext = createContext()

class App extends PureComponent {

  state = {
    count: 0
  }

  render () {

    return (
      <>
        <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <h3>Vite + React</h3>
        <hr />
        <MyRef/>
        <hr />
        <br />

        <button onClick={() => this.setState({count: this.state.count+1})}>plus</button>
        <button onClick={() => this.setState({count: this.state.count-1})}>minus</button>
        <myContext.Provider value={this.state.count}>
          <Cont1/>
          <Cont/>
        </myContext.Provider>
        <hr />
        <Portal/>
      </>
    )
  }
}

export default App
