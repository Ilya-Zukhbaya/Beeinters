import React from 'react';
import './scss/app.scss';

import { Topbar } from './components/Topbar';
import { Leftbar } from './components/Leftbar';
import { LecturesBlock } from './components/Main/LecturesBlock';

function App() {
  return (
    <div className="wrapper">
      <Topbar />
      <Leftbar />
      <LecturesBlock />
    </div>
  );
}

export default App;
