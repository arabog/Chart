import firebase from "firebase/compat/app"
// import "firebase/compat/auth"
// import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
	apiKey: process.env.APP_KEY,

	authDomain: "netflix-49f12.firebaseapp.com",

	projectId: "netflix-49f12",

	storageBucket: "netflix-49f12.appspot.com",

	messagingSenderId: "778845666090",

	appId: "1:778845666090:web:f52525365faebf88727c53"
};

firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
const storage =firebase.storage();

// export { auth, provider, storage};
// export default db;

export default storage;