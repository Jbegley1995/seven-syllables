import React from 'react';
import './Footer.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons' 

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Want to get in touch?
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>About</Link>
            <Link to='/'>Testimonials</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Se7en Syllables
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Se7en Syllables © 2020</small>
          <div class='social-icons'>
            <Link to='/'><FontAwesomeIcon icon={faFacebook} className="text-white" /></Link>
            <Link to='/'><FontAwesomeIcon icon={faInstagram} className="text-white" /></Link>
            <Link to='/'><FontAwesomeIcon icon={faTwitter} className="text-white" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;