const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      firstName: "Mary",
      lastName: "Test",
      username: "mary",
      password: bcrypt.hashSync("password", 14),
      email: "mary@mary.com",
      location: "Boston, MA"
    },
    {
      firstName: "Sarah",
      lastName: "Test",
      username: "sarah",
      password: bcrypt.hashSync("password", 14),
      email: "567@567.com",
      location: "Austin, TX"
    },
    {
      firstName: "Karen",
      username: "karen",
      password: bcrypt.hashSync("password", 14),
      email: "789@789.com",
      location: "Orlando, FL"
    },
    {
      firstName: "Christopher",
      lastName: "Test",
      username: "christopher",
      password: bcrypt.hashSync("password", 14),
      email: "111@111.com",
      location: "Portland, OR"
    },
    {
      firstName: "Sean",
      lastName: "Test",
      username: "sean",
      password: bcrypt.hashSync("password", 14),
      email: "222@222.com",
      location: "Colonie, NY"
    }
  ]);
};