import { defineEventHandler, readBody } from "h3"
import { collection, addDoc, doc, getDoc, updateDoc, increment, setDoc } from "firebase/firestore"

export default defineEventHandler(async (event) => {
    const db = event.context.db
    const { email } = await readBody(event)

    console.log(email)

    if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        console.log("invalid email")
        return { statusCode: 400, body: { message: "Invalid email address." } }
    }

    try {
        const colRef = collection(db, "emails")
        await addDoc(colRef, {
            email: email,
        })

        const counterDocRef = doc(db, "counters", "emailCounter")
        const counterDoc = await getDoc(counterDocRef)

        if (counterDoc.exists()) {
            await updateDoc(counterDocRef, {
                emailCount: increment(1),
            })
        } else {
            await setDoc(counterDocRef, {
                emailCount: 1,
            })
        }

        console.log("Email saved and counter updated")
        return { statusCode: 200, body: { message: "Email successfully added!" } }
    } catch (error) {
        console.error("Error storing email:", error)

        return {
            statusCode: 500,
            body: { message: "Failed to store email. Please try again later." },
        }
    }
})
