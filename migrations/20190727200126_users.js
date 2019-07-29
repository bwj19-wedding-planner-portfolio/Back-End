exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
      table.increments();

      table.string("firstName", 128).notNullable();

      table.string("lastName", 128).notNullable();
  
      table
        .string("username", 128)
        .notNullable()
        .unique();
  
      table.string("password").notNullable();
  

    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
  };