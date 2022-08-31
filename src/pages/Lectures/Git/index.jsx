import axios from 'axios';
import React from 'react';
import { LectureBlock } from '../../../components/Main/LectureBlock';

export const Git = () => {
  const [items, setItems] = React.useState();
  React.useEffect(() => {
    const filter = '?description=git';
    axios.get(`https://62ceaccd826a88972d00785b.mockapi.io/lections/${filter}`).then((response) => {
      setItems(response.data);
    });
  }, []);

  if (!items) {
    return (
      <>
        <h1 className="d-flex justify-center loading">Loading...</h1>
      </>
    );
  }

  return (
    <div className="d-flex flex-wrap pt-50 align-center justify-center flex-column">
      {items.map((obj) => (
        <LectureBlock {...obj} key={obj.id} />
      ))}
    </div>
  );
};
