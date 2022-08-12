const express = require('express')
const router = express.Router()
const userControllers = require('../Controllers/usersControllers')
const {validateBodyUserRegister} = require('../Middleware/validateBody.js')
const {userRegisterScehma} = require('../Schemas/userRegisterSchema.js')
const {passwordMatch} = require('../Middleware/passwordMatchUsers.js')


router.post('/signup',validateBodyUserRegister(userRegisterScehma),passwordMatch, userControllers.signUpUser)

module.exports = router