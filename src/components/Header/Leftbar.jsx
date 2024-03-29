import React from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../App';

export const Leftbar = () => {
  const [firstClicked, setFirstIsClicked] = React.useState(false);
  const [secClicked, setSecIsClicked] = React.useState(false);
  const { setModalActive, setMentorModalActive } = React.useContext(SearchContext);

  return (
    <article className="leftbar__container">
      <div className="leftbar">
        <div className="leftbar__first-line">
          <p>ПРОГРАММА</p>
          <button onClick={() => setFirstIsClicked(!firstClicked)}>
            <img
              src="./pictures/leftbar/leftbararrow.svg"
              alt="arrow up"
              className={firstClicked ? 'leftbar__rotate-first' : 'leftbar__arrowUP'}
            />
          </button>
        </div>
        {firstClicked && (
          <ul>
            <li onClick={() => setMentorModalActive(true)}>МЕНТОРЫ</li>
            <li>
              <div className="popup">
                <p>ЛЕКЦИИ</p>
                <button onClick={() => setSecIsClicked(!secClicked)}>
                  <img
                    src="./pictures/leftbar/leftbararrow.svg"
                    alt="arrow up"
                    className={secClicked ? 'leftbar__rotate-second' : 'leftbar__arrowUP'}
                  />
                </button>
              </div>
              {secClicked && (
                <ul>
                  <Link to="lectures-html-css">
                    <li className="leftbar__sec-li">
                      <img src="./pictures/leftbar/1Shape.png" alt="sword" />
                      <p>HTML/CSS</p>
                    </li>
                  </Link>
                  <Link to="lectures-git">
                    <li className="leftbar__sec-li">
                      <img src="./pictures/leftbar/2Shape.png" alt="fireship" />
                      <p>GIT</p>
                    </li>
                  </Link>
                  <Link to="lectures-js">
                    <li className="leftbar__sec-li">
                      <img src="./pictures/leftbar/3Shape.png" alt="pazzle" />
                      <p>JavaScript</p>
                    </li>
                  </Link>
                  <Link to="lectures-react">
                    <li className="leftbar__sec-li">
                      <img src="./pictures/leftbar/4Shape.png" alt="rook" />
                      <p>React</p>
                    </li>
                  </Link>
                  <Link to="lecture-angular">
                    <li className="leftbar__sec-li">
                      <img src="./pictures/leftbar/5Shape.png" alt="box" />
                      <p>Angular</p>
                    </li>
                  </Link>
                  <Link to="lectures-data">
                    <li className="leftbar__sec-li">
                      <img src="./pictures/leftbar/6Shape.png" alt="ball" />
                      <p>Data</p>
                    </li>
                  </Link>
                </ul>
              )}
            </li>
            <li onClick={() => setModalActive(true)}>ПРАВИЛА ПОСТУПЛЕНИЯ</li>
            <Link to="news">
              <li>НОВОСТИ</li>
            </Link>
            <Link to="feedback">
              <li>ОБРАТНАЯ СВЯЗЬ</li>
            </Link>
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
