const {getColorOfPets,getTypeOfPets,getBreedOfPets} = require('../Models/petsModels')


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


module.exports = {setColorOfPets,setTypeOfPets,setBreedOfPets}