/*
 *
 * BabyName actions
 *
 */

import {
  ADD_BABY_NAME,
  EDIT_BABY_NAME
} from './constants';

export function addBabyName(name, gender, ratings) {
  return {
    type: ADD_BABY_NAME,
  	name,
  	gender,
  	ratings
  };
}

export function editBabyName(name, gender, ratings) {
	return {
		type: EDIT_BABY_NAME,
		name,
    gender,
    ratings
	}
}