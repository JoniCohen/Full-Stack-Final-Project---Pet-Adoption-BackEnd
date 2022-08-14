const express = require('express')
const router = express.Router()
const userControllers = require('../Controllers/usersControllers')
const {validateBody} = require('../Middleware/validateBody.js')
const {userRegisterScehma} = require('../Schemas/userRegisterSchema.js')
const {userLoginSchema} = require('../Schemas/userLogInSchema')
const {passwordMatch,userAlreadyExist,isAnExistingUser} = require('../Middleware/usersMiddleware')



router.post('/signup',validateBody(userRegisterScehma),userAlreadyExist,passwordMatch, userControllers.signUpUser)
router.post('/login',validateBody(userLoginSchema), isAnExistingUser,userControllers.logInUser)

module.exports = router