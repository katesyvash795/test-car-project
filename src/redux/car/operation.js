import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_,thunkAPI ) => {
    try {
      const response = await axios.get('https://65cd0e5fdd519126b8400af5.mockapi.io/catalog/Advert');
    //   return response.data;
      console.log(response.data);
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
  }
);