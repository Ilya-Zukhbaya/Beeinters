import React from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Favorites } from './pages/Favorites';
import { FeedBack } from './pages/FeedBack';
import { News } from './pages/News';
import { HTML__CSS } from './pages/Lectures/HTML_CSS';
import { Git } from './pages/Lectures/Git';
import { JavaScript } from './pages/Lectures/Js';
import { ReactLec } from './pages/Lectures/React';

export const SearchContext = React.createContext();

function App() {
  const isMounted = React.useRef(false);
  const { items } = useSelector((state) => state.favoriteSlice);
  const [lections, setLections] = React.useState([]);
  const [loading, setIsLoading] = React.useState(true);
  const [modalActive, setModalActive] = React.useState(false);
  const [mentorModalActive, setMentorModalActive] = React.useState(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('favorites', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <SearchContext.Provider
      value={{
        loading,
        setIsLoading,
        lections,
        setLections,
        modalActive,
        setModalActive,
        mentorModalActive,
        setMentorModalActive,
      }}>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="feedback" element={<FeedBack />} />
          <Route path="news" element={<News />} />
          <Route path="lectures/html-css" element={<HTML__CSS />} />
          <Route path="lectures/git" element={<Git />} />
          <Route path="lectures/js" element={<JavaScript />} />
          <Route path="lectures/react" element={<ReactLec />} />
        </Routes>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
