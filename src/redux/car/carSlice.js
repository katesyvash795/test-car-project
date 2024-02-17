import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operation";

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Сброс ошибки перед загрузкой
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload; // Устанавливаем полученные машины
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; // Устанавливаем сообщение об ошибке
      });
  },
});
export const car= carSlice.reducer;