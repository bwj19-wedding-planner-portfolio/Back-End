const db = require("../data/dbConfig.js");

module.exports = {
  getAllPosts,
  insert,
  addPost,
  update,
};

function getAllPosts() {
  return db("posts");
}

function insert(post) {
  return db("posts").insert(post, 'id');
}

async function addPost(post) {
  const [id] = await db("posts").insert(post, "id");

  return findPostById(id);
}

function findPostById(id) {
  return db("posts")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("posts").where({ id }).update(changes);
}