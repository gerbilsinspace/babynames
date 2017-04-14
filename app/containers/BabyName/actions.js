/*
 *
 * BabyName actions
 *
 */

import {
  ADD_BABY_NAME,
  EDIT_BABY_NAME
} from './constants';

export function addBabyName(id, name, gender, Grace = "", Joe = "") {
  return {
    type: ADD_BABY_NAME,
    id,
  	name,
  	gender,
  	Grace,
  	Joe
  };
}

export function editBabyName(babyNameObject) {
	return {
		type: EDIT_BABY_NAME,
		name: babyNameObject.name,
		gender: babyNameObject.gender,
		Grace: babyNameObject.Grace,
		Joe: babyNameObject.Joe
	}
}