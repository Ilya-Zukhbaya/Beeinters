import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromFavorite } from '../redux/slices/favoriteSlice';

export const FavoriteItem = ({ id, description, imageURL, title, lectionDate }) => {
  const dispatch = useDispatch();
  const removingFromFavorite = () => {
    if (window.confirm('Are you sure you want to remove this lecture from favorities?')) {
      dispatch(removeFromFavorite(id));
    }
  };

  return (
    <div className="d-flex align-center justify-between favorite-container pb-10">
      <div className="d-flex align-center favoriteItem-container">
        <div className="pr-20">
          <img src={imageURL} alt="favoritedImage" width={200} height={100} />
        </div>
        <div>
          <h2>{title}</h2>
          <p className="favoritedItem-description">{description}</p>
        </div>
      </div>
      <div>
        <p>Дата лекции:</p>
        <p>{lectionDate}</p>
      </div>
      <div className="miniLecLogo-container">
        <span>Лекция</span>
      </div>
      <div onClick={removingFromFavorite}>
        <img src="./pictures/main/remove.png" width={25} alt="removes" className="remove-icon" />
      </div>
    </div>
  );
};
