import React from 'react';

import Skeleton from '../components/Main/SkeletonBlock';
import { LectureBlock } from '../components/Main/LectureBlock';
import { LecturesHeader } from '../components/Main/LecturesHeader';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Home = () => {
  const [lections, setLections] = React.useState([]);
  const [loading, setIsLoading] = React.useState(true);
  const [searchLectures, setSearchLectures] = React.useState('');

  React.useEffect(() => {
    fetch(`https://62ceaccd826a88972d00785b.mockapi.io/lections`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setLections(response);
        setIsLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <LecturesHeader
        items={lections}
        searchLectures={searchLectures}
        setSearchLectures={setSearchLectures}
        settings={settings}
      />
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
              </div>
            </div>
          </div>
          <div className="lecturesContainer">
            <Slider {...settings}>
              {loading
                ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
                : lections
                    .filter((obj) => obj.type === 3)
                    .map((obj) => <LectureBlock {...obj} key={obj.id} />)}
            </Slider>
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
              </div>
            </div>
          </div>
          <div className="lecturesContainer">
            <Slider {...settings}>
              {loading
                ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
                : lections
                    .filter((obj) => obj.type === 1 || obj.type === 2)
                    .map((obj) => <LectureBlock {...obj} key={obj.id} />)}
            </Slider>
          </div>
        </div>
      </article>
    </>
  );
};
