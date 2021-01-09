import React from 'react';
import '../App.css';
import './HeroSection.css';

class HeroSection extends React.Component {
  render() {
    return (
      <div id={this.props.id} className={`hero-container ${this.props.className}`} >
          {this.props.children}
      </div>
    )
  }
}

export default HeroSection;