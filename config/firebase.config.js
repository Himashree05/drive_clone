const Firebase = require("firebase-admin")


const serviceAccount = require('../drive-22ea-firebase.json')
const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive-222ea.appspot.com'
})


module.exports = Firebase;