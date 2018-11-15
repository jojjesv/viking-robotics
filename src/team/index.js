import React from 'react';

import './styles.scss';


/**
 * A screen for displaying team members.
 * @author Johan Svensson
 */
export default class TeamScreen extends React.Component {
  componentDidMount() {
    document.title = "Team - #6819 Viking Robotics";
  }

  render() {
    return (
      <div>
        <div id="team-hero">
          <div className="bg"></div>
          <img className="cover-image" alt="Team" src={require('../assets/team_hero.jpg')} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <h1 className="heading" style={{ margin: 0, marginBottom: 36 }}>Meet the Vikings</h1>
          </div>
        </div>

        <div id="groups">
          <div className="group-container" style={{ background: '#2E7D32' }}>
            <div className="group" style={{ background: '#2E7D32' }}>
              <div className="photo-container">
                <div className="curtains"></div>
                <img alt="Designers" src={require('../assets/team/designers.jpeg')} />
              </div>
              <h2 className="caption">Design</h2>
              <p className="names"><span>Axel Löfqvist</span>, <span>William Johansson</span></p>
              <p className="names">In front: <span>Ebba Jönsson</span>, <span>Ebba Bergström</span>, <span>Viktor Syrén</span>, <span>Daniel Odelgård</span></p>
            </div>
          </div>

          <div className="group-container" style={{ background: '#56378e' }}>
            <div className="group" style={{ background: '#56378e' }}>
              <div className="photo-container">
                <div className="curtains"></div>
                <img alt="Designers" src={require('../assets/team/manufacturers.jpeg')} />
              </div>
              <h2 className="caption">Manufacturing</h2>
              <p className="names">Left to right: <span>Louise Lindgren</span>,  <span>Gordon Brattborn</span>,  <span>Jennifer Quick</span>, <span>Melker Nilsson</span>, <span>Emrik Hoberg</span>, <span>Gordon Brattborn</span></p>
            </div>
          </div>

          <div className="group-container" style={{ background: 'rgb(151, 49, 86)' }}>
            <div className="group" style={{ background: 'rgb(151, 49, 86)' }}>
              <div className="photo-container">
                <div className="curtains"></div>
                <img alt="Designers" src={require('../assets/team/programmers.jpeg')} />
              </div>
              <h2 className="caption">Programming</h2>
              <p className="names">Left to right: <span>Anton Danielsson</span>, <span>Viktor Loby</span>, <span>Joel Dahl</span>, <span>Alfons Flystam</span>, <span>Erik Lagergren</span></p>
              <p className="names">Absent: <span>Carl Borslöv</span></p>
            </div>
          </div>
        </div>
      </div >
    )
  }
}