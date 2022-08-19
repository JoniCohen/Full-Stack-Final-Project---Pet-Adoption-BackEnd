const {getUsersByEmailModel,logInUserModel} = require('../Models/usersModels')
const fs = require('fs')
const path = require('path');
const bcrypt = require('bcrypt');
const dbConnection = require('../Data/knex')
const pathToUsersDb = path.resolve(__dirname, '../Database/users.json')


function passwordMatch (req,res,next){
    if(req.body.password === req.body.confirmPassword){
        next();
        return ;
    }
    res.status(400).send("Error: Passwords don't match" )
}


async function userAlreadyExist (req,res,next){
    const user = await getUsersByEmailModel(req.body.email)
    console.log(user)
    if(user.length>0){
        res.status(400).send('User already exists')
        return
    }
    next();
}
async function isAnExistingUser (req,res,next){
    const userExists = await dbConnection('users').first().where({email:req.body.email})
    if(!userExists){
        res.status(400).send('Incorrect Email and/or Password!')
    }else{
        const isValidUser = bcrypt.compareSync(req.body.password,userExists.password)
        if(!isValidUser){
            res.status(400).send('Invalid Password!')
        } else{
            next()
        }
    }
}

/*function compareBcrypt(password,password_hash){
    return new Promise(function(resolve,reject){
        bcrypt.compare(password,password_hash,function(err,res){
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}*/

module.exports = {userAlreadyExist,passwordMatch,isAnExistingUser}