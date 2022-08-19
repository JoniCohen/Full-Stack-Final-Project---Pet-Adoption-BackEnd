const fs = require('fs')
const path = require('path')
const {addUserModel,logInUserModel,getUserByIdModel,changeUserSettingsModel} = require('../Models/usersModels')
const bcrypt = require('bcrypt');
const compareBcrypt = require('../Middleware/usersMiddleware')

async function signUpUser(req,res){
try{
        const {firstName,lastName,phoneNumber,email,password,confirmPassword,bio} = req.body
        const password_hash = bcrypt.hashSync(password,3)
        const registerUser = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            email: email,
            password: password_hash,
            bio: bio,
        }

        const newUser = await addUserModel(registerUser)
        res.send(newUser)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}

async function logInUser(req,res){
    try{
        const email = req.body.email
        const password = req.body.password
        const user = await logInUserModel(email,password)
        console.log(user)
        res.send(user)
    }catch(err){
        res.status(400).send(err.message)
    }
    
}
async function getUserById(req,res){
    try{
        const usersById = await getUserByIdModel(req.params.userId)
        console.log(req.params.userId)
        res.send(usersById)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}
async function changeProfileSettings(req,res){
    try{
        const {userId} = req.params
        const {firstName,lastName,phoneNumber,email,password,bio} = req.body
        const password_hash = compareBcrypt(password,3)
        const userToChangeById={id_user:userId,first_name:firstName,last_name:lastName,phone_number:phoneNumber,email:email,password:password_hash,bio:bio}
        const userChanged = changeUserSettingsModel(userId,userToChangeById)
        
        res.send(userChanged)
    }catch(err){    
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = {signUpUser,logInUser,getUserById,changeProfileSettings}