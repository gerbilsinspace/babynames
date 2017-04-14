
import { fromJS } from 'immutable';
import personChooserReducer from '../reducer';

describe('personChooserReducer', () => {
  it('returns the initial state', () => {
    expect(personChooserReducer(undefined, {})).toEqual(fromJS({}));
  });
});
