import React from 'react';
import '../../../App.css';
import Cards from '../../Cards';
import HeroSection from '../../HeroSection';

function Home() {
  return (
    <>
      <HeroSection>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <div className="syllable-hero-row">
          <a href="#vacation"><span class="syllable" style={{marginRight: '5em'}}></span></a>
          <span class="syllable" style={{marginRight: '10em'}}></span>
          <span class="syllable"></span>
          <span class="syllable" style={{marginRight: '5em'}}></span>
          <span class="syllable"></span>
          <span class="syllable"></span>
          <div className="hero-btn-row mt-5">
            <button type="button" class="btn btn-outline-primary" style={{width: 100}}>Blog</button>
            <button type="button" class="btn btn-outline-secondary ml-3" style={{width: 100}}>About Us</button>
          </div>
        </div>
      </HeroSection>
      <HeroSection className="bg-white">
        <ScrollAnimation animateIn='bounceInRight'
          animateOut='bounceOutLeft'>
          <h2>
            <a href='https://daneden.github.io/animate.css/'>
              Animate.css
            </a>
          </h2>
        </ScrollAnimation>
      </HeroSection>
    </>
  );
}

export default Home;