
exports.up = (knex) => {
 return knex.schema.alterTable('users',function(table){
    table.dropColumn('created_date')
        })
    
};


exports.down = function(knex) {
    return knex.schema.dropTable("users");

};
