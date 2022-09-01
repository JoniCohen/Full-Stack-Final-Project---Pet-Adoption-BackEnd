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
function hypoallergenic(pet){
    if(pet=='true'){
        return 1
    }
    return 0
}
async function addPetsModel(pet){
    try{
        const newPet = await dbConnection.from('pets').insert({name_pet:pet.namePet,image_pet:pet.imagePet,height_pet:pet.heightPet,weight_pet:pet.weightPet,bio_pet:pet.bioPet,hypoallergenic_pet:hypoallergenic(pet.hypoallergenicPet),dietary_restrictions_pet:pet.dietaryPet,id_status_pet:1,id_color_pet:dbConnection.select('id_color_pet').from('color_of_pet').where({color_pet:pet.colorsPet}),id_breed_pet:dbConnection.select('id_breed_of_pet').from('breed_of_pet').where({breed_of_pet:pet.breedsPet}),id_user:14})
    }catch(err){
        console.log(err)
    }
    
}
    
    async function getPetByIdModel(idPet){
        try{
            const petById = await dbConnection('pets').join('status_pet','pets.id_status_pet','=','status_pet.id_status_pet').join('color_of_pet','pets.id_color_pet','=','color_of_pet.id_color_pet').join('breed_of_pet','pets.id_breed_pet','=','breed_of_pet.id_breed_of_pet').join('type_of_pet','breed_of_pet.id_type_pet','=','type_of_pet.id_type_pet').join('users','pets.id_user','=','users.id_user').select('pets.id_pet','pets.name_pet','pets.image_pet','pets.height_pet','pets.weight_pet','pets.bio_pet','pets.hypoallergenic_pet','pets.dietary_restrictions_pet','status_pet.status_pet','color_of_pet.color_pet','breed_of_pet.breed_of_pet','type_of_pet.type_pet').where({'pets.id_pet':idPet})
            return petById
        }catch(err){
            console.log(err)
        }
        
    }
    async function getPetByUserIdModel(id_user){
        try{
            const petByUserId = await dbConnection('pets').join('status_pet','pets.id_status_pet','=','status_pet.id_status_pet').join('color_of_pet','pets.id_color_pet','=','color_of_pet.id_color_pet').join('breed_of_pet','pets.id_breed_pet','=','breed_of_pet.id_breed_of_pet').join('type_of_pet','breed_of_pet.id_type_pet','=','type_of_pet.id_type_pet').join('users','pets.id_user','=','users.id_user').select('pets.id_pet','pets.name_pet','pets.image_pet','pets.height_pet','pets.weight_pet','pets.bio_pet','pets.hypoallergenic_pet','pets.dietary_restrictions_pet','status_pet.status_pet','color_of_pet.color_pet','breed_of_pet.breed_of_pet','type_of_pet.type_pet').where({'pets.id_user':id_user})
            return petByUserId
        }catch(err){
            console.log(err)
        }
        
    }
    async function operationsModel(newStatus,newUser,petId){
        try{
            const operations = await dbConnection.from('historical_operations').insert({id_user:newUser,id_pet:petId,id_status:newStatus})
            return operations
        }catch(err){
            console.log(err)
        }
    }
    async function adoptPetModel(newStatus,newUser,petId){    
        try{
            const adoptPet = await dbConnection('pets').where({'id_pet':petId}).update({'id_status_pet':newStatus,'id_user':newUser})
            return adoptPet
        }catch(err){
            console.log(err)
        }
    }
    async function fosterPetModel(newStatus,newUser,petId){
        try{
            const fosterPet = await dbConnection('pets').where({'id_pet':petId}).update({'id_status_pet':newStatus,'id_user':newUser})
            return fosterPet
        }catch(err){
            console.log(err)
        }
        
    }
    async function returnPetModel(newStatus,newUser,petId){
        try{
            const returnPet = await dbConnection('pets').where({'id_pet':petId}).update({'id_status_pet':newStatus,'id_user':newUser})
            return returnPet
        }catch(err){
            console.log(err)
        }
        
    }
    async function savePetModel(idUser,idPet){
        try{    
            const savePet = await dbConnection.from('saved_pets').insert({id_user:idUser,id_pet:idPet})
            return savePet
        }catch(err){
            console.log(err)
        }
    }
    async function unsavePetModel(idUser,idPet){
        try{    
            const unsavePet = await dbConnection.from('saved_pets').where({id_user:idUser,id_pet:idPet}).del()
            return unsavePet
        }catch(err){
            console.log(err)
        }
    }
    async function getSavedPetsModel(idUser){
        try{
            const petsSaved = await dbConnection('saved_pets').join('pets','saved_pets.id_pet','=','pets.id_pet').join('status_pet','pets.id_status_pet','=','status_pet.id_status_pet').select('pets.name_pet','pets.image_pet','pets.id_pet','status_pet.status_pet').where({'saved_pets.id_user':idUser})
            return petsSaved
        }catch(err){
            console.log(err)
        }
    }

    async function searchPetsModel(search){
        try{
            const petsSearched = await dbConnection('pets').join('status_pet','pets.id_status_pet','=','status_pet.id_status_pet').join('color_of_pet','pets.id_color_pet','=','color_of_pet.id_color_pet').join('breed_of_pet','pets.id_breed_pet','=','breed_of_pet.id_breed_of_pet').join('type_of_pet','breed_of_pet.id_type_pet','=','type_of_pet.id_type_pet').join('users','pets.id_user','=','users.id_user').select('pets.id_pet','pets.name_pet','pets.image_pet','pets.height_pet','pets.weight_pet','pets.bio_pet','pets.hypoallergenic_pet','pets.dietary_restrictions_pet','status_pet.status_pet','color_of_pet.color_pet','breed_of_pet.breed_of_pet','type_of_pet.type_pet').where({'pets.id_status_pet':1}).andWhereLike('pets.name_pet',`%${search.name||''}%`).andWhereLike('type_of_pet.type_pet',`%${search.type||''}%`).andWhereLike('color_of_pet.color_pet',`%${search.color||''}%`).andWhereLike('breed_of_pet.breed_of_pet',`%${search.breed||''}%`).whereBetween('pets.height_pet',[search.minHeight||0,search.maxHeight||100]).whereBetween('pets.weight_pet',[search.minWeight||0,search.maxWeight||100]).orderBy('pets.id_pet','asc')
            return petsSearched
        }catch(err){
            console.log(err)
        }
    }
    async function getPetsViewModel(){
        try{
            const petsView = await dbConnection.from('pets_view').orderBy('PetID')
            return petsView
        }catch(err){
            console.log(err)
        }
    }
    async function getHistoricalOperationsViewModel(){
        try{
            const historicalOperationsView = await dbConnection.from('histotical_operations_view')
            return historicalOperationsView
        }catch(err){
            console.log(err)
        }
    }
    async function deletePetModel(pet){
        try{
            const petDeleted = await dbConnection.from('pets').where({id_pet:pet.id_pet}).del()
            return petDeleted
        }catch(err){
            console.log(err)
        }
    }
    async function getPetsByUserModel(idUser){
        try{
            const petsOfuser = await dbConnection.from('users').leftJoin('pets','users.id_user','=','pets.id_user').select('pets.name_pet','users.first_name','users.last_name','users.email','users.phone_number').where({'users.id_user':idUser})
            return petsOfuser
        }catch(err){
            console.log(err)
        }
    }


module.exports = {getColorOfPets,getTypeOfPets,getBreedOfPets,addPetsModel,getPetByIdModel,getPetByUserIdModel,adoptPetModel,operationsModel,fosterPetModel,returnPetModel,savePetModel,unsavePetModel,getSavedPetsModel,searchPetsModel,getPetsViewModel,getHistoricalOperationsViewModel,deletePetModel,getPetsByUserModel}