import React from 'react';
import styles from './LectureBlock.module.scss';
import {
  addToFavorite,
  removeFromFavorite,
  selectCartItemById,
} from '../../../redux/slices/favoriteSlice';
import { useDispatch, useSelector } from 'react-redux';

export const LectureBlock = ({ id, imageURL, title, description, lectionDate, watchHref }) => {
  const dispatch = useDispatch();
  const addingToFavorite = () => {
    const item = { id, imageURL, title, description, lectionDate };
    dispatch(addToFavorite(item));
  };
  const removingTest = () => {
    dispatch(removeFromFavorite(id));
  };
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;

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
          <div>
            {addedCount === 0 ? (
              <img
                src="./pictures/main/favorite.png"
                alt="favorite"
                width={35}
                height={35}
                onClick={addingToFavorite}
              />
            ) : (
              <img
                src="./pictures/main/favoriteAdded.png"
                alt="favorite"
                width={25}
                height={20}
                onClick={removingTest}
              />
            )}
            <a href={watchHref}>
              <button type="button" className="watch-button" alt="watch lection">
                Смотреть
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
