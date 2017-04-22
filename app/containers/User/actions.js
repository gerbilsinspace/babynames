/*
 *
 * User actions
 *
 */

import {
  UPDATE_USER,
} from './constants';

export function updateUser(id, name) {
  return {
    type: UPDATE_USER,
    id,
    name
  };
}
