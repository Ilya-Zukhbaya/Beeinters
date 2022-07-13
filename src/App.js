import React from 'react';
import './scss/app.scss';

import { Topbar } from './components/Topbar';
import { Leftbar } from './components/Leftbar';
import { LecturesHeader } from './components/Main/LecturesHeader';
import { LecturesBlock } from './components/Main/LectionsBlock';

function App() {
  return (
    <div className="wrapper">
      <Topbar />
      <Leftbar />
      <LecturesHeader />
      <LecturesBlock />
    </div>
  );
}

export default App;
