import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favList: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }) => {
      const index = state.favList.findIndex(({ id }) => id === payload.id);
      if (index === -1) {
        state.favList.push(payload);
        return;
      }
      state.favList.splice(index, 1);
    },
    removeFavorite: (state, { payload }) => {
      const index = state.favList.findIndex(({ id }) => id === payload);
      state.favList.splice(index, 1);
    },
  },
});

export const { toggleFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
