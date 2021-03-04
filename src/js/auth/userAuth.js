import { projectAuth } from "@/firebase/config"
import { authMaskAuth } from "@/firebase/config_authMask"
import { adminStatus } from './userAccess.js'

//current active user
var user = projectAuth.CurrentUser

//whenever firebase fires a user change
projectAuth.onAuthStateChanged(_user => {
    user = _user;
})

/**
 * Get active user
 */
const getActiveUser = () => {
    return user
}

const userLogin = async (email, password) => {
    let loginToken = { user: null, error: null }
    try {
        const response = await projectAuth.signInWithEmailAndPassword(email, password)
        loginToken.user = response.user;
    } catch (err) {
        //failed to login
        if (err.code == 'auth/user-not-found' || err.code == 'auth/wrong-password') {
            loginToken.error = "Credential mismatch!";
        }
        else if (err.code == 'auth/invalid-email') {
            loginToken.error = "This email is not valid!";
        }
        else {
            loginToken.error = "Login unsuccessful!";
        }
    }
    finally {
        return loginToken
    }
}

const userLogout = async () => {
    let logoutToken = { error: null }
    try {
        await projectAuth.signOut()
    }
    catch (err) {
        logoutToken.error = "Error signing user out!"
    }
    finally {
        return logoutToken
    }
}

const createUser = async (email, password) => {
    let userToken = { user: null, error: null }
    try {
        var accessGranted = await adminStatus(getActiveUser()).then(token => {
            return token.isAdmin
        });
        if (accessGranted)
        {
            //use the secondary mask app to prevent the user on the main app from being logged out
            const response = await authMaskAuth.createUserWithEmailAndPassword(email, password)
            authMaskAuth.signOut()
            //if no catch, user is found
            userToken.user = response.user
        }else
        {
            userToken.error = "You do not have permission to do this!"
        }
    } catch (err) {
        userToken.error = err
    }
    finally {
        return userToken
    }
}

export { getActiveUser, userLogin, userLogout, createUser }