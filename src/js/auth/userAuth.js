import { projectAuth } from "@/firebase/config"

//current active user
var user = projectAuth.CurrentUser

//whenever firebase fires a user change
projectAuth.onAuthStateChanged(_user => {
    user = _user
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
        //if no catch, user is found
        loginToken.user = response.user
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

const createUser = async (email, password) => {
    let userToken = { user: null, error: null }
    try {
        const response = await projectAuth.createUserWithEmailAndPassword(email, password)
        //if no catch, user is found
        userToken.user = response.user
    } catch (err) {
        userToken.error = err
    }
    finally {
        return userToken
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

export { getActiveUser, userLogin, userLogout, createUser }