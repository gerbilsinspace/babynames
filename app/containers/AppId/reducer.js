/*
 *
 * AppId reducer
 *
 */

import {
  UPDATE_APP_ID,
} from './constants';

const initialState = '';

function appIdReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_APP_ID:
    	if (action.appId) {
    		return action.appId;	
    	}
      return initialState;
    default:
      return state;
  }
}

export default appIdReducer;
