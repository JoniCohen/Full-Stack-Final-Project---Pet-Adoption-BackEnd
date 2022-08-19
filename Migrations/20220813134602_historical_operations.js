/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('historical_operations', function (table){
    table.increments('id_historical_operation').primary();
    table.integer('id_user').notNullable().unsigned();
    table.integer('id_pet').notNullable().unsigned();
    table.integer('id_status').notNullable().unsigned();
    table.timestamp('created_date').defaultTo(knex.fn.now()).notNullable();
    table.foreign('id_user').references('users.id_user');
    table.foreign('id_pet').references('pets.id_pet');
    table.foreign('id_status').references('status_pet.id_status_pet');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('historical_operations');
};
