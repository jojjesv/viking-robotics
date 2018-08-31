import React from 'react';

import './styles.scss';

import {
  Link
} from 'react-router-dom'

const tabs = [{
  path: '/',
  title: 'Start'
}, {
  path: '/sponsors',
  title: 'Sponsors'
}, {
  path: '/team',
  title: 'The Team'
}]

/**
 * A global navigation header.
 * @author Johan Svensson
 */
export default class GlobalHeader extends React.Component {
  render() {
    let { location } = window;
    let { pathname } = location;

    return (
      <nav id="global-nav">
        <div className="bg-shape"></div>
        <ul>
          {
            tabs.map(t => (
              <li className={pathname == t.path ? 'active' : undefined}>
                {
                  pathname == t.path && <div className="selected-effect"></div>
                }
                <Link to={t.path}>{t.title}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    )
  }
}