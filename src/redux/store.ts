import { configureStore } from '@reduxjs/toolkit';
import priceReducer from './pricing/pricingSlice'

const store = configureStore({
  reducer: {
    pricing: priceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;


