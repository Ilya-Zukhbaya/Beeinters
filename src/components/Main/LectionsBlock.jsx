import React from 'react';

export const LecturesBlock = () => {
  return (
    <article>
      <div>
        <div className="lecturesHeader">
          <p>Продвинутый уровень</p>
          <div className="lecturesHeader__container">
            <h2>JAVASCRIPT/REACT</h2>
            <div>
              <button type="button" className="lection-button lecturesHeader__container-lectButton">
                все лекции
              </button>
              <button
                type="button"
                className="navigation-button lecturesHeader__container-navButton">
                <img src="./pictures/main/arrowLeft.png" alt="arrowLeft" width={6} height={10} />
              </button>
              <button
                type="button"
                className="navigation-button lecturesHeader__container-navButton lastButton">
                <img src="./pictures/main/arrowRight.png" alt="arrowRight" width={6} height={10} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lecturesHeader">
          <p>Продвинутый уровень</p>
          <div className="lecturesHeader__container">
            <h2>HTML/CSS</h2>
            <div>
              <button type="button" className="lection-button lecturesHeader__container-lectButton">
                все лекции
              </button>
              <button
                type="button"
                className="navigation-button lecturesHeader__container-navButton">
                <img src="./pictures/main/arrowLeft.png" alt="arrowLeft" width={6} height={10} />
              </button>
              <button
                type="button"
                className="navigation-button lecturesHeader__container-navButton lastButton">
                <img src="./pictures/main/arrowRight.png" alt="arrowRight" width={6} height={10} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
