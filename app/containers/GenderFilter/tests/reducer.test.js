
import { fromJS } from 'immutable';
import genderFilterReducer from '../reducer';

describe('genderFilterReducer', () => {
  it('returns the initial state', () => {
    expect(genderFilterReducer(undefined, {})).toEqual(fromJS({}));
  });
});
