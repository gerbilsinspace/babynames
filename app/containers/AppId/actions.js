/*
 *
 * AppId actions
 *
 */

import {
  UPDATE_APP_ID,
} from './constants';

export function updateAppId(appId) {
  return {
    type: UPDATE_APP_ID,
    appId
  };
}
