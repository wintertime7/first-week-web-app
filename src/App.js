// Main imports
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Style imports
import './style/App.css'

//Components
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <div className='content'>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/about'><About /></Route>
            <Route path='/contact'><Contact /></Route>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  )
}

export default App
