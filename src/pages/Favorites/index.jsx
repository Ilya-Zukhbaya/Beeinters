import React from 'react';
import styles from './styles.module.scss';
import { FavoriteItem } from '../../components/FavoriteItem';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

export const Favorites = () => {
  const { items } = useSelector((state) => state.favoriteSlice);
  return (
    <article className={styles.root}>
      <div className={styles.root__main}>
        <div>
          <h1>Ваши закладки</h1>
          <p>Здесь будут храниться отмеченные вами лекции 😄</p>
        </div>
        <div>
          {items.map((obj) => (
            <FavoriteItem key={obj.id} {...obj} />
          ))}
        </div>
      </div>
      <Link to="/">
        <div className={styles.root__footer}>
          <button>Вернуться на главную страницу</button>
        </div>
      </Link>
    </article>
  );
};
