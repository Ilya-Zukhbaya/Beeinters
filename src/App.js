import React from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
