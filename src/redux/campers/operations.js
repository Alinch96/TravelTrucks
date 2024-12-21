import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});
export const getAllCampers = createAsyncThunk(
  'campers/getAll',
  async (filters = {}, thunkAPI) => {
    try {
      const response = await axios.get('/campers', { params: filters });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  'campers/getCamperById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
