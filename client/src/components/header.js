import React from 'react';

const Header = () =>{
    return   <header className="App-header">
    <div className="container">
      <nav>
        <div className="app-logo">EVENTLY</div>
        <div className="nav-list">
          <ul>
            <li>Map</li>
            <li>Events</li>
            <li><input type="text" placeholder="Search.."></input></li>
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