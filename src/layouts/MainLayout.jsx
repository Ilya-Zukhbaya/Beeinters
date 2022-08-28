import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import Modal from '../modals/ruleModal/Modal';
import { MentorModal } from '../modals/mentorModal/MentorModal';
import { Mentors } from '../components/Mentors';
import { SearchContext } from '../App';

export const MainLayout = () => {
  const { mentorsItems, modalActive, setModalActive, mentorModalActive, setMentorModalActive } =
    React.useContext(SearchContext);
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
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
