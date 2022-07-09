import React from 'react';

export const Leftbar = () => {
  return (
    <article className="leftbar__container">
      <div className="leftbar">
        <div>
          <p>Программа</p>
          <img src="./pictures/leftbar/arrowUp.png" alt="arrow up" />
        </div>
        <ul>
          <li>Менторы</li>
          <li>
            <div>
              <p>Лекции</p>
              <img src="./pictures/leftbar/arrowUp.png" alt="arrow up" />
            </div>
            <ul>
              <li>
                <p>HTML/CSS</p>
                <img src="./pictures/leftbar/1Shape.png" alt="sword" />
              </li>
              <li>
                <p>GIT</p>
                <img src="./pictures/leftbar/2Shape.png" alt="fireship" />
              </li>
              <li>
                <p>JavaScript</p>
                <img src="./pictures/leftbar/3Shape.png" alt="pazzle" />
              </li>
              <li>
                <p>React</p>
                <img src="./pictures/leftbar/4Shape.png" alt="rook" />
              </li>
              <li>
                <p>Angular</p>
                <img src="./pictures/leftbar/5Shape.png" alt="box" />
              </li>
              <li>
                <p>Data</p>
                <img src="./pictures/leftbar/6Shape.png" alt="ball" />
              </li>
            </ul>
          </li>
          <li>Правила поступления</li>
          <li>Новости</li>
          <li>Обратная связь</li>
        </ul>
      </div>
      <div className="leftbar__container-switcher">
        <p>Получать рассылку</p>
      </div>
    </article>
  );
};
