const express = require('express')
const router = express.Router()
const PetsControllers = require('../Controllers/petsControllers')
const {updload,imageURL} = require('../Middleware/imagesMiddleware')
const {validateBody} = require('../Middleware/validateBody.js')
const {addPetsSchema} = require('../Schemas/addPetsSchema')


router.get('/color',PetsControllers.setColorOfPets)
router.get('/type',PetsControllers.setTypeOfPets)
router.get('/breed',PetsControllers.setBreedOfPets)
router.post('/addpet',updload.single('imagePet'),imageURL,validateBody(addPetsSchema),PetsControllers.addPets)
router.get('/',PetsControllers.getPets)
router.get('/pet/:id_pet',PetsControllers.getPetById)
router.get('/user/:id_user',PetsControllers.getPetByUserId)
router.post('/operations',PetsControllers.operations)
router.put('/adopt',PetsControllers.adoptPet)
router.put('/foster',PetsControllers.fosterPet)
router.put('/return',PetsControllers.returnPet)
router.post('/savepets',PetsControllers.savePet)
router.delete('/savepets',PetsControllers.unsavePet)
router.get('/savedpets/:id_user',PetsControllers.getSavedPets)

module.exports = router
