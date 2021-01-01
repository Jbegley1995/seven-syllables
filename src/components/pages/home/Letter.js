import React from 'react';

class Letter extends React.Component {
    render() {
      const character = this.props.character;
      const startingTopPosition = this.props.startingTopPosition;
      const startingLeftPosition = this.props.startingLeftPosition;
      const startingBottomPosition = this.props.startingBottomPosition;
      const startingRightPosition = this.props.startingRightPosition;
      const startingRotation = this.props.startingRotation;

      return (
        <h1 className="letter" 
            style={{
                top: startingTopPosition, 
                left: startingLeftPosition, 
                bottom: startingBottomPosition, 
                right: startingRightPosition, 
                transform: `rotate(${startingRotation}deg)`
            }}>{character}</h1>
      );
    }
  }

export default Letter;