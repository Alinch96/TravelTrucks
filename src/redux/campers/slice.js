import { createSlice } from '@reduxjs/toolkit';
import { getAllCampers, getCamperById } from './operations';

const initialState = {
  items: [],
  currentCamper: null,
  isLoading: false,
  error: null,
  page: 1,
  limit: 4,
  hasNextPage: false,
};

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const hasNextPage = (state, payload) => {
  const totalPages = Math.ceil(payload.total / state.limit);
  state.hasNextPage = state.page < totalPages;
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    resetPage(state) {
      state.page = 1;
      state.items = [];
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.page === 1) {
          state.items = payload.items;
        } else {
          state.items.push(...payload.items);
        }
        hasNextPage(state, payload);
      })
      .addCase(getAllCampers.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentCamper = payload;
      })
      .addCase(getCamperById.rejected, handleRejected);
  },
});

export const { resetPage, incrementPage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
