import { projectFirestore } from '@/firebase/config'

const adminStatus = async (user) => {
    const token = {isAdmin: false, error: null}
    const uid = user.uid
    try{
        const admins = await projectFirestore.collection('admins')
        const response = await admins.where('uid','==',uid).get()
        if (response.docs.length > 0){
            //user is admin
            token.isAdmin = true;
        }
    }catch(err){
        token.error = err.message
    }finally{
        return token
    }
}

const makeUserAdmin = async (user) => {
    const token = {error: null}
    try {
        const data = {
            uid: user.uid
        }
        const res = await projectFirestore.collection('admins').add(data)
    }catch(err){
        token.error = err.message
    }finally{
        return token
    }
}

export {adminStatus, makeUserAdmin}