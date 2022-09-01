
exports.up = function(knex) {
  return knex.schema.createView('pets_view',function(view){
    view.columns(['Pet ID','Pet Name', 'Pet Image','Pet Height','Pet Weight','Pet Bio','Hypoallergenic','Dietary Restrictions','Pet Status','Pet Color','Pet Breed','Pet Type','User']);
    view.as(knex('pets').join('status_pet','pets.id_status_pet','=','status_pet.id_status_pet').join('color_of_pet','pets.id_color_pet','=','color_of_pet.id_color_pet').join('breed_of_pet','pets.id_breed_pet','=','breed_of_pet.id_breed_of_pet').join('type_of_pet','breed_of_pet.id_type_pet','=','type_of_pet.id_type_pet').join('users','pets.id_user','=','users.id_user').select('pets.id_pet','pets.name_pet','pets.image_pet','pets.height_pet','pets.weight_pet','pets.bio_pet','pets.hypoallergenic_pet','pets.dietary_restrictions_pet','status_pet.status_pet','color_of_pet.color_pet','breed_of_pet.breed_of_pet','type_of_pet.type_pet',(knex.raw("CONCAT(users.first_name,' ',users.last_name)"))))
  })
};


exports.down = function(knex) {
    return knex.schema.dropView("pets_view");
};
