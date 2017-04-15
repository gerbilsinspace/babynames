import { EDIT_BABY_NAME } from './constants';

export function editBabyName(name) {
	console.log(name);
	return {
		type: EDIT_BABY_NAME,
		name
	}
}