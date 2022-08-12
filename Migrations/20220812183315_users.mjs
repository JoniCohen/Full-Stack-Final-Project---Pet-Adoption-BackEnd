export function up(knex) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('first_name').notNull();
      table.string('last_name').notNull();
      table.string('phone_number').unique().notNull();
      table.string('email').unique().notNull();
      table.string('password').notNull();  
      table.string('confirm_password').notNull();
      table.timestamp('created_date').defaultTo(knex.fn.now());
    });
  }
  export function down(knex) {
    return knex.schema.dropTable('users');
  }
  