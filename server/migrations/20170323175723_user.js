exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.text('firstname').notNullable();
    table.text('lastname').notNullable();
    table.text('email').unique().notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
