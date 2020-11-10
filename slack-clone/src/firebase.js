import firebase from'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAUVd-JSQNbhYMTypNj5_HpxPPCIDClRfM",
    authDomain: "slack-clone-bc9c6.firebaseapp.com",
    databaseURL: "https://slack-clone-bc9c6.firebaseio.com",
    projectId: "slack-clone-bc9c6",
    storageBucket: "slack-clone-bc9c6.appspot.com",
    messagingSenderId: "438257138099",
    appId: "1:438257138099:web:7f3fbf90362e61aaf433c6",
    measurementId: "G-E16DQWXLDS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;