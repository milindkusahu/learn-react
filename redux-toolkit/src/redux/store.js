import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

/**
 * Steps:
 *
 * 1. Import configureStore from "@reduxjs/toolkit".
 * 2. Import counterSlice from "../features/counter/counterSlice".
 * 3. Create a store using configureStore.
 * 4. Pass the counterSlice reducer to the store.
 * 5. Export the store.
 *
 */
