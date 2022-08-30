
exports.up = function(knex) {
    return knex.schema.createTable('saved_pets', function(table){
      table.integer('id_user').notNullable().unsigned();
      table.integer('id_pet').notNullable().unsigned();
      table.primary(['id_user','id_pet']);
      table.foreign('id_user').references('users.id_user');
      table.foreign('id_pet').references('pets.id_pet');
    })
  };
  

  exports.down = function(knex) {
      return knex.schema.dropTable('saved_pets');
  };