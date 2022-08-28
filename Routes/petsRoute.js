const express = require('express')
const router = express.Router()
const PetsControllers = require('../Controllers/petsControllers')
const {updload,imageURL} = require('../Middleware/imagesMiddleware')


router.get('/color',PetsControllers.setColorOfPets)
router.get('/type',PetsControllers.setTypeOfPets)
router.get('/breed',PetsControllers.setBreedOfPets)
router.post('/addpet',updload.single('imagePet'),imageURL,PetsControllers.addPets)
router.get('/',PetsControllers.getPets)
router.get('/pet/:id_pet',PetsControllers.getPetById)
router.get('/user/:id_user',PetsControllers.getPetByUserId)
router.post('/operations',PetsControllers.operations)
router.put('/adopt',PetsControllers.adoptPet)

module.exports = router
