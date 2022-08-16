const fs = require('fs')
const path = require('path')
const {addUserModel,logInUserModel,getUserByIdModel,changeUserSettingsModel} = require('../Models/usersModels')
const { v4: uuidv4, v4 } = require('uuid');
const bcrypt = require('bcrypt');


async function signUpUser(req,res){
try{
        const {firstName,lastName,phoneNumber,email,password,confirmPassword,bio} = req.body
        const password_hash = bcrypt.hashSync(password,3)
        const confirmPassword_hash = bcrypt.hashSync(confirmPassword,3)
        const registerUser = {
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: password_hash,
            confirmPassword: confirmPassword_hash,
            bio: bio,
            createdDate: new Date().toISOString()
        }

        const allUsers = addUserModel(registerUser)
        res.send(allUsers)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}

async function logInUser(req,res){
    try{
        const email = req.body.email
        const password = req.body.password
        const user = logInUserModel(email,password)
        res.send(user)
    }catch(err){
        res.status(400).send(err.message)
    }
    
}
async function getUserById(req,res){
    try{
        const usersById = getUserByIdModel(req.params.userId)
        res.send(usersById)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}
async function changeProfileSettings(req,res){
    try{
        const {userId} = req.params
        const {firstName,lastName,phoneNumber,email,password,confirmPassword,bio} = req.body
        const password_hash = bcrypt.hashSync(password,3)
        const confirmPassword_hash = bcrypt.hashSync(confirmPassword,3)
        const userToChangeById={id:userId,firstName:firstName,lastName:lastName,phoneNumber:phoneNumber,email:email,password:password_hash,confirmPassword:confirmPassword_hash,bio:bio}
        const userChanged = changeUserSettingsModel(userId,userToChangeById)
        
        res.send(userChanged)
    }catch(err){    
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = {signUpUser,logInUser,getUserById,changeProfileSettings}