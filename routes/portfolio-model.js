const db = require("../data/dbConfig.js");

module.exports = {
  getAllPosts,
  insert,
  addPost,
  update,
  findPostsByUsername
};

function getAllPosts() {
  return db("posts");
}

function insert(post) {
  return db("posts").insert(post);
}

async function addPost(post) {
  const [id] = await db("posts").insert(post);

  return findPostById(id);
}

function findPostById(id) {
  return db("posts")
    .where({ id })
    .first();
}

function findPostsByUsername(id) {
  return db('posts as p')
    .join('users as u', 'u.id', 'p.user_id')
    .select(
      'p.id',
      'p.couple_name',
      'p.wedding_theme',
      'p.wedding_date',
      'p.photo',
      'p.location',
      'p.description',
      'p.vendors',
      'p.user_id',
      'u.username',
    )
    .where('u.id', id);
}

function update(id, changes) {
  return db("posts").where({ id }).update(changes);
}