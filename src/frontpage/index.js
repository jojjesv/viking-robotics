import React from 'react';

import './styles.scss';

const links = {
  facebook: 'https://www.facebook.com/VikingRoboticsFRC6819/'
};

/**
 * Frontpage screen.
 * @author Johan Svensson
 */
export default class FrontpageScreen extends React.Component {
  componentDidMount() {
    require('./facebook_feed').initFeed(() => {
      debugger;
    })
  }

  render() {
    return (
      <div>
        <section id="hero">
          <h1 id="hero-header">
            <span className="behind">Welcome to the official webpage of</span><br />
            Teknikum's FRC Team <span className="team-number">#6819</span> Viking Robotics
        </h1>
          <div id="left-side">
            <img id="hero-image" src={require('../assets/viking.png')}
              alt="Viking Robotics logo" />

            <p id="hero-quote">
              <i className="quote">
                “The best thing about FRC is the chance to team up with other equally dedicated friends, to work towards a common goal and utilize your creativity, all outside the usual school boundaries. This is more than a school assignment, we are doing something for real.”
            </i>
              (Anton Wikström, team member Viking Robotics)
          </p>
          </div>
          <div id="facebook-feed" class="fb-page" data-href={links.facebook}
            data-tabs="timeline" data-small-header="false"
            data-adapt-container-width="true" data-hide-cover="false"
            data-show-facepile="true">
            <blockquote cite={links.facebook}
              class="fb-xfbml-parse-ignore">
              <a href={links.facebook}>Loading our Facebook feed</a>
              <div style={{ position: 'relative' }}>
              </div>
            </blockquote>
          </div>
        </section>

        <section id="gallery" className="full-width">
          <div className="bg-shape"></div>
          <div className="item-container">
            <img className="item" src={require('../assets/bild3.jpg')} alt="Team working on our test robot." />
          </div>
          <h2 className="item-caption">#6819, the first FRC team from Sweden, builds their test robot.</h2>
        </section>

        <section className="full-width">
          <h2 className="heading">
            What's FRC, you say?
          </h2>
          <div id="video-container">
            <iframe id="video" width="100%" height="100%"
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
              <span className="check"></span><span className="text">like robots 🤖</span>
            </li>
            <li>
              <span className="check"></span><span className="text">build robots 🔧</span>
            </li>
            <li>
              <span className="check"></span><span className="text">program robots ⌨️</span>
            </li>
            <li>
              <span className="check"></span><span className="text">like to have fun 🎉</span>
            </li>
            <li>
              <span className="check"></span><span className="text">want you to join us! 💪</span>
            </li>
          </ul>

          <p style={{ marginTop: 36 }}>
            All Teknikum students are welcome to join our team. Just send us an ✉️:<br />
            <input type="email" className="email" value="vikingrobotics.teknikum@gmail.com"
              readOnly={true} style={{ width: 290 }} />
          </p>
        </section>
      </div>
    )
  }
}