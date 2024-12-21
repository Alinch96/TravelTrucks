import { createSlice } from '@reduxjs/toolkit';
import { FILTERS } from '../../constants/constants.js';
const { ac, automatic, kitchen, tv, bathroom, van, fullyIntegrated, alcove } =
  FILTERS;

const initialState = {
  equipmentList: [
    { id: '1-1', ...ac, selected: false },
    { id: '1-2', ...automatic, selected: false },
    { id: '1-3', ...kitchen, selected: false },
    { id: '1-4', ...tv, selected: false },
    { id: '1-5', ...bathroom, selected: false },
  ],
  typeList: [
    { id: '2-1', ...van, selected: false },
    { id: '2-2', ...fullyIntegrated, selected: false },
    { id: '2-3', ...alcove, selected: false },
  ],
  location: '',
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setEquipment: (state, { payload }) => {
      const index = state.equipmentList.findIndex(
        option => option.id === payload
      );
      state.equipmentList[index].selected =
        !state.equipmentList[index].selected;
    },
    setType: (state, { payload }) => {
      const index = state.typeList.findIndex(option => option.id === payload);
      state.typeList[index].selected = !state.typeList[index].selected;
      state.typeList.forEach((option, optionIndex) => {
        if (optionIndex !== index) state.typeList[optionIndex].selected = false;
      });
    },
    setLocation: (state, { payload }) => {
      state.location = payload;
    },
  },
});

export const { setEquipment, setType, setLocation } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
