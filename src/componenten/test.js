import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick (!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="Nav">
        <div className="nav-container">
        
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Service
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;



//-----------------APP.js------------------------------------------//

import React from 'react';
import Nav from './componenten/Nav';
import {BrowserRouter as Router, Switch, Route} from
'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <div className='app'>
      <h1>yo</h1>
    </div>
    </>
  );
}

export default App;