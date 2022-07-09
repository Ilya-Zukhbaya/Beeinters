import React from 'react';
import './scss/app.scss';

import { Topbar } from './components/Topbar';
import { Leftbar } from './components/Leftbar';
function App() {
  return (
    <div className="wrapper">
      <Topbar />
      <Leftbar />
    </div>
  );
}

export default App;
