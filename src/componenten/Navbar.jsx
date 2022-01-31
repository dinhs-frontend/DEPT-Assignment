import React, {useState} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Nav.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to='/' className='nav-logo' onClick={closeMobileMenu}>
                    DEPT
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i
                        className={click
                            ? 'fas fa-times'
                            : 'fas fa-bars'}/>
                </div>
                <ul
                    className={click
                        ? 'nav-menu active'
                        : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            WERK
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            OVER
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            DIENSTEN
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            PARTNERS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            STORIES
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            VACATURES
                        </Link>
                    </li>

                </ul>

            </div>
        </nav>

    );
}
export default Navbar;