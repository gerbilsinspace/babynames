/*
 *
 * Loading actions
 *
 */

import {
  ADD_ITEM_TO_LOADING,
  REMOVE_ITEM_FROM_LOADING
} from './constants';

export function addItemToLoading(item) {
  return {
    type: ADD_ITEM_TO_LOADING,
    item
  };
}

export function removeItemFromLoading(item) {
  return {
    type: REMOVE_ITEM_FROM_LOADING,
    item
  };
}
