import React from 'react';
import styles from './styles.module.scss';

export const Feedback = ({ role, imageURL, title, description }) => {
  return (
    <div className={styles.root}>
      <div className={styles.root__header}>
        <img src={imageURL} alt="avatar" width={100} />
        <h2>{title}</h2>
      </div>
      <h3 className={styles.root__role}>{role}</h3>
      <p className={styles.root__description}>{description}</p>
    </div>
  );
};
