const {addUserModel,logInUserModel,getUserByIdModel,changeUserSettingsModel} = require('../Models/usersModels')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

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
        const {user} = req.body
        const token = jwt.sign({id:user.id_user},process.env.TOKEN_SECRET,{expiresIn:'5h'})
        res.cookie('Token',token,{maxAge: 2 * (60 * 60 * 24)})
        res.send({name: user.first_name,token:token,id:user.id_user})
    }catch(err){
        res.status(400).send(err.message)
    }
    
}
async function getUserById(req,res){
    try{
        const usersById = await getUserByIdModel(req.params.userId)
        res.send(usersById)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}
async function changeProfileSettings(req,res){
    try{
        const {userId} = req.params
        const {firstName,lastName,phoneNumber,bio} = req.body
        const userToChangeById={first_name:firstName,last_name:lastName,phone_number:phoneNumber,bio:bio}
        const userChanged = await changeUserSettingsModel(userId,userToChangeById)
        
        res.send(userChanged)
    }catch(err){    
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = {signUpUser,logInUser,getUserById,changeProfileSettings}