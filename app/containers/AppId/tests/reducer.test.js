
import { fromJS } from 'immutable';
import appIdReducer from '../reducer';

describe('appIdReducer', () => {
  it('returns the initial state', () => {
    expect(appIdReducer(undefined, {})).toEqual(fromJS({}));
  });
});
