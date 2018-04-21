import React, { PureComponent } from 'react'
import './style.css'


class NavBar extends PureComponent {
  render() {
    return (
      <header className="header">
        <ul className="main-nav">
          <li><a>WAYNE CORP</a></li>
        </ul>
      </header>
    )
  }
}

export default NavBar
