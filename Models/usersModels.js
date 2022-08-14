const fs = require('fs')
const path = require('path')

const pathToUsersDb = path.resolve(__dirname, '../Database/users.json')

function getAllUsersModel(){
    try{
        const getUsers = fs.readFileSync(pathToUsersDb,'utf8')
        return JSON.parse(getUsers)
    }catch(err){
        console.log(err)
    }
}
function getUsersByEmailModel(email){
    try{
        const usersByEmail = getAllUsersModel()
        const user = usersByEmail.find(user => user.email === email)
        return user
    }catch(err){
        console.log(err)
    }
    
}

function addUserModel(registerUser){
    try{
    const allUsers = getAllUsersModel()
    allUsers.push(registerUser)
    fs.writeFileSync(pathToUsersDb,JSON.stringify(allUsers))
    }catch(err){
        console.log(err)
    }
}

function logInUserModel(email,password){
    try{
        const userByEmailAndPassword = getAllUsersModel()
        const userExist = userByEmailAndPassword.find(userExist => userExist.email === email && userExist.password === password)
        return userExist
    }catch(err){
        console.log(err)
    }
    
}

module.exports = {getAllUsersModel, addUserModel,getUsersByEmailModel,logInUserModel}