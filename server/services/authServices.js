const {
    insertUser,
    retrieveUser,
    emailExists
} = require("../dbOps/dbOps.js")
const {client} = require('../config/dbConnect.js')

exports.registerUser = async (userData) => {
    try{
        let isExisting = await emailExists(userData.email, client)
        if(isExisting){
            throw new Error(`Email is already in use!`)
        }else{
           let newUserData = await insertUser(userData, client)
           return newUserData
        }
    }catch(err){
        console.log(err)
    }
}

exports.loginUser = async (userData) => {
    try {
        let user = await retrieveUser(userData.email, userData.password, client)
        return user
    }catch(err){

    }
}