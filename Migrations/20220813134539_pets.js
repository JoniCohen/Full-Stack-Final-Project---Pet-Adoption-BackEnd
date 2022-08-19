const { trace } = require("../Routes/usersRoute");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pets', function(table){
    table.increments('id_pet').primary();
    table.string('name_pet').notNullable();
    table.string('image_pet').notNullable();
    table.string('height_pet').notNullable();
    table.string('weight_pet').notNullable();
    table.string('bio_pet').notNullable();
    table.boolean('hypoallergenic_pet').notNullable();
    table.string('dietary_restrictions_pet');
    table.integer('id_status_pet').unsigned().notNullable();
    table.integer('id_color_pet').unsigned().notNullable();
    table.integer('id_breed_pet').unsigned().notNullable();
    table.integer('id_user').unsigned().notNullable();
    table.timestamp('created_date').defaultTo(knex.fn.now()).notNullable();
    table.foreign('id_status_pet').references('status_pet.id_status_pet');
    table.foreign('id_color_pet').references('color_of_pet.id_color_pet');
    table.foreign('id_breed_pet').references('breed_of_pet.id_breed_of_pet');
    table.foreign('id_user').references('users.id_user');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pets');
};
