import React from 'react';
import styles from './LectureBlock.module.scss';
import { addToFavorite, removeFromFavorite } from '../../../redux/slices/favoriteSlice';
import { useDispatch } from 'react-redux';

export const LectureBlock = ({ id, imageURL, title, description, lectionDate }) => {
  const [favoriteClick, setOnFavoriteClick] = React.useState(false);
  const dispatch = useDispatch();
  const addingToFavorite = () => {
    const item = { id, imageURL, title, description, lectionDate };
    favoriteClick ? dispatch(removeFromFavorite(id)) : dispatch(addToFavorite(item));
    setOnFavoriteClick(!favoriteClick);
  };

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
            {favoriteClick ? (
              <img
                src="./pictures/main/favoriteAdded.png"
                alt="favorite"
                width={25}
                height={20}
                onClick={addingToFavorite}
              />
            ) : (
              <img
                src="./pictures/main/favorite.png"
                alt="favorite"
                width={35}
                height={35}
                onClick={addingToFavorite}
              />
            )}
            <button type="button" className="watch-button" alt="watch lection">
              Смотреть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
