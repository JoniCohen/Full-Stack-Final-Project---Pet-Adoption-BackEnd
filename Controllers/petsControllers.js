const {getColorOfPets,getTypeOfPets,getBreedOfPets,addPetsModel,getAllPetsModel,getPetByIdModel,getPetByUserIdModel,adoptPetModel,operationsModel,fosterPetModel,returnPetModel,savePetModel,unsavePetModel,getSavedPetsModel} = require('../Models/petsModels')
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
        const addPet = await addPetsModel(req.body)
        res.send(addPet)
    }catch(err){
        res.status(500).send(err)
    }
    
}
    async function getPets(req,res){
        try{
            const pets = await getAllPetsModel()
            console.log(pets)
            res.send(pets)
        }catch(err){
            res.status(500).send(err)
            console.log(err)
        }
        
    }

    async function getPetById(req,res){
        try{
            const petById = await getPetByIdModel(req.params.id_pet)
            res.send(petById)
        }catch(err){
            res.status(500).send(err)
            console.log(err)
        }
    }

    async function getPetByUserId(req,res){
        try{
            const petByUserId = await getPetByUserIdModel(req.params.id_user)
            res.send(petByUserId)
        }catch(err){
            res.status(500).send(err)
            console.log(err)
        }
    }
    async function operations(req,res){
        try{
            const {newStatus,newUser,petId} = req.body
            const operations = await operationsModel(newStatus,newUser,petId)
            res.send({response:operations})
        }catch(err){
            res.status(500).send(err)
            console.log(err)
        }
    }
    async function adoptPet(req,res){
        try{
            const {newStatus,newUser,petId} = req.body
            const adoptAPet = await adoptPetModel(newStatus,newUser,petId)
            res.send({response:adoptAPet})
        }catch(err){
            res.status(500).send(err)
            console.log(err)
        }
    }
    async function fosterPet(req,res){
        try{
            const {newStatus,newUser,petId} = req.body
            const fosterAPet = await fosterPetModel(newStatus,newUser,petId)
            res.send({response:fosterAPet})
        }catch(err){
            res.status(500).send(err)
            console.log(err)
        }
    }
    async function returnPet(req,res){
        try{
            const {newStatus,newUser,petId} = req.body
            const returnAPet = await returnPetModel(newStatus,newUser,petId)
            res.send({response:returnAPet})
        }catch(err){
            res.status(500).send(err)
            console.log(err)
        }
    }
    async function savePet(req,res){
        try{
            const {idUser,idPet} = req.body
            const saveAPet = await savePetModel(idUser,idPet)
            res.send({response:saveAPet})
        }catch(err){
            res.status(500).send(err)
            console.log(err)
        }
    }
    async function unsavePet(req,res){
        try{
            const {idUser,idPet} = req.body
            const unsaveAPet = await unsavePetModel(idUser,idPet)
            res.send({response:unsaveAPet})
        }catch(err){
            res.status(500).send(err)
            console.log(err)
        }
    }
    async function getSavedPets(req,res){
        try{
            const {id_user} = req.params
            const petsSaved = await getSavedPetsModel(id_user)
            res.send(petsSaved)
        }catch(err){
            res.status(500).send(err)
            console.log(err)
        }
    }

module.exports = {setColorOfPets,setTypeOfPets,setBreedOfPets,addPets,getPets,getPetById,getPetByUserId,adoptPet,operations,fosterPet,returnPet,savePet,unsavePet,getSavedPets}