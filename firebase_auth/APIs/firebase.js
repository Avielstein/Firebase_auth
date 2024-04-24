import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "<YOURS HERE>",
  authDomain: "<YOURS HERE>",
  projectId: "<YOURS HERE>",
  storageBucket: "<YOURS HERE>",
  messagingSenderId: "<YOURS HERE>",
  appId: "<YOURS HERE>",
  measurementId: "<YOURS HERE>",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase auth and export for external use
//export const auth = getAuth(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});