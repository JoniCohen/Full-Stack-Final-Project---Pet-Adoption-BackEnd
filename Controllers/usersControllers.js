
const {addUserModel,logInUserModel} = require('../Models/usersModels')


async function signUpUser(req,res){
try{
        const {firstName,lastName,phoneNumber,email,password,confirmPassword} = req.body
        const registerUser = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            createdDate: new Date().toISOString
        }

        const allUsers = addUserModel(registerUser)
        res.send(allUsers)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}

async function logInUser(req,res){
    const email = req.body.email
    const password = req.body.password
    const user = logInUserModel(email,password)

}



module.exports = {signUpUser,logInUser}