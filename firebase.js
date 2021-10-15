import firebase from "firebase"


const firebaseConfig = {

          apiKey: process.env.APP_KEY,

          authDomain: "netflix-31f0c.firebaseapp.com",

          projectId: "netflix-31f0c",

          storageBucket: "netflix-31f0c.appspot.com",

          messagingSenderId: "751553077353",

          appId: "1:751553077353:web:772506dc1283e9d73a82f8",

          measurementId: "G-XD0PKV1NKR"

};



// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()


export default storage

// const analytics = getAnalytics(app);