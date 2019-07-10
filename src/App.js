import React from 'react';
import ScovilleMeter from './components/ScovilleMeter';
import './index.css';

function App() {
  return (
    <div className="App">
      <ScovilleMeter scovilles={2e6} height={600} />
    </div>
  );
}

export default App;
