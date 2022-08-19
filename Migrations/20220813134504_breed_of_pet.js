/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('breed_of_pet', function(table){
    table.increments('id_breed_of_pet').primary();
    table.string('breed_of_pet').notNullable();
    table.integer('id_type_pet').unsigned().notNullable();
    table.foreign('id_type_pet').references('type_of_pet.id_type_pet')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('breed_of_pet');
};
