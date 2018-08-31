import React, { Component } from 'react';
import './App.css';
import FrontpageScreen from './frontpage';
import GlobalHeader from './header';
import GlobalFooter from './footer';
import SponsorsScreen from './sponsors';
import TeamScreen from './team';

import {
  BrowserRouter,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <GlobalHeader />
          <Route exact path="/" component={FrontpageScreen} />
          <Route exact path="/sponsors" component={SponsorsScreen} />
          <Route exact path="/team" component={TeamScreen} />
          <GlobalFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;