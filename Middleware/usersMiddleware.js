const {getUsersByEmailModel,logInUserModel} = require('../Models/usersModels')
const fs = require('fs')
const path = require('path')

const pathToUsersDb = path.resolve(__dirname, '../Database/users.json')


function passwordMatch (req,res,next){
    if(req.body.password === req.body.confirmPassword){
        next();
        return ;
    }
    res.status(400).send("Error: Passwords don't match" )
}


function userAlreadyExist (req,res,next){
    const user = getUsersByEmailModel(req.body.email)
    if(user){
        res.status(400).send('User already exists')
        return
    }
    next();
}
function isAnExistingUser (req,res,next){
    const userExists = logInUserModel(req.body.email,req.body.password)
    if(userExists){
        //req.session.loggedin = true;
        //req.session.email = req.body.email;
        //res.redirect('http://localhost:3000/home')
        res.send('Logged In')
        next()
    }else{
        res.status(400).send('Incorrect Email and/or Password!')
    }
}

module.exports = {userAlreadyExist,passwordMatch,isAnExistingUser}