const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt');
const dbConnection = require('../Data/knex')
const compareBcrypt = require('../Middleware/usersMiddleware')

const pathToUsersDb = path.resolve(__dirname, '../Database/users.json')

function getAllUsersModel(){
    try{
        const getUsers = dbConnection.from('users')
        return getUsers
    }catch(err){
        console.log(err)
    }
}
async function getUsersByEmailModel(email){
    try{
        const user = await dbConnection.select().from('users').where({email:email})
        console.log(user)
        return user
        
    }catch(err){
        console.log(err)
    }
    
}

async function addUserModel(registerUser){
    try{
    const addUser = await dbConnection.from('users').insert(registerUser)
    return addUser
    }catch(err){
        console.log(err)
    }
}

  async function logInUserModel(email,password){
    try{
        const userExists = await dbConnection('users').first().where({email})
        /*const userByEmailAndPassword = getAllUsersModel()
        const userExist = userByEmailAndPassword.find(user => user.email === email)*/
        return userExists
        /*if(isValidUser){
            
        }*/
    }catch(err){
        console.log(err)
    }
}
   async function getUserByIdModel(id){
        try{
            const userById = await dbConnection('users').where({id_user:id})
            //const userId = userById.find(userId =>userId.id === id)
            console.log(userById)
            return userById
        }catch(err){
            console.log(err)
        }
         }
  async function changeUserSettingsModel(id,userChange){
        try{
            const userToChange = await dbConnection('users').where({id_user:id}).update({first_name:userChange.first_name,last_name:userChange.last_name,phone_number:userChange.phone_number,email:userChange.email,password:userChange.password,bio:userChange.bio})
             return userToChange   
            
        }catch(err){
            console.log(err)
        }
    }


module.exports = {getAllUsersModel, addUserModel,getUsersByEmailModel,logInUserModel,getUserByIdModel,changeUserSettingsModel}