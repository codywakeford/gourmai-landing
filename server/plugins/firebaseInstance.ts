import { FirebaseApp, initializeApp } from "firebase/app"
import { Firestore, getFirestore } from "firebase/firestore"

export default defineNitroPlugin(async (nitroApp) => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: config.apiKey,
        authDomain: config.authDomain,
        projectId: config.projectId,
        storageBucket: config.storageBucket,
        messagingSenderId: config.messegingSenderId,
        appId: config.appId,
        measurementId: config.measurementId,
    }

    let app: FirebaseApp
    let db: Firestore

    try {
        app = initializeApp(firebaseConfig)
        db = getFirestore(app)

        if (!db) {
            console.log("Firestore instance is not initialized")
        } else {
            console.log("Firestore initialized successfully")
        }
    } catch (error) {
        console.log("Error connecting to firebase")
    }

    nitroApp.hooks.hook("request", (event) => {
        event.context.db = db
    })
})
