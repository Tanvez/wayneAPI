import React, { Component } from 'react'
import './style.css'
import '../public/fonts/stylesheet.css'

import NavBar from './components/Navbar'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <div className="appContainer2">
          <nav className="draw">
            <NavBar />
          </nav>
          
              <div className= "appContainer2 animate draw"> Upload possible Villian</div>
              
              <Form/>
           
          
        </div>
      </div>
    )
  }
}

export default App
