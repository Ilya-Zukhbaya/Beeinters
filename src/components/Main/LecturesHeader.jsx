import React from 'react';

export const LecturesHeader = () => {
  return (
    <article className="lecturesHeader">
      <p>Все лекции на нашем сайте</p>
      <div className="lecturesHeader__container">
        <h2>ALL LECTURES</h2>
        <div>
          <button type="button" className="lection-button lecturesHeader__container-lectButton">
            HTML
          </button>
          <button type="button" className="lection-button lecturesHeader__container-lectButton">
            CSS
          </button>
          <button type="button" className="lection-button lecturesHeader__container-lectButton">
            Javascrict
          </button>
          <button type="button" className="lection-button lecturesHeader__container-lectButton">
            8 лекций
          </button>
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
    </article>
  );
};
