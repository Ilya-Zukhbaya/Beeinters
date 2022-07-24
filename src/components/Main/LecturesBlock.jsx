import React from 'react';
import { LectureBlock } from './LectureBlock';
import { LecturesHeader } from './LecturesHeader';
import Skeleton from './SkeletonBlock';

export const LecturesBlock = () => {
  const [lections, setLections] = React.useState([]);
  const [loading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://62ceaccd826a88972d00785b.mockapi.io/lections')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setLections(response);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <LecturesHeader items={lections} />
      <article className="root-article">
        <div className="main-container">
          <div className="lecturesHeader">
            <p>Продвинутый уровень</p>
            <div className="lecturesHeader__container">
              <h2>JAVASCRIPT/REACT</h2>
              <div>
                <button
                  type="button"
                  className="lection-button lecturesHeader__container-lectButton">
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
                  <img
                    src="./pictures/main/arrowRight.png"
                    alt="arrowRight"
                    width={6}
                    height={10}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="lecturesContainer">
            {loading
              ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
              : lections.slice(4).map((obj) => <LectureBlock {...obj} key={obj.id} />)}
          </div>
        </div>
        <div className="main-container">
          <div className="lecturesHeader">
            <p>Продвинутый уровень</p>
            <div className="lecturesHeader__container">
              <h2>HTML/CSS</h2>
              <div>
                <button
                  type="button"
                  className="lection-button lecturesHeader__container-lectButton">
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
                  <img
                    src="./pictures/main/arrowRight.png"
                    alt="arrowRight"
                    width={6}
                    height={10}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="lecturesContainer">
            {loading
              ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
              : lections.slice(0, 4).map((obj) => <LectureBlock {...obj} key={obj.id} />)}
          </div>
        </div>
      </article>
    </>
  );
};
