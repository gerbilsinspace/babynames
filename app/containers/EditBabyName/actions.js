import { EDIT_BABY_NAME } from './constants';

export function editBabyName(name) {
	return {
		type: EDIT_BABY_NAME,
		name
	}
}