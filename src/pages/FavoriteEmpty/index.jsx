import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const FavoriteEmpty = () => {
  return (
    <div className={styles.root}>
      <div>
        <h2>Избранные лекции отстутствуют 😕</h2>
        <div className="pt-40">
          <p className="text-center">
            Вероятней всего, вы не добавляли лекции в избранное.
            <br />
            Для того, добавить лекцию, перейди на главную страницу.
          </p>
        </div>
      </div>
      <Link to="/">
        <div className={styles.root__footer}>
          <button>Вернуться на главную страницу</button>
        </div>
      </Link>
    </div>
  );
};
