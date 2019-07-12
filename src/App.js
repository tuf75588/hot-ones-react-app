import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScovilleMeter from './components/ScovilleMeter';
import SeasonSelector from './components/SeasonSelector';
import SeasonViewer from './components/SeasonViewer';

import './index.css';
import SauceViewer from './components/SauceViewer';

const seasons = [];
for (let i = 1; i <= 9; i += 1) {
  const sauces = require(`./sauces/season_${i}.json`);
  seasons.push(sauces);
}
const styles = {
  display: 'flex',
  width: '100%',
  height: '100%',
};
function App(props) {
  return (
    <Router>
      {' '}
      <React.Fragment>
        <div className="App" style={styles}>
          <SeasonSelector seasons={seasons} />
          <Route path="/seasons/:season" component={SeasonViewer} />
          <Route path="/seasons/:season/sauces/:id" component={SauceViewer} />
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
