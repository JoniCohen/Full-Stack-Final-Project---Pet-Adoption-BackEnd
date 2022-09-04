const express = require('express')
const router = express.Router()
const PetsControllers = require('../Controllers/petsControllers')
const {updload,imageURL} = require('../Middleware/imagesMiddleware')
const {validateBody} = require('../Middleware/validateBody.js')
const {addPetsSchema} = require('../Schemas/addPetsSchema')
const {filterQuery,auth} = require('../Middleware/petsMiddleware')
const {searchSchema} = require('../Schemas/searchSchema')
const {searchOperationsSchema} = require('../Schemas/searchOperationsSchema')


router.get('/color',PetsControllers.setColorOfPets)
router.get('/type',PetsControllers.setTypeOfPets)
router.get('/breed',PetsControllers.setBreedOfPets)
router.post('/addpet',validateBody(addPetsSchema),updload.single('imagePet'),auth,imageURL,PetsControllers.addPets)
router.get('/pet/:id_pet',PetsControllers.getPetById)
router.get('/user/:id_user',auth,PetsControllers.getPetByUserId)
router.post('/operations',auth,PetsControllers.operations)
router.put('/adopt',auth,PetsControllers.adoptPet)
router.put('/foster',auth,PetsControllers.fosterPet)
router.put('/return',auth,PetsControllers.returnPet)
router.post('/savepets',auth,PetsControllers.savePet)
router.delete('/savepets/:id_user/:id_pet',auth,PetsControllers.unsavePet)
router.get('/savedpets/:id_user',auth,PetsControllers.getSavedPets)
router.get('/search',validateBody(searchSchema),filterQuery,PetsControllers.searchPets)
router.get('/viewpets',auth,PetsControllers.getPetsView)
router.get('/viewhistoricaloperations',validateBody(searchOperationsSchema),auth,filterQuery,PetsControllers.getHistoricalOperationsView)
router.delete('/pet/:id_pet',auth,PetsControllers.deletePet)
router.get('/petsbyuser/:id_user',auth,PetsControllers.getPetsByUser)

module.exports = router
