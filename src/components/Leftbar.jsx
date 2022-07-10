import React from 'react';

export const Leftbar = () => {
  return (
    <article className="leftbar__container">
      <div className="leftbar">
        <div className="leftbar__first-line">
          <p>Программа</p>
          <img src="./pictures/leftbar/arrowUp.png" alt="arrow up" className="leftbar__arrowUP" />
        </div>
        <ul>
          <li>Менторы</li>
          <li>
            <div className="popup">
              <p>Лекции</p>
              <img
                src="./pictures/leftbar/arrowUp.png"
                alt="arrow up"
                className="leftbar_arrowUP"
              />
            </div>
            <ul>
              <li className="leftbar__sec-li">
                <img src="./pictures/leftbar/1Shape.png" alt="sword" />
                <p>HTML/CSS</p>
              </li>
              <li className="leftbar__sec-li">
                <img src="./pictures/leftbar/2Shape.png" alt="fireship" />
                <p>GIT</p>
              </li>
              <li className="leftbar__sec-li">
                <img src="./pictures/leftbar/3Shape.png" alt="pazzle" />
                <p>JavaScript</p>
              </li>
              <li className="leftbar__sec-li">
                <img src="./pictures/leftbar/4Shape.png" alt="rook" />
                <p>React</p>
              </li>
              <li className="leftbar__sec-li">
                <img src="./pictures/leftbar/5Shape.png" alt="box" />
                <p>Angular</p>
              </li>
              <li className="leftbar__sec-li">
                <img src="./pictures/leftbar/6Shape.png" alt="ball" />
                <p>Data</p>
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
        <label>
          <input type="checkbox" name="recieve letters" />
          <span></span>
        </label>
      </div>
    </article>
  );
};
