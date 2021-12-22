const firebaseConfig = {
  apiKey: 'AIzaSyCA1NqwMQ1TKdE6Lpum4WUnUd9003t_HGU',
  authDomain: 'tetris-965ca.firebaseapp.com',
  projectId: 'tetris-965ca',
  storageBucket: 'tetris-965ca.appspot.com',
  messagingSenderId: '473256482309',
  appId: '1:473256482309:web:125c86d80d9575d2bb2e6c',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const fetchScores = async () => {
  const scoresArr = [];
  await db
    .collection('scores')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => scoresArr.push(doc.data().score));
    })
    .catch(err => console.log(err));
  return scoresArr;
};
