const {getUserByEmailModel} = require('../Models/usersModels')
const bcrypt = require('bcrypt');


function passwordMatch (req,res,next){
    if(req.body.password === req.body.confirmPassword){
        next();
        return ;
    }
    res.status(400).send("Error: Passwords don't match" )
}


async function userAlreadyExist (req,res,next){
    const user = await getUserByEmailModel()
    if(user){
        res.status(400).send('User already exists')
        return
    }
    next();
}
async function isAnExistingUser (req,res,next){
    const user = await getUserByEmailModel(req.body.email)
    if(user){
        req.body.user = user
        next()
        return
    }else{
        res.status(400).send('The user does not exist')
    }
    
}

async function verifyPassword(req,res,next){
    const {user} = req.body
    bcrypt.compare(req.body.password,user.password,(err,result)=>{
        if(err){
            res.status(500).send(err.message)
            console.log(err.message)
            return
        }
        if(result){
            next()
            return
        }else{
            res.status(400).send('Invalid Password')
        }
    })
}


module.exports = {userAlreadyExist,passwordMatch,isAnExistingUser,verifyPassword}