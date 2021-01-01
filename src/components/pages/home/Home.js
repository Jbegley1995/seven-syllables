import React from 'react';
import '../../../App.css';
import Cards from '../../Cards';
import HeroSection from '../../HeroSection';
import Footer from '../../Footer';
import Letter from './Letter'

function Home() {
  return (
    <>
      <HeroSection>
        <div className="syllable-hero-row row d-flex">
          <Letter character="I" startingBottomPosition={40} startingLeftPosition ={'5%'} startingRotation={-45}></Letter>
          <h1 className="letter letter-n">N</h1>
          <a href="#vacation"><span class="syllable bg-primary" style={{marginRight: '5em'}}></span></a>
          <h1 className="letter letter-d">D</h1>
          <h1 className="letter letter-i-second">I</h1>
          <span class="syllable bg-primary" style={{marginRight: '10em'}}></span>
          <h1 className="letter letter-v">V</h1>
          <h1 className="letter letter-i-third">I</h1>
          <span class="syllable bg-primary"></span>
          <h1 className="letter letter-d-second">D</h1>
          <h1 className="letter letter-u">U</h1>
          <span class="syllable bg-primary"  style={{marginRight: '5em'}}></span>
          <h1 className="letter letter-a">A</h1>
          <h1 className="letter letter-l">L</h1>
          <span class="syllable bg-primary"></span>
          <h1 className="letter letter-i-fourth">I</h1>
          <h1 className="letter letter-t">T</h1>
          <span class="syllable bg-primary"></span>
          <h1 className="letter letter-y">Y</h1>
        </div>
        <div className="row d-flex">
          <h2 className="mt-5">
            Come see what we're about
          </h2>
        </div>
        <div className="row d-flex">
          <button type="button" class="btn btn-outline-primary" style={{width: 100}}>Blog</button>
          <button type="button" class="btn btn-outline-secondary ml-3" style={{width: 100}}>About Us</button>
        </div>
      </HeroSection>
      <Cards />
    </>
  );
}

export default Home;