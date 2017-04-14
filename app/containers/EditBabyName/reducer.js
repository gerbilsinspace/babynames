/*
 *
 * BabyName reducer
 *
 */

import { fromJS } from 'immutable';
import {
  EDIT_BABY_NAME,
} from './constants';

const initialState = '';

function editBabyNameReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_BABY_NAME:
      return action.name;
    default:
      return state;
  }
}

export default editBabyNameReducer;
