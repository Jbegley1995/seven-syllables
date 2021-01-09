import React from 'react';
import '../../../App.css';
import HeroSection from '../../HeroSection';
import ScrollAnimation from 'react-animate-on-scroll';

function Home() {
  return (
    <>
      <HeroSection>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <div className="syllable-hero-row">
          <a href="#about-section"><span class="syllable" style={{marginRight: '5em'}}></span></a>
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
      <HeroSection id="about-section" className="bg-white">
        <ScrollAnimation animateIn='fadeInRight'
          animateOut='fadeOutRight'>
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