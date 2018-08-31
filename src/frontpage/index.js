import React from 'react';

/**
 * Frontpage screen.
 * @author Johan Svensson
 */
export default class FrontpageScreen extends React.Component {
  render() {
    return (
      <div>
        <h1 className="hero-header">
          <span className="behind">Welcome to the official webpage of</span>Teknikum's FRC Team #6819 Viking Robotics
        </h1>
        <img className="hero-image" src={require('../assets/viking.png')}
          alt="Viking Robotics logo" />
      </div>
    )
  }
}