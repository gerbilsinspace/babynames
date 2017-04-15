/*
 *
 * Filter reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FILTER,
} from './constants';

const initialState = "All";

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default filterReducer;
