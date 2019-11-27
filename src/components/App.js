import React from 'react';
import Header from './common/Header';
import '../assets/css/materialdesignicons.min.css';
import '../assets/css/webfont.css';
import '../../node_modules/bulma/css/bulma.min.css';
import '../assets/css/core.css';
import Timeline from './timeline/Timeline';


function App() {
  return (
    <div className="App">
        <Header/>
        <Timeline />
    </div>
  );
}

export default App;
