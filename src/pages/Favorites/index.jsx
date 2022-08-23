import React from 'react';
import styles from './styles.module.scss';
import { FavoriteItem } from '../../components/FavoriteItem';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { FavoriteEmpty } from '../FavoriteEmpty';

export const Favorites = () => {
  const { items } = useSelector((state) => state.favoriteSlice);

  if (items.length === 0) {
    return <FavoriteEmpty />;
  }

  return (
    <article className={styles.root}>
      <div className={styles.root__main}>
        <div className={styles.root__header}>
          <div>
            <h1>Ваши закладки</h1>
            <p>Здесь будут храниться отмеченные вами лекции 😄</p>
          </div>
          <Link to="/">
            <div className={styles.root__footer}>
              <button>Вернуться на главную страницу</button>
            </div>
          </Link>
        </div>
        <div>
          {items.map((obj) => (
            <FavoriteItem key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </article>
  );
};
