/* eslint import/no-extraneous-dependencies: off */
import { createSlice } from "@reduxjs/toolkit";

export const setCurrentSolution = (user) => async (dispatch, getState) => {
  console.log(user,"user");
  dispatch(setData(user));
};

const initialState = {
  role: [], // guest
  data: {},
};

const currentSolutionSlice = createSlice({
  name: "solutionDetail",
  initialState,
  reducers: {
    setData: (state, action) => action.payload,
  },
  extraReducers: {},
});

export const { setData } = currentSolutionSlice.actions;

export default currentSolutionSlice.reducer;
