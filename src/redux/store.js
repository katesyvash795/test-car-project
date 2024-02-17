import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filtersSlice';
import { car} from './car/carSlice';
// import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


    export const store = configureStore({
      reducer: {
        cars: car,
        // filter: filterReducer,
      },
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      devTools: process.env.NODE_ENV === 'development',
    });
    
    export const persistor = persistStore(store);