import React from 'react';
import { LectureBlock } from './LectureBlock';

export const LecturesHeader = ({ items, searchLections, setSearchLections }) => {
  const buttons = ['HTML', 'CSS', 'Javascrict', '8 лекций'];
  const [headerButton, setHeaderButton] = React.useState(0);

  return (
    <article className="lecturesHeader header-container">
      <p>Все лекции на нашем сайте</p>
      <div className="lecturesHeader__container">
        <h2>ALL LECTURES</h2>
        {headerButton === 4 && (
          <div className="searchContainer">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g data-name="1" id="_1">
                <path d="M221.12,389.43A173.22,173.22,0,0,1,98.25,338.61c-67.75-67.75-67.75-178,0-245.74s178-67.75,245.74,0A173.69,173.69,0,0,1,221.12,389.43Zm0-317.39a143.37,143.37,0,0,0-101.66,42c-56,56.06-56,147.26,0,203.32A143.77,143.77,0,1,0,322.78,114.08h0A143.35,143.35,0,0,0,221.12,72Z" />
                <path d="M221.12,332.16a116.42,116.42,0,1,1,82.36-34.06A116.1,116.1,0,0,1,221.12,332.16Zm0-202.86a86.44,86.44,0,1,0,61.15,25.29A86.22,86.22,0,0,0,221.12,129.3Z" />
                <path d="M414.82,450.44a40.78,40.78,0,0,1-29-12L302.89,355.5a15,15,0,0,1,21.22-21.22L407,417.21a11,11,0,1,0,15.55-15.55l-82.93-82.93a15,15,0,1,1,21.22-21.22l82.93,82.93a41,41,0,0,1-29,70Z" />
              </g>
            </svg>
            <input
              value={searchLections}
              type="search"
              name="search lections"
              placeholder="Поиск лекции..."
              onChange={(event) => setSearchLections(event.target.value)}
            />
          </div>
        )}
        <div>
          {buttons.map((obj, i) => (
            <button
              type="button"
              className="lection-button lecturesHeader__container-lectButton"
              onClick={() => setHeaderButton(i + 1)}
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
      <div className="lecturesHeader__main">
        {headerButton === 4
          ? items
              .filter((obj) => obj.description.toLowerCase().includes(searchLections.toLowerCase()))
              .map((obj) => <LectureBlock {...obj} key={obj.id} />)
          : ''}
        {items
          .filter((obj) => obj.type === headerButton)
          .map((obj) => (
            <LectureBlock {...obj} key={obj.id} />
          ))}
      </div>
    </article>
  );
};
