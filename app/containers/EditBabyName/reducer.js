/*
 *
 * BabyName reducer
 *
 */

import { fromJS } from 'immutable';
import {
  BABY_NAME_IN_EDIT_STATE,
} from './constants';

const initialState = '';

function editBabyNameReducer(state = initialState, action) {
  switch (action.type) {
    case BABY_NAME_IN_EDIT_STATE:
      return action.name;
    default:
      return state;
  }
}

export default editBabyNameReducer;
