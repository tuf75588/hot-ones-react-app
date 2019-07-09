import React from 'react';

import ScovilleMeter from './components/ScovilleMeter';

function App() {
  return (
    <div className="App">
      <ScovilleMeter scovilles={2e6} />
    </div>
  );
}

export default App;
