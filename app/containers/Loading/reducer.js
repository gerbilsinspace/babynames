/*
 *
 * Loading reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_ITEM_TO_LOADING,
  REMOVE_ITEM_FROM_LOADING
} from './constants';

const initialState = fromJS([]);

function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_LOADING:
      return state.push(action.item);
    case REMOVE_ITEM_FROM_LOADING:
    	const itemIndex = state.findIndex((item) => {
    		return item === action.item;
    	});
     	
     	return state.remove(itemIndex);
    default:
      return state;
  }
}

export default loadingReducer;
