import React from 'react';
import '../App.css';
import './HeroSection.css';

class HeroSection extends React.Component {
  render() {
    return (
      <div className='hero-container'>
          {this.props.children}
      </div>
    )
  }
}

export default HeroSection;