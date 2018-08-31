import React from 'react';
import './styles.scss';

const sponsors = [{
  name: 'Bluegarden',
  description: 'I en värld där alla som arbetar förväntas göra mer, ska vi se till det i alla fall blir enklare! Bluegarden har utvecklat lönesystem och HR-lösningar i över 30 år. Våra lösningar säkerställer 16 miljoner löneutbetalningar per år. Det får inte bli fel och det ska vara enkelt.',
  logo: require('../assets/sponsors/bluegarden.png'),
  color: 'rgb(4, 4, 4)',
}, {
  name: 'Fortnox',
  description: 'Fortnox förenklar inte bara vardagen för tusentals småföretagare. Vi har genom åren också valt att stötta föreningsliv, ungt entreprenörskap och andra samhällsfrämjande insatser – ofta och gärna kopplade till barn och ungdomar.',
  logo: require('../assets/sponsors/fortnox.png'),
  color: 'rgb(76, 76, 76)'
}, {
  name: 'GoTech',
  description: 'GoTech är en ekonomisk förening som har funnits sedan 2008 och som drivs av de största teknikföretagen i Växjö. Föreningen syftar till att öka intresset för en yrkeskarriär inom ett teknikföretag.',
  logo: require('../assets/sponsors/gotech.png'),
  color: 'rgb(108, 107, 106)'
}, {
  name: 'Växjö Kommun',
  description: 'Europas grönaste stad.',
  logo: require('../assets/sponsors/vaxjo.png'),
  color: 'rgb(55, 138, 69)'
}, {
  name: 'Visma',
  description: 'För att skapa ett småföretagarklimat i världsklass utvecklar vi program och tjänster som förenklar och effektiviserar det dagliga arbetet. Dessutom bidrar vi gärna med erfarenheter och kunskap. Vi har själva varit småföretagare och vet hur viktigt det kan vara att få råd och stöd.',
  logo: require('../assets/sponsors/visma.png'),
  color: 'rgb(235, 7, 53)'
}, {
  name: 'Teknikum',
  description: 'Teknikum är en ledande gymnasieskola inom områdena teknik, människa och samhälle. Vi lyssnar på näringslivets behov och anpassar våra utbildningar. Det är din bästa garanti för att få ett jobb.',
  logo: require('../assets/sponsors/teknikum.png'),
  color: 'rgb(151, 49, 86)'
}];

/**
 * A screen for showing sponsors.
 * @author Johan Svensson
 */
export default class SponsorsScreen extends React.Component {
  render() {
    return (
      <div>
        <div style={{ padding: '0 24px 24px 24px' }}>
          <h1>Our Sponsors</h1>
          <p id="subheading-top">
            Teknikum and Viking Robotics are very thankful to our sponsors.
        </p>
        </div>
        <ul id="sponsor-list">
          {
            sponsors.map(s => (
              <li>
                <div className="shape-container">
                  <div className="bg-shape" style={{
                    backgroundColor: s.color
                  }}></div>

                  <div className="logo" style={{
                    backgroundImage: `url(${s.logo})`
                  }}>
                  </div>
                  <h2 className="name">
                    {s.name}
                  </h2>
                  <p className="description">
                    {
                      s.description
                    }
                  </p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}