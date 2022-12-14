const dbConnection = require('../Data/knex')



async function getAllUsersModel(){
    try{
        const getUsers = await dbConnection.from('users')
        return getUsers
    }catch(err){
        console.log(err)
    }
}
async function getUserByEmailModel(email){
    try{
        const userEmail = await dbConnection('users').where({email:email}).first()
        return userEmail
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

  async function logInUserModel(email){
    try{
        const userExists = await dbConnection('users').where({email:email})
        
        return userExists
        
    }catch(err){
        console.log(err)
    }
}
   async function getUserByIdModel(id){
        try{
            const userById = await dbConnection('users').where({id_user:id})
            return userById
        }catch(err){
            console.log(err)
        }
         }
  async function changeUserSettingsModel(id,userChange){
        try{
            const userToChange = await dbConnection('users').where({id_user:id}).update(userChange)
             return userToChange   
            
        }catch(err){
            console.log(err)
        }
    }
    function adminToBoolean(isAdmin){
        if(isAdmin === 1 ){
            return 1
        }else if(isAdmin === 0){
            return 0
        }
    }
    
    async function changeAdminModel(id,is_admin){
        try{
            const changeAdmin = await dbConnection('users').where({id_user:id}).update({is_admin:adminToBoolean(is_admin)})
            return changeAdmin
        }catch(err){
            console.log(err)
        }
    }

module.exports = {getAllUsersModel, addUserModel,getUserByEmailModel,getUserByIdModel,changeUserSettingsModel,logInUserModel,changeAdminModel}