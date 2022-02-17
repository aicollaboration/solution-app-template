import { createSlice } from "@reduxjs/toolkit";
import { showMessage } from "app/store/fuse/messageSlice";
import jwtService from "app/services/jwtService";
import { supabase } from "../../supabaseClient";
import { setUserData } from "./userSlice";

export const submitLogin =
  ({ email, password }) =>
  async (dispatch) => {
    // const { user, error, session } = await supabase.auth.signIn({ email, password });
    return jwtService
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user, "user");
        dispatch(setUserData(user.user));
        return dispatch(loginSuccess());
      })
      .catch((errors) => {
        return dispatch(loginError(errors));
      });
  };

export const submitLoginWithSuperbase =
  ({ email, password }) =>
  async (dispatch) => {
    return jwtService
      .signInWithEmailAndPasswordSuperbase(email, password)
      .then((user) => {
        console.log(user);
        dispatch(setUserData(user.user));
        return dispatch(loginSuccess());
      })
      .catch((errors) => {
        return dispatch(loginError(errors));
      });
  };

const initialState = {
  success: false,
  errors: [],
};

const loginSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.success = true;
      state.errors = [];
    },
    loginError: (state, action) => {
      state.success = false;
      state.errors = action.payload;
    },
  },
  extraReducers: {},
});

export const { loginSuccess, loginError } = loginSlice.actions;

export default loginSlice.reducer;
