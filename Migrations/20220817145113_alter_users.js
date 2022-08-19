
exports.up =(knex)=> {
    return knex.schema.alterTable('users',function(table){
        table.string('bio')
        table.timestamp("created_date").defaultTo(knex.fn.now());
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable("users");

};
