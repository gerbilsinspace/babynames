/*
 *
 * User reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_USER,
} from './constants';

const initialState = fromJS({});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      if (action.id) {
        return {
          id: action.id,
          name: action.name
        };  
      }
      return initialState;
    default:
      return state;
  }
}

export default userReducer;
