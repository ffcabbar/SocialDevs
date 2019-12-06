import React from 'react';
import Header from './common/Header';
import Timeline from './timeline/Timeline';


function App() {
  return (
    <div className="App">
        <div class="app-overlay"></div>
        <Header/>
        <Timeline />
    </div>
  );
}

export default App;
