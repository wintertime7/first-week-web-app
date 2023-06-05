// Main imports
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './style/App.css'

//Components
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <div className='content'>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/about'><About /></Route>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  )
}

export default App
