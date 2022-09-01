exports.up = function(knex) {
    return knex.schema.createView('histotical_operations_view',function(view){
      view.columns(['OperationID','Date','User', 'Pet','StatusTurnedTo']);
      view.as(knex('historical_operations').join('users','historical_operations.id_user','=','users.id_user').join('pets','historical_operations.id_pet','=','pets.id_pet').join('status_pet','historical_operations.id_status','=','status_pet.id_status_pet').select('historical_operations.id_historical_operation','historical_operations.created_date',(knex.raw("CONCAT(users.first_name,' ',users.last_name)")),'pets.name_pet','status_pet.status_pet').orderBy('historical_operations.created_date'))
    })
  };
  
  
  exports.down = function(knex) {
      return knex.schema.dropView("historical_operations_view");
  };

