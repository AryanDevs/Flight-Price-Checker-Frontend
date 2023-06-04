import { createSlice } from "@reduxjs/toolkit";
import { errorActions } from "./errors";

const initalState = {
  isVisible: false,
  loadingVisible: false,
  flightList: [],
};

const flightSlice = createSlice({
  name: "flightSlice",
  initialState: initalState,
  reducers: {
    setVisible(state, action) {
      state.isVisible = action.payload;
    },

    setLoadingVisible(state, action) {
      state.loadingVisible = action.payload;
    },
    populateList(state, action) {
      state.flightList = action.payload.flights;
    },
  },
});

export const getFlights = (inputs) => {
  return async (dispatch) => {
    try {
      dispatch(errorActions.createSearchError(false));
      dispatch(flightListAction.setLoadingVisible(true));
      dispatch(flightListAction.setVisible(false));
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/aegis/v1/flights2?from=${inputs.src}&to=${inputs.dest}&passengers=${inputs.passengers}&date=${inputs.date}`,
        {
          method: "POST",
        }
      );

      if (response.ok) {
        const responseObj = await response.json();

        dispatch(flightListAction.setLoadingVisible(false));
        dispatch(
          flightListAction.populateList({ flights: responseObj.flights })
        );
        dispatch(flightListAction.setVisible(true));
      } else {
        const responseObj = await response.json();
        if (responseObj.error === true) {
          dispatch(errorActions.createSearchError(true));
          dispatch(flightListAction.setLoadingVisible(false));
        }
      }
    } catch (error) {
      dispatch(flightListAction.setLoadingVisible(false));
      console.log(error);
    }
  };
};

export const flightListAction = flightSlice.actions;

export default flightSlice;
