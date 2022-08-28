import React from 'react';

import Skeleton from '../components/Main/SkeletonBlock';
import { LectureBlock } from '../components/Main/LectureBlock';
import { LecturesHeader } from '../components/Main/LecturesHeader';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

import { SearchContext } from '../App';
import Modal from '../modals/ruleModal/Modal';
import { MentorModal } from '../modals/mentorModal/MentorModal';
import { Mentors } from '../components/Mentors';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [mentorsItems, setMentorsItems] = React.useState([]);
  const {
    lections,
    setLections,
    loading,
    setIsLoading,
    modalActive,
    setModalActive,
    mentorModalActive,
    setMentorModalActive,
  } = React.useContext(SearchContext);
  React.useEffect(() => {
    axios.get(`https://62ceaccd826a88972d00785b.mockapi.io/lections`).then((response) => {
      setLections(response.data);
      setIsLoading(false);
    });
    axios.get('https://62ceaccd826a88972d00785b.mockapi.io/mentors').then((response) => {
      setMentorsItems(response.data);
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
    <div className="mainRoot-container">
      <LecturesHeader items={lections} settings={settings} />
      <article className="root-article">
        <div className="main-container">
          <div className="lecturesHeader">
            <p>Продвинутый уровень</p>
            <div className="lecturesHeader__container">
              <h2>JAVASCRIPT/REACT</h2>
              <div>
                <Link to="lectures/js">
                  <button
                    type="button"
                    className="lection-button lecturesHeader__container-lectButton">
                    все лекции
                  </button>
                </Link>
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
                <Link to="lectures/html-css">
                  <button
                    type="button"
                    className="lection-button lecturesHeader__container-lectButton">
                    все лекции
                  </button>
                </Link>
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
      <Modal active={modalActive} setActive={setModalActive}>
        <h1 className="pb-40">ЭТАПЫ ОТБОРА НА HTML/CSS:</h1>
        <div className="d-flex">
          <p>Регистрация до 15 декабря включительно</p>
          <p>Скрининг заявок до 20 декабря включительно</p>
          <p>Телефонное интервью до 22 декабря включительно</p>
          <p>Финальный этап до 28 декабря включительно</p>
        </div>
      </Modal>
      <MentorModal active={mentorModalActive} setActive={setMentorModalActive}>
        {mentorsItems.map((obj, i) => (
          <Mentors {...obj} key={i} />
        ))}
      </MentorModal>
    </div>
  );
};
