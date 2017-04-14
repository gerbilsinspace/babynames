import * as firebase from 'firebase';
import { addBabyName, editBabyName } from 'containers/BabyName/actions';

const app = {
	init: (store) => {
		firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    });

		var database = firebase.database().ref('babyNames');

		database.on('value', (snapshot) => {
			const babyNamesInDatabase = Object.values(snapshot.val());
			let babyNamesInWebsite = store.getState().toObject().babyNames;
	
			babyNamesInDatabase.forEach((babyNameInDatabase, id) => {
				var hasBeenSeen = false;

				babyNamesInWebsite.forEach((babyNameInWebsite) => {
					if (babyNameInDatabase.name === babyNameInWebsite.name) {
						hasBeenSeen = babyNameInDatabase;
					}
				});

				if (!hasBeenSeen) {
					store.dispatch(addBabyName(id, babyNameInDatabase.name, babyNameInDatabase.gender, babyNameInDatabase.Grace, babyNameInDatabase.Joe));
				} else {
					store.dispatch(editBabyName(babyNameInDatabase));
				}

				babyNamesInWebsite = store.getState().toObject().babyNames;
			});
		
		});
	},

	addBabyName: (name, gender, babyNames) => {
		var database = firebase.database().ref('babyNames/' + name + '/');
		var hasBeenSeen = -1;

		babyNames.forEach((babyName, id) => {
			if (babyName.name === name) {
				hasBeenSeen = id;
			}
		});
		
		if (hasBeenSeen === -1) {
			database.update({name: name, gender: gender});
		}
	},

	editBabyName: (personChooser, babyName, likeFactor) => {
		var database = firebase.database().ref('babyNames/' + babyName + '/');

		if (personChooser === "Joe") {
			database.update({
				Joe: likeFactor
			});	
		} else {
			database.update({
				Grace: likeFactor
			});
		}
	}
};

export default app;