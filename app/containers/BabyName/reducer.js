/*
 *
 * BabyName reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_BABY_NAME,
  EDIT_BABY_NAME
} from './constants';

const initialState = [];
let newState;

function babyNameReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BABY_NAME:
      return [
      	...state,
      	{
      		name: action.name,
      		gender: action.gender,
      		ratings: action.ratings
      	}
      ];
    case EDIT_BABY_NAME:
    	newState = state.map((babyName) => {
    		if (babyName.name === action.name) {
    			babyName = {
    				name: action.name,
    				gender: action.gender,
    				ratings: action.ratings
    			}
    		}

    		return babyName;
    	});
      return newState;
    default:
      return state;
  }
}

export default babyNameReducer;
