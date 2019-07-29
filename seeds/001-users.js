const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      username: "mary",
      password: bcrypt.hashSync("password", 14),
      email: "mary@mary.com",
      location: "Boston, MA"
    },
    {
      username: "sarah",
      password: bcrypt.hashSync("password", 14),
      email: "567@567.com",
      location: "Austin, TX"
    },
    {
      username: "karen",
      password: bcrypt.hashSync("password", 14),
      email: "789@789.com",
      location: "Orlando, FL"
    },
    {
      username: "christopher",
      password: bcrypt.hashSync("password", 14),
      email: "111@111.com",
      location: "Portland, OR"
    },
    {
      username: "sean",
      password: bcrypt.hashSync("password", 14),
      email: "222@222.com",
      location: "Colonie, NY"
    }
  ]);
};