import React from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Favorites } from './pages/Favorites';

export const SearchContext = React.createContext();

function App() {
  const [lections, setLections] = React.useState([]);
  const [loading, setIsLoading] = React.useState(true);

  return (
    <SearchContext.Provider value={{ loading, setIsLoading, lections, setLections }}>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
