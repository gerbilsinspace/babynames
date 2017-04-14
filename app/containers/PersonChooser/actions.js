/*
 *
 * PersonChooser actions
 *
 */

import {
  SET_PERSON_CHOOSER,
} from './constants';

export function setPersonChooser(person) {
  return {
    type: SET_PERSON_CHOOSER,
    personChooser: person
  };
}
