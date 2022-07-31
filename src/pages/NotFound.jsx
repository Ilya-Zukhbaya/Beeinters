import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="notFound-container">
      <h1>Ошибка: Страница не найдена 👻</h1>
      <Link to="/">
        <button>Перейти на главную страницу</button>
      </Link>
    </div>
  );
};
