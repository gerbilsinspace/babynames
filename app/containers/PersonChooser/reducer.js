/*
 *
 * PersonChooser reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_PERSON_CHOOSER,
} from './constants';

const initialState = fromJS("");

function personChooserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PERSON_CHOOSER:
      return action.personChooser;
    default:
      return state;
  }
}

export default personChooserReducer;
