exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();

    users
      .string('username', 128)
      .notNullable()
      .unique();
      
    users.string('password', 128).notNullable();

    users.integer('role_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('roles')
        .onUpdate('CASCADE') //what to do if the PK changes, update all the records pointing to that PK.
        .onDelete('RESTRICT'); // Will not allow the deletion if it a PK exists.
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
