import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./login";
import flightSlice from "./flightlist";
import errorSlice from "./errors";

const store = configureStore({
  reducer: {
    loginReducer: loginSlice.reducer,
    flightSliceReducer: flightSlice.reducer,
    errorReducer: errorSlice.reducer,
  },
});

export default store;
