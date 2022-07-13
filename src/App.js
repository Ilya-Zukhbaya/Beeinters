import React from 'react';
import './scss/app.scss';

import { Topbar } from './components/Topbar';
import { Leftbar } from './components/Leftbar';
import { LecturesHeader } from './components/Main/LecturesHeader';

function App() {
  return (
    <div className="wrapper">
      <Topbar />
      <Leftbar />
      <LecturesHeader />
    </div>
  );
}

export default App;
