const {getColorOfPets,getTypeOfPets,getBreedOfPets,addPetsModel} = require('../Models/petsModels')
const dbConnection = require('../Data/knex')



async function setColorOfPets(req,res){
    try{
        const colorsOfPets = await getColorOfPets()
        res.send(colorsOfPets)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}
async function setTypeOfPets(req,res){
    try{
        const typeOfPets = await getTypeOfPets()
        res.send(typeOfPets)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}
async function setBreedOfPets(req,res){
    try{
        const breedOfPets = await getBreedOfPets()
        res.send(breedOfPets)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}
async function addPets(req,res){
    try{
        console.log(req.body)
        const {namePet,imagePet,heightPet,weightPet,bioPet,dietaryPet,hypoallergenicPet,colorsPet,typesPet,breedsPet} = req.body
        /*const idColor = JSON.stringify(dbConnection.select('id_color_pet').from('color_of_pet').where({color_pet:colorsPet}))
        const addPet={name_pet:namePet,image_pet:imagePet,height_pet:heightPet,weight_pet:weightPet,bio_pet:bioPet,dietary_restrictions_pet:dietaryPet,hypoallergenic_pet:hypoallergenicPet,id_color_pet:colorsPet,id_type_pet:typesPet,id_breed_pet:breedsPet}
        console.log(addPet)*/
        const addPet = await addPetsModel(req.body)
        res.send(addPet)
    }catch(err){
        res.status(500).send(err)
    }
    
}

module.exports = {setColorOfPets,setTypeOfPets,setBreedOfPets,addPets}