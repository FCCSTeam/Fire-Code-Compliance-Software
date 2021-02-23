import { projectAuth } from "@/firebase/config"
import { adminStatus } from './userAccess.js'

//current active user
var user = projectAuth.CurrentUser

//whenever firebase fires a user change
projectAuth.onAuthStateChanged(_user => {
    user = _user;
    processUser(_user)
})

const processUser = async (_user) => {
    await adminStatus(_user).then(token => {
        if (token.error)
        {
            user = {..._user, isAdmin: false}
        }
        else
        {
            user = {..._user, isAdmin: token.isAdmin}
        }
    })
}

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
        await adminStatus(response.user).then(token => {
            if (token.error)
            {
                loginToken.error = "Error trying to evaluate user priveledges"
                user = null;
            }
            else
            {
                loginToken.user = {...response.user, isAdmin: token.isAdmin}
            }
        })
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
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)
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