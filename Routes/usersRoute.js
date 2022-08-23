const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const UsersControllers = require('../Controllers/usersControllers')
const {validateBody} = require('../Middleware/validateBody.js')
const {userRegisterSchema} = require('../Schemas/userRegisterSchema.js')
const {userLoginSchema} = require('../Schemas/userLogInSchema')
const {userProfileSettingsSchema} = require('../Schemas/userProfileSettingsSchema')
const {passwordMatch,userAlreadyExist,isAnExistingUser,verifyPassword} = require('../Middleware/usersMiddleware')


/*router.use((req,res,next)=>{
    const pathLogsUsers = path.resolve(__dirname,'../Logs/logsUsers.txt')
    const logsUsersObject = {date:new Date().toISOString(),method:req.method,status:res.statusCode}
    const pathLogsUsersErrors = path.resolve(__dirname,'../Logs/logsUsersErrors.txt')
    const logsUsersErroresObject = {date:new Date().toISOString(),method:req.method,status:res.statusCode,error:res.message}
    if(res.ok){
        fs.appendFileSync(pathLogsUsers,JSON.stringify(logsUsersObject)+"\r\n",{'flags':'a'})
        next()
    }else if(!res.ok){
        fs.appendFileSync(pathLogsUsersErrors,JSON.stringify({date:new Date().toISOString(),method:req.method,status:res.statusCode})+"\r\n",{'flags':'a'})
        next()
    }
    next()
})*/

router.post('/signup',validateBody(userRegisterSchema),userAlreadyExist,passwordMatch, UsersControllers.signUpUser)
router.post('/login',validateBody(userLoginSchema), isAnExistingUser,verifyPassword,UsersControllers.logInUser)
router.get('/user/:userId',UsersControllers.getUserById)
router.put('/user/:userId',validateBody(userProfileSettingsSchema),UsersControllers.changeProfileSettings)

module.exports = router