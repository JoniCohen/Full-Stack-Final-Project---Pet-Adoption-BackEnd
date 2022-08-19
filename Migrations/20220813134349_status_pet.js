
exports.up = function(knex) {
  return knex.schema.createTable('status_pet',function(table){
    table.increments('id_status_pet').primary();
    table.string('status_pet').notNullable();
    table.timestamp('created_date').defaultTo(knex.fn.now()).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('status_pet');
};
