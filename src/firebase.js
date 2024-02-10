import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVCrCaVXiWihpNNgv9MthCLY2pr5rSdCI",
  authDomain: "topoutlet-39d34.firebaseapp.com",
  projectId: "topoutlet-39d34",
  storageBucket: "topoutlet-39d34.appspot.com",
  messagingSenderId: "918368521284",
  appId: "1:918368521284:web:d6f19fd368c3bb9d5f8011",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
