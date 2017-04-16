/*
 *
 * Filter actions
 *
 */

import {
  GENDER_FILTER,
} from './constants';

export function genderFilter(genderFilter) {
  return {
    type: GENDER_FILTER,
    genderFilter
  };
}
