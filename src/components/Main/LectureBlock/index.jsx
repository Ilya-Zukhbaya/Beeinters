import React from 'react';
import styles from './LectureBlock.module.scss';

export const LectureBlock = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root__header}>
        <div>
          <span>Лекция</span>
        </div>
        <img
          src="./pictures/main/lectionsBack/firstBack.png"
          alt="lection image"
          width={257}
          height={171}
        />
      </div>
      <div className={styles.root__main}>
        <h4>Javascript</h4>
        <p>Promises and async func</p>
      </div>
      <div className={styles.root__footer}>
        <p>01.02.2022</p>
        <button type="button" className="watchButton" alt="watch lection">
          Смотреть
        </button>
      </div>
    </div>
  );
};
