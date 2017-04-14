/*
 *
 * Menu reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SELECT_MENU,
} from './constants';

const initialState = fromJS("");

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_MENU:
      return action.menu;
    default:
      return state;
  }
}

export default menuReducer;
