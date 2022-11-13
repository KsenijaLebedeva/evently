import React from 'react';
import logo from '../logo.png';
const Header = () =>{
    return  <header className="App-header">
    <div className="container">
      <nav>
        <div className="app-logo"><img src={logo}/></div>
        <div className="nav-list">
          <ul>
            <li><a href="/map">Map</a></li>
            <li>Events</li>
            <li><input className="search" type="text" placeholder="Search.."></input></li>
          </ul>
        </div>
        <div className="log-reg">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </nav>
    </div>
  </header>
}

export default Header;