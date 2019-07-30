exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
      table.increments();

      table.string("firstName", 128);

      table.string("lastName", 128);
  
      table
        .string("username", 128)
        
        .unique();
  
      table.string("password", 128);

      table.string("email", 128);

      table.string("location", 128);

    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
  };