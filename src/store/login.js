import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import { errorActions } from "./errors";

const initalState = {
  isloggedIn: false,
  account: false,
  username: "",
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: initalState,
  reducers: {
    login(state, action) {
      state.isloggedIn = true;
      state.username = action.payload.name;
    },
    logout(state) {
      state.isloggedIn = false;
    },
    haveAccount(state, action) {
      state.account = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;

export const createUser = (inputs) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/aegis/v1/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );

      if (response.ok) {
        const respObj = await response.json();
        if (respObj.success === true)
          dispatch(loginActions.login({ name: inputs.name }));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUser = (inputs) => {
  return async (dispatch) => {
    try {
      dispatch(errorActions.createLoginError(false));
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/aegis/v1/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );

      if (response.ok) {
        const respObj = await response.json();
        console.log(respObj);
        if (respObj.success === true)
          dispatch(loginActions.login({ name: respObj.user.name }));
      } else {
        const respObj = await response.json();
        if (respObj.error === true) {
          dispatch(errorActions.createLoginError(true));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default loginSlice;
