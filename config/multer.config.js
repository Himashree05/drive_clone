const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-22ea-firebase.json');
const { credential } = require('firebase-admin');


const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'drive-222ea-appspot.com'
})


const upload = multer({
    storage: storage,
})


module.exports = upload;