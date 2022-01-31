import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        DEPT
                    </p>
                </section>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <Link to='/'>WORK</Link>

                    </div>
                    <div class='footer-link-items'>
                        <Link to='/'>SERVICE</Link>

                    </div>

                    <div class='footer-link-items'>
                        <Link to='/'>STORIES</Link>

                    </div>
                    <div class='footer-link-items'>
                        <Link to='/'>ABOUT</Link>

                    </div>
                    <div class='footer-link-items'>
                        <Link to='/'>CAREERS</Link>

                    </div>
                    <div class='footer-link-items'>
                        <Link to='/'>CONTACT</Link>

                    </div>
                </div>
                <section class='social-media'>
                    <div class='social-media-wrap'>
                        <div class='footer-logo'></div>
                        <div class='social-icons'>
                            <Link
                                class='social-icon-link facebook'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'>
                                <i class='fab fa-facebook-f'/>
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'>
                                <i class='fab fa-twitter'/>
                            </Link>
                            <Link
                                class='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'>
                                <i class='fab fa-instagram'/>
                            </Link>

                        </div>
                    </div>
                </section>
            </div>
            <small class='website-rights'>©2020 Dept Agency</small>
        </div>
    );
}

export default Footer;