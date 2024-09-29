import React, { useState } from 'react'
// 
import { Comments } from './components/Comments'
import { Users } from './components/Users'
import { Posts } from './components/Posts'
import {Images} from './components/Images'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
    <Header/>
    <Content/>
    <Footer/>
      </div>
    
    )
  }
}

 class Header extends React.Component {
  render() {
    return (<div className='header'>
      <mark>header</mark>
      <h2>React</h2>
      <h3>The library for web and native user interfaces</h3>
      </div>
    )
  }
}

class Content extends React.Component {
  render() {
    return (
    <div className='content'>
      <mark>content</mark>
      <Users/>
      <Posts/>
      <Comments/>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (<div className='footer'>
      <mark>footer</mark>
      <Images/>
      </div>
    )
  }
}

export default App
