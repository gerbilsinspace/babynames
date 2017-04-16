/*
 *
 * GenderFilter reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GENDER_FILTER,
} from './constants';

const initialState = "Both";

function genderFilterReducer(state = initialState, action) {
  switch (action.type) {
    case GENDER_FILTER:
      return action.genderFilter;
    default:
      return state;
  }
}

export default genderFilterReducer;
