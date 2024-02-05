import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD2iHj1xybUanZiTltDVMKApMPdRzx8uv4",
  authDomain: "calvinhacks2022.firebaseapp.com",
  projectId: "calvinhacks2022",
  storageBucket: "calvinhacks2022.appspot.com",
  messagingSenderId: "95227413682",
  appId: "1:95227413682:web:83dc29f21aa7bf5a10f5ab"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);
