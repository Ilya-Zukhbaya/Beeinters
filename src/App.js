import React from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Favorites } from './pages/Favorites';
import { FeedBack } from './pages/FeedBack';
import { News } from './pages/News';
import { HTML__CSS } from './pages/Lectures/HTML_CSS';
import { Git } from './pages/Lectures/Git';
import { JavaScript } from './pages/Lectures/Js';
import { ReactLec } from './pages/Lectures/React';
import axios from 'axios';
import { MainLayout } from './layouts/MainLayout';

export const SearchContext = React.createContext();

function App() {
  const isMounted = React.useRef(false);
  const { items } = useSelector((state) => state.favoriteSlice);
  const [lections, setLections] = React.useState([]);
  const [mentorsItems, setMentorsItems] = React.useState([]);
  const [loading, setIsLoading] = React.useState(true);
  const [modalActive, setModalActive] = React.useState(false);
  const [mentorModalActive, setMentorModalActive] = React.useState(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('favorites', json);
    }
    axios.get('https://62ceaccd826a88972d00785b.mockapi.io/mentors').then((response) => {
      setMentorsItems(response.data);
    });
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
        mentorsItems,
      }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="feedback" element={<FeedBack />} />
          <Route path="news" element={<News />} />
          <Route path="lectures-html-css" element={<HTML__CSS />} />
          <Route path="lectures-git" element={<Git />} />
          <Route path="lectures-js" element={<JavaScript />} />
          <Route path="lectures-react" element={<ReactLec />} />
        </Route>
      </Routes>
    </SearchContext.Provider>
  );
}

export default App;
