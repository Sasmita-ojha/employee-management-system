import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './slice/RegistrationSlice';

const store = configureStore({
  reducer: {
    registration: registrationReducer
  }
});

export default store;