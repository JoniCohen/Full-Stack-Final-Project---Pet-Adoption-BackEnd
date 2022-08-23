const express = require('express')
const router = express.Router()
const PetsControllers = require('../Controllers/petsControllers')


router.get('/color',PetsControllers.setColorOfPets)
router.get('/type',PetsControllers.setTypeOfPets)
router.get('/breed',PetsControllers.setBreedOfPets)


module.exports = router