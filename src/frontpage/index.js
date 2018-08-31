import React from 'react';

import './styles.scss';

/**
 * Frontpage screen.
 * @author Johan Svensson
 */
export default class FrontpageScreen extends React.Component {
  render() {
    return (
      <div>
        <section id="hero">
          <h1 id="hero-header">
            <span className="behind">Welcome to the official webpage of</span><br />
            Teknikum's FRC Team <span className="team-number">#6819</span> Viking Robotics
        </h1>
          <img id="hero-image" src={require('../assets/viking.png')}
            alt="Viking Robotics logo" />

          <p id="hero-quote">
            <i className="quote">
              “The best thing about FRC is the chance to team up with other equally dedicated friends, to work towards a common goal and utilize your creativity, all outside the usual school boundaries. This is more than a school assignment, we are doing something for real.”
            </i>
            (Anton Wikström, team member Viking Robotics)
          </p>
        </section>

        <section id="gallery">
          <div className="bg-shape"></div>
          <img className="item" src={require('../assets/bild3.jpg')} alt="Team working on our test robot." />
          <h2 className="caption">Team working on our test robot.</h2>
        </section>

        <section>
          <h2 className="heading">
            What's FRC, you say?
          </h2>
          <div id="video-container">
            <iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/VREYn9Keg0I"
              frameborder="0" allow="autoplay; encrypted-media"
              allowfullscreen>
            </iframe>
          </div>
        </section>

        <section className="padded">
          <h2 className="heading">
            So join our team!
          </h2>
          <h3 id="we-subheading">
            We...
          </h3>
          <ul id="we-like">
            <li>
              <span className="check"></span><span className="text">like robots</span>
            </li>
            <li>
              <span className="check"></span><span className="text">build robots</span>
            </li>
            <li>
              <span className="check"></span><span className="text">program robots</span>
            </li>
            <li>
              <span className="check"></span><span className="text">like to have fun</span>
            </li>
            <li>
              <span className="check"></span><span className="text">want you to join us!</span>
            </li>
          </ul>

          <p style={{ marginTop: 36 }}>
            All Teknikum students are welcome to join our team. Just send us an ✉️:<br/>
            <a className="email">vikingrobotics.teknikum@gmail.com</a>
          </p>
        </section>
      </div>
    )
  }
}