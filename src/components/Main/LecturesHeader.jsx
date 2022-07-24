import React from 'react';
import { LectureBlock } from './LectureBlock';

export const LecturesHeader = ({ items }) => {
  const buttons = ['HTML', 'CSS', 'Javascrict', '8 лекций'];
  var typle = 2;

  return (
    <article className="lecturesHeader header-container">
      <p>Все лекции на нашем сайте</p>
      <div className="lecturesHeader__container">
        <h2>ALL LECTURES</h2>
        <div>
          {buttons.map((obj, i) => (
            <button
              type="button"
              className="lection-button lecturesHeader__container-lectButton"
              key={i}>
              {obj}
            </button>
          ))}
          <button type="button" className="navigation-button lecturesHeader__container-navButton">
            <img src="./pictures/main/arrowLeft.png" alt="arrowLeft" width={6} height={10} />
          </button>
          <button
            type="button"
            className="navigation-button lecturesHeader__container-navButton lastButton">
            <img src="./pictures/main/arrowRight.png" alt="arrowRight" width={6} height={10} />
          </button>
        </div>
      </div>
      <div>
        {items
          .filter((obj) => obj.type === typle)
          .map((obj) => (
            <LectureBlock {...obj} key={obj.id} />
          ))}
      </div>
    </article>
  );
};
