const express = require('express')
const router = express.Router()
const UsersControllers = require('../Controllers/usersControllers')
const {validateBody} = require('../Middleware/validateBody.js')
const {userRegisterSchema} = require('../Schemas/userRegisterSchema.js')
const {userLoginSchema} = require('../Schemas/userLogInSchema')
const {userProfileSettingsSchema} = require('../Schemas/userProfileSettingsSchema')
const {passwordMatch,userAlreadyExist,isAnExistingUser,verifyPassword} = require('../Middleware/usersMiddleware')


router.post('/signup',validateBody(userRegisterSchema),userAlreadyExist,passwordMatch, UsersControllers.signUpUser)
router.post('/login',validateBody(userLoginSchema), isAnExistingUser,verifyPassword,UsersControllers.logInUser)
router.get('/user/:userId',UsersControllers.getUserById)
router.put('/user/:userId',validateBody(userProfileSettingsSchema),UsersControllers.changeProfileSettings)
router.get('/logout',UsersControllers.logOut)

module.exports = router