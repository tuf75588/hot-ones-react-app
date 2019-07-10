import React from 'react';
import ScovilleMeter from './components/ScovilleMeter';
import SeasonSelector from './components/SeasonSelector';
import './index.css';

const seasons = [];
for (let i = 1; i <= 9; i += 1) {
  const sauces = require(`./sauces/season_${i}.json`);
  seasons.push(sauces);
}
console.log(seasons);

function App() {
  return (
    <div className="App">
      <SeasonSelector seasons={seasons} />
      {/* <ScovilleMeter scovilles={2e6} height={600} /> */}
    </div>
  );
}

export default App;
