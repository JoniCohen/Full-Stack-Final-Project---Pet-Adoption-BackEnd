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



module.exports = {getColorOfPets,getTypeOfPets,getBreedOfPets}