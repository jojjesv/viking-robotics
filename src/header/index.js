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

const isHashRouting = true;

/**
 * A global navigation header.
 * @author Johan Svensson
 */
export default class GlobalHeader extends React.Component {
  render() {
    let { location } = window;
    let { pathname, hash } = location;

    return (
      <nav id="global-nav">
        <div className="bg-shape"></div>
        <ul>
          {
            tabs.map(t => {
              let active = isHashRouting ? hash == `#${t.path}` : pathname == `${t.path}`;
              return (
                <li key={t.path} className={active ? 'active' : undefined}>
                  {
                    active && <div className="selected-effect"></div>
                  }
                  <Link to={t.path}>{t.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }
}