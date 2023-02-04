import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { v4 } from 'uuid';

const firebaseConfig = {
  apiKey: 'AIzaSyBgWykZK_ZSGInp_0iAJnaOjOgeuen-y40',
  authDomain: 'canchitas-aab2e.firebaseapp.com',
  projectId: 'canchitas-aab2e',
  storageBucket: 'canchitas-aab2e.appspot.com',
  messagingSenderId: '71267479117',
  appId: '1:71267479117:web:723276cae2b29725543604',
  measurementId: 'G-FNFCXV2TW3',
};

const app = initializeApp(firebaseConfig);

export const uploadFile = (file, updateCb) => {
  const path = `${file.name}`;
  const storage = getStorage(app);
  const storageRef = ref(storage, path + v4());
  const uploadTask = uploadBytesResumable(storageRef, file);
  return new Promise((res, rej) => {
    return uploadTask.on(
      'state_changed',
      updateCb,
      () => rej(null),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          res(downloadURL);
        });
      }
    );
  });
};

export default app;
