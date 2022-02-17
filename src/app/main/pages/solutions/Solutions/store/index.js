import { combineReducers } from '@reduxjs/toolkit';
import currentSolutionSlice from './currentSolutionSlice';

const solutionReducers = combineReducers({
  currentSolutionSlice
});

export default solutionReducers;
