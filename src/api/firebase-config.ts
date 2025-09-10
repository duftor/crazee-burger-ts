import { FirebaseOptions, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const getEnvVar = (key: keyof ImportMetaEnv): string => {
    const value = import.meta.env[key]
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`)
    }
    return value
}

const firebaseConfig: FirebaseOptions = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: getEnvVar("VITE_APP_AUTH_DOMAIN"),
    projectId: getEnvVar("VITE_APP_PROJECT_ID"),
    storageBucket: getEnvVar("VITE_APP_STORAGE_BUCKET"),
    messagingSenderId: getEnvVar("VITE_APP_MESSAGING_SENDER_ID"),
    appId: getEnvVar("VITE_APP_APP_ID"),
}

// Initialize Firebase
const app = initializeApp(firebaseConfig) // pour se connecter à notre compte firebase
export const db = getFirestore(app) // pour se connecter à notre BDD Firestore
