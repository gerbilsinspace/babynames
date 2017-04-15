/*
 *
 * Filter actions
 *
 */

import {
  FILTER,
} from './constants';

export function filter(filter) {
  return {
    type: FILTER,
    filter
  };
}
