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
  render() {
    return (
      <div className="padded">
        <h1 style={{ margin: 0, marginBottom: 36 }}>Vikings</h1>
        <ul id="team-list">
          {
            team.map(member => (
              <li className="member">
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
    )
  }
}