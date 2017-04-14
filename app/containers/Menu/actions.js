/*
 *
 * Menu actions
 *
 */

import {
  SELECT_MENU,
} from './constants';

export function selectMenu(menu) {
  return {
    type: SELECT_MENU,
    menu
  };
}
