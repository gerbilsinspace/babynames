import { BABY_NAME_IN_EDIT_STATE } from './constants';

export function babyNameInEditState(name) {
	return {
		type: BABY_NAME_IN_EDIT_STATE,
		name
	}
}