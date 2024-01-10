import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Feactures/counterSlice';

const store = configureStore({
  reducer: {
    // Add your reducers here
    counter:counterReducer
  }
});

export { store };


