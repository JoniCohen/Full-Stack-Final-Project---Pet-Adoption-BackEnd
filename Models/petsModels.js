const dbConnection = require('../Data/knex')


async function getColorOfPets(){
    try{
        const colorPets = await dbConnection.from('color_of_pet')
        return colorPets
    }catch(err){
        console.log(err)
    }
}
async function getTypeOfPets(){
    try{
        const typePets = await dbConnection.from('type_of_pet')
        return typePets
    }catch(err){
        console.log(err)
    }
}
async function getBreedOfPets(){
    try{
        const breedPets = await dbConnection.from('breed_of_pet')
        return breedPets
    }catch(err){
        console.log(err)
    }
}
async function addPetsModel(pet){
    try{
        const newPet = await dbConnection.from('pets').insert({name_pet:pet.namePet,image_pet:pet.imagePet,height_pet:pet.heightPet,weight_pet:pet.weightPet,bio_pet:pet.bioPet,hypoallergenic_pet:0,dietary_restrictions_pet:pet.dietaryPet,id_status_pet:1,id_color_pet:dbConnection.select('id_color_pet').from('color_of_pet').where({color_pet:pet.colorsPet}),id_breed_pet:dbConnection.select('id_breed_of_pet').from('breed_of_pet').where({breed_of_pet:pet.breedsPet}),id_user:4})
    }catch(err){
        console.log(err)
    }
    
}



module.exports = {getColorOfPets,getTypeOfPets,getBreedOfPets,addPetsModel}