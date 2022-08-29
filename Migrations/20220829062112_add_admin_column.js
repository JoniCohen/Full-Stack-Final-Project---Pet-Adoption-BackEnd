exports.up =(knex)=> {
    return knex.schema.alterTable('users',function(table){
        table.boolean("is_admin").defaultTo(0);
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable("users");

};