import { createSelector } from '@reduxjs/toolkit';

export const selectFavoritesList = state => state.favorites.favList;
export const selectFavoritesIds = createSelector(
  [selectFavoritesList],
  favList => {
    return favList.map(favorite => favorite.id);
  }
);
