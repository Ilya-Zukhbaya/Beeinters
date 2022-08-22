import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorite } from '../redux/slices/favoriteSlice';

export const FavoriteItem = ({ id, description }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.favoriteSlice);
  const removingFromFavorite = () => {
    dispatch(removeFromFavorite(id));
  };

  return <p>{description}</p>;
};
