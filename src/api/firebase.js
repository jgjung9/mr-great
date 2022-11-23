import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import * as db from 'firebase/database';
import * as st from 'firebase/storage';
import uuid from 'react-uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = db.getDatabase(app);
const storage = st.getStorage(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedAdmin = user ? await adminUser(user) : null;
    const updatedRider = updatedAdmin ? await riderUser(updatedAdmin) : null;
    callback(updatedRider);
  });
}

async function adminUser(user) {
  return db
    .get(db.ref(database, 'admins')) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

async function riderUser(user) {
  return db
    .get(db.ref(database, 'riders')) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const riders = snapshot.val();
        const isRider = riders.includes(user.uid);
        return { ...user, isRider };
      }
      return user;
    });
}

export async function addNewMenu(menu, imageURL) {
  const id = uuid();
  return db.set(db.ref(database, `menu/${menu.category}/${id}`), {
    ...menu,
    id,
    price: parseInt(menu.price),
    image: imageURL,
    count: 0,
  });
}

export async function uploadImage(name, file) {
  const fileExtension = file.name.split('.')[1];
  const fileRef = st.ref(storage, `image/${name}.${fileExtension}`);
  return st
    .uploadBytes(fileRef, file)
    .then((snapshot) => st.getDownloadURL(snapshot.ref))
    .catch(console.error);
}
