/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('color_of_pet', function(table){
    table.increments('id_color_pet').primary();
    table.string('color_pet').notNullable();
    table.timestamp('created_date').defaultTo(knex.fn.now()).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('color_of_pet');
};
