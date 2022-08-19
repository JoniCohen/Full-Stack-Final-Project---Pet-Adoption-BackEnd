exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id_user').primary();
      table.string('first_name').notNull();
      table.string('last_name').notNull();
      table.string('phone_number').unique().notNull();
      table.string('email').unique().notNull();
      table.string('password').notNull();  
      table.timestamp('created_date').defaultTo(knex.fn.now()).notNull();
    });
  }
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  }
  