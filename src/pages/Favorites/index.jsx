import React from 'react';
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';

export const Favorites = () => {
  return (
    <article className={styles.root}>
      <div className={styles.root__main}>
        <div>
          <h1>Ваши закладки</h1>
          <p>Здесь будут храниться отмеченные вами лекции 😄</p>
        </div>
        <div>
          <p>Сохраненные лекции</p>
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
