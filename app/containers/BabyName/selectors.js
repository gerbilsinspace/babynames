import { createSelector } from 'reselect';

/**
 * Direct selector to the babyName state domain
 */
const selectBabyNameDomain = () => (state) => state.get('babyName');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BabyName
 */

const makeSelectBabyName = () => createSelector(
  selectBabyNameDomain(),
  (substate) => substate.toJS()
);

export default makeSelectBabyName;
export {
  selectBabyNameDomain,
};
