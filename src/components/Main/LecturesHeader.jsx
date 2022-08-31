import React from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { useSelector, useDispatch } from 'react-redux';
import { setHeaderButton, setHeaderButtonClick } from '../../redux/slices/buttonSlice';
import { Link } from 'react-router-dom';
import { LectureBlock } from './LectureBlock';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const LecturesHeader = ({ items }) => {
  const dispatch = useDispatch();
  const { headerButton, headerButtonClick } = useSelector((state) => state.buttonSlice);
  const buttons = ['HTML', 'CSS', 'Javascript/React', `${items.length} лекций`];
  const [value, setValue] = React.useState('');
  const [searchLectures, setSearchLectures] = React.useState('');
  const [allLectures, setAllLectures] = React.useState([]);

  const onButtonClick = (i) => {
    dispatch(setHeaderButton(i + 1));
    headerButton !== i + 1
      ? dispatch(setHeaderButtonClick(true))
      : dispatch(setHeaderButtonClick(!headerButtonClick));
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  React.useEffect(() => {
    const search = searchLectures ? `search=${searchLectures}` : '';
    axios.get(`https://62ceaccd826a88972d00785b.mockapi.io/lections?${search}`).then((response) => {
      setAllLectures(response.data);
    });
  }, [searchLectures]);

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchLectures(str);
    }, 750),
    [],
  );

  const onChangeInput = (event) => {
    updateSearchValue(event.target.value);
    setValue(event.target.value);
  };

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
              value={value}
              type="search"
              name="search lections"
              placeholder="Поиск лекции..."
              onChange={onChangeInput}
            />
          </div>
        )}
        <div>
          {buttons.map((obj, i) => (
            <button
              type="button"
              className="lection-button lecturesHeader__container-lectButton"
              onClick={() => {
                onButtonClick(i);
              }}
              key={i}>
              {obj}
            </button>
          ))}
          <Link to="/favorites">
            <button type="button" className="lection-button lecturesHeader__container-lectButton">
              Избранное
            </button>
          </Link>
        </div>
      </div>
      <div className={headerButtonClick ? 'lecturesHeader__main' : 'activeContainer'}>
        <Slider {...settings}>
          {headerButton === 4
            ? allLectures.map((obj) => <LectureBlock {...obj} key={obj.id} />)
            : ''}
          {items
            .filter((obj) => obj.type === headerButton)
            .map((obj) => (
              <LectureBlock {...obj} key={obj.id} />
            ))}
        </Slider>
      </div>
    </article>
  );
};
