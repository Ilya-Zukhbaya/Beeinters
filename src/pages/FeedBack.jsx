import React from 'react';
import { Feedback } from '../components/Feedback';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const FeedBack = () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://62ceaccd826a88972d00785b.mockapi.io/comments').then((response) => {
      setItems(response.data);
    });
  }, []);
  return (
    <div className="feedback-container">
      {items.map((obj, i) => (
        <Feedback {...obj} key={i} />
      ))}
      <Link to="/">
        <div className="backButton">
          <button>Вернуться на главную страницу</button>
        </div>
      </Link>
    </div>
  );
};
