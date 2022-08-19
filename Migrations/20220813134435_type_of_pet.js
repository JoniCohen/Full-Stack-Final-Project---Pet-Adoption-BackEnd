/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('type_of_pet', function(table){
    table.increments('id_type_pet').primary();
    table.string('type_pet').notNullable();
    table.timestamp('created_date').defaultTo(knex.fn.now()).notNullable();
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('type_of_pet');
};
