import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

export const News = () => {
  return (
    <div className={styles.root}>
      <h1>
        Следите за официальными новостями на нашем
        <a href="https://www.beeline-interns.ru/" className="ml-10">
          сайте
        </a>
      </h1>
      <Link to="/">
        <div className="backButton d-flex justify-center mt-50">
          <button>Вернуться на главную страницу</button>
        </div>
      </Link>
    </div>
  );
};
