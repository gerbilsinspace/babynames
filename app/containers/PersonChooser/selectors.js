import { createSelector } from 'reselect';

/**
 * Direct selector to the personChooser state domain
 */
const selectPersonChooserDomain = (state) => state.get('personChooser');

export default selectPersonChooserDomain;
