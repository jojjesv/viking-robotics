import React from 'react';

import './styles.scss';

const team = [{
  name: 'Member 1',
  role: 'CAD',
  roleIcon: require('../assets/team/icons/ic_programming.png'),
  image: require('../assets/team/oscar.JPG'),
  email: 'jojjedeveloper@gmail.com'
}, {
  name: 'Member 1',
  role: 'Programmering',
  roleIcon: require('../assets/team/icons/ic_programming.png'),
  image: require('../assets/team/viktor.JPG'),
  email: 'jojjedeveloper@gmail.com'
}]

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
        <div className="padded">
          <ul id="team-list">
            {
              team.map((member, i) => (
                <li className="member" key={i.toString()}>
                  <div className="picture" style={{
                    backgroundImage: `url(${member.image})`
                  }}></div>
                  <div className="about">
                    <h2 className="name">
                      {
                        member.name
                      }
                    </h2>
                    <p className="role">
                      <div className="icon"
                        style={{ backgroundImage: `url(${member.roleIcon})` }}>
                      </div>
                      <span className="text">
                        {
                          member.role
                        }
                      </span>
                    </p>
                    <a className="email-link" href={
                      `mailto:${member.email}`
                    }>Send me an ✉️</a>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}