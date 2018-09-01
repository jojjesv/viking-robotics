import React from 'react';

import './styles.scss';

/**
 * A global footer.
 * @author Johan Svensson
 */
export default class GlobalFooter extends React.Component {
  render() {
    return (
      <footer id="global-footer">
        <div className="bg-shape textured"></div>
        <nav id="footer-nav">
          <ul>
            <li>
              <a href="mailto:vikingrobotics.teknikum@gmail.com">Contact us</a>
            </li>
            <li>
              <a href="https://www.facebook.com/VikingRoboticsFRC6819/"
                target="_blank"><div className="fb-logo"></div>#6819 on Facebook</a>
            </li>
            <li>
              Gamla Norrvägen 6-8, 352 43 Växjö
                        </li>
            <li>
              © Teknikum 2017-
                        </li>
            <li id="site-credits">
              Webbplatsen är ihopsnickrad av TE4-eleverna
                        </li>
          </ul>
        </nav>
      </footer>
    )
  }
}