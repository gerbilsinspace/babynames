import * as firebase from 'firebase';
import { addBabyName, editBabyName } from 'containers/BabyName/actions';
import { addItemToLoading, removeItemFromLoading } from 'containers/Loading/actions';
import { updateUser } from 'containers/User/actions';
import { updateAppId } from 'containers/AppId/actions';

const app = {
	init: (store) => {
		store.dispatch(addItemToLoading('firebaseSetup'));
		const config = {
		  apiKey: process.env.FIREBASE_API_KEY,
		  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
		  databaseURL: process.env.FIREBASE_DATABASE_URL,
		  projectId: process.env.FIREBASE_PROJECT_ID,
		  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
		  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
		};

		firebase.initializeApp(config);
		app.store = store;

		firebase.auth().onAuthStateChanged(function(user) {
		  app.setupData(user);
		});
	},

	store: {},

	setupData: (user) => {
		const store = app.store;

		if (user) {
	  	const userId = user.uid;
	  	console.log('there is a user logged in, setting up the app');
	  	const userDatabase = firebase.database().ref('users/' + userId);

	  	userDatabase.once('value', ((userSnapshot) => {
	  		if (!userSnapshot.val()) { // register
	  			console.log('user hasn\'t logged in before, setting up their user and babyNameApp');
	  			const babyNameAppDatabase = firebase.database().ref('babyNames/');
	  			const singleBabyNameDatabase = babyNameAppDatabase.push();
	  			const babyNameId = singleBabyNameDatabase.key;
	  			const singleBabyNameUserDatabase = firebase.database().ref('babyNames/' + babyNameId + '/users/' + userId);

	  			singleBabyNameUserDatabase.set({
	  				primaryUser: 'true'
	  			});

	  			userDatabase.set({
	  				babyNameAppId: babyNameId
	  			});

	  			app.setupBabyNames(userId, babyNameId);
	  			app.watchUserData(userId);
	  		} else { // login
					// User has registered before, set the babyNameId
	  			userDatabase.once('value', (snapshot) => {
	  				const babyNameId = snapshot.val().babyNameAppId;

	  				app.setupBabyNames(userId, babyNameId);
	  				app.watchUserData(userId);
	  			});
	  		}
	  	}));
	  } else {
	    // No user is signed in.
	    store.dispatch(removeItemFromLoading('firebaseSetup'));
	  }
	},

	updateUserInDatabase: (id, name) => {
		const database = firebase.database().ref('users/' + id + '/');

		database.update({
			name: name
		});
	},

	watchUserData: (id) => {
		const database = firebase.database().ref('users/' + id + '/');
		const store = app.store;

		database.on('value', (snapshot) => {
			store.dispatch(updateUser(id, snapshot.val().name));
			store.dispatch(updateAppId(snapshot.val().babyNameAppId));
		});
	},

	setupBabyNames: (userId, babyNameAppId) => {
		const store = app.store;
		const database = firebase.database().ref('babyNames/' + babyNameAppId + '/names/');

		database.on('value', (snapshot) => {
			const babyNamesInDatabase = Object.values(snapshot.val());
			let babyNamesInWebsite = store.getState().toObject().babyNames;
	
			console.log('changing value of names');

			babyNamesInDatabase.forEach((babyNameInDatabase, babyNameId) => {
				var hasBeenSeen = false;

				babyNamesInWebsite.forEach((babyNameInWebsite) => {
					if (babyNameInDatabase.name === babyNameInWebsite.name) {
						hasBeenSeen = babyNameInDatabase;
					}
				});

				if (hasBeenSeen) {
					store.dispatch(editBabyName(babyNameInDatabase.name, babyNameInDatabase.gender, babyNameInDatabase.ratings));
				} else {
					store.dispatch(addBabyName(babyNameInDatabase.name, babyNameInDatabase.gender, babyNameInDatabase.ratings));
				}
			});

			store.dispatch(removeItemFromLoading('firebaseSetup'));
		});
	},

	addBabyName: (name, gender, babyNames) => {
		const database = firebase.database().ref('babyNames/' + appId + '/names/' + name + '/');
		let hasBeenSeen = -1;

		babyNames.forEach((babyName) => {
			if (babyName.name === name) {
				hasBeenSeen = babyName;
			}
		});
		
		if (hasBeenSeen === -1) {
			database.update({name: name, gender: gender});
		}
	},

	editBabyName: (appId, userName, babyName, rating) => {
		const ratingDatabase = firebase.database().ref('babyNames/' + appId + '/names/' + babyName + '/ratings/');

		ratingDatabase.once('value', (snapshot) => {
			const users = snapshot.val();
			const userDatabase = app.getUserDatabase(users, appId, userName, babyName, rating);
			
			userDatabase.update({
				name: userName,
				rating: rating
			})
		});
	},

	getUserDatabase: (users, appId, userName, babyName, rating) => {
		if (users) {
			users = Object.keys(users).map(function (key) { return users[key]; });

			let foundMatch = false;
			
			users.forEach((user, userId) => {
				if(user.name === userName) {
					foundMatch = userId;
				}
			});

			if (foundMatch === false) {
				console.log('did not find match');
				return firebase.database().ref('babyNames/' + appId + '/names/' + babyName + '/ratings/' + users.length + '/');
			} else {
				console.log('found match');
				return firebase.database().ref('babyNames/' + appId + '/names/' + babyName + '/ratings/' + foundMatch + '/');	
			}
		} else {
			console.log('no users to update');
			return firebase.database().ref('babyNames/' + appId + '/names/' + babyName + '/ratings/0/');
		}		
	},

	login: (email, password) => {
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		});
	},

	register: (email, password) => {
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		});
	}
};

export default app;