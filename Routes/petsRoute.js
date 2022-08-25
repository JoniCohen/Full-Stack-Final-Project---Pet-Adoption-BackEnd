const express = require('express')
const router = express.Router()
const PetsControllers = require('../Controllers/petsControllers')
const {updload,imageURL} = require('../Middleware/imagesMiddleware')


router.get('/color',PetsControllers.setColorOfPets)
router.get('/type',PetsControllers.setTypeOfPets)
router.get('/breed',PetsControllers.setBreedOfPets)
router.post('/addpet',updload.single('imagePet'),imageURL,PetsControllers.addPets)


module.exports = router
