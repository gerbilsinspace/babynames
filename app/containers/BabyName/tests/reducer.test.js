
import { fromJS } from 'immutable';
import babyNameReducer from '../reducer';

describe('babyNameReducer', () => {
  it('returns the initial state', () => {
    expect(babyNameReducer(undefined, {})).toEqual(fromJS({}));
  });
});
