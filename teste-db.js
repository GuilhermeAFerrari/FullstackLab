const admin = require('firebase-admin')
const secret = require('./firebase-secret.json')

admin.initializeApp({
    credential: admin.credential.cert(secret)
})

const db = admin.firestore()

db
    .collection('test').add({
        test: 1
    })
    .then(() => {
        console.log('ok')
    })
