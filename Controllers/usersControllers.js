const { v4: uuidv4 } = require('uuid');


async function signUpUser(req,res){
try{
        const {firstName,lastName,phoneNumber,email,password,confirmPassword} = req.body
        const registerUser = {
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            createdDate: new Date().toISOString()
        }
        console.log(registerUser)
        res.send(registerUser)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}
module.exports = {signUpUser}