import React from 'react';
import styles from './LectureBlock.module.scss';

export const LectureBlock = ({ imageURL, title, description, lectionDate }) => {
  return (
    <div className={styles.root}>
      <div className={styles.root__header}>
        <div>
          <span>Лекция</span>
        </div>
        <img src={imageURL} alt="lection" width={257} height={171} />
      </div>
      <div className={styles.root__mainContainer}>
        <div className={styles.root__main}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className={styles.root__footer}>
          <p>{lectionDate}</p>
          <button type="button" className="watch-button" alt="watch lection">
            Смотреть
          </button>
        </div>
      </div>
    </div>
  );
};
