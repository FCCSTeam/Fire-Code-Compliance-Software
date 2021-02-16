const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
    //get user and add custom admin claim
    return admin.auth().getUserByEmail.getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        });
    }).then(() => {
        message: `Success! ${data.email} is now an administrator`
    }).catch(err => {
        return err;
    });
});
