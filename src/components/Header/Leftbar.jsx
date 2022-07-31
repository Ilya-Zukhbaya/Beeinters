import React from 'react';

export const Leftbar = () => {
  const [firstClicked, setFirstIsClicked] = React.useState(false);
  const [secClicked, setSecIsClicked] = React.useState(false);

  return (
    <article className="leftbar__container">
      <div className="leftbar">
        <div className="leftbar__first-line">
          <p>ПРОГРАММА</p>
          <button onClick={() => setFirstIsClicked(!firstClicked)}>
            <img
              src="./pictures/leftbar/arrowUp.png"
              alt="arrow up"
              className={firstClicked ? 'leftbar__rotate-first' : 'leftbar__arrowUP'}
            />
          </button>
        </div>
        {firstClicked && (
          <ul>
            <li>МЕНТОРЫ</li>
            <li>
              <div className="popup">
                <p>ЛЕКЦИИ</p>
                <button onClick={() => setSecIsClicked(!secClicked)}>
                  <img
                    src="./pictures/leftbar/arrowUp.png"
                    alt="arrow up"
                    className={secClicked ? 'leftbar__rotate-second' : 'leftbar__arrowUP'}
                  />
                </button>
              </div>
              {secClicked && (
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
              )}
            </li>
            <li>ПРАВИЛА ПОСТУПЛЕНИЯ</li>
            <li>НОВОСТИ</li>
            <li>ОБРАТНАЯ СВЯЗЬ</li>
          </ul>
        )}
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
