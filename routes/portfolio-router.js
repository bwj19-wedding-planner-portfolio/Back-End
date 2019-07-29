const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig.js");
const restricted = require("../auth/restricted.js");
const Posts = require("./portfolio-model.js");

// GET posts by logged in user

router.get("/", restricted, (req, res) => {
  db("posts")
    .returning("id")
    .where({ user_id: req.decodedToken.subject })
    .then(posts => {
      res.status(200).json({
        message: "Success",
        posts});
    })
    .catch(error => {
      res.status(500).json({ error: "The posts could not be retrieved." });
    });
});

// GET all posts

router.get("/all", async (req, res) => {

  db("posts")
    .returning("id")
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).json({ error: "The posts could not be retrieved." });
    });
});

// GET posts by ID

router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;

  db("posts")
    .returning("id")
    .where({ id, user_id: req.decodedToken.subject })
    .first()
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res
          .status(404)
          .json({ error: "You cannot access the post with this specific id." });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The action with the specified ID could not be retrieved"
      });
    });
});

// POST a new post for logged in user

router.post("/", restricted, (req, res) => {
  const post = req.body;
  console.log(req.body)
  if (!post.couple_name) {
    res
      .status(400)
      .json({ error: "Please provide a couple name for the post." });
  } else {
    post.user_id = req.decodedToken.subject;
    db("posts")
      .returning("id")
      .insert(post)
      .then(ids => {
        const id = ids[0];
        db("posts")
          .returning("id")
          .where({ id })
          .first()
          .then(post => {
            res.status(201).json({
              message: 'Success',
              post});
          });
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the post to the database."
        });
      });
  }
});

// PUT changes to post by logged in user

router.put("/:id", restricted, async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  
  if (!changes) {
    res.status(400).json({
      error: "Please provide a name for the post."
    });
  } else {
    db("posts")
      .where({ id, user_id: req.decodedToken.subject })
      .update(changes)
      .returning("id")
      .then(count => {
        if (count > 0) {
          res.status(200).json({
            message: 'Successfully Updated Post',
            id});
        } else {
          res.status(404).json({
            error: "You cannot access the post with this specific id."
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          error: "The post could not be modified."
        });
      });
  }
});

// DELETE post for logged in user

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;
  db("posts")
    .where({ id, user_id: req.decodedToken.subject })
    .del()
    .returning("id")
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: 'Successfully Deleted Post',
          id});
      } else {
        res
          .status(404)
          .json({ error: "You cannot access the post with this specific id." });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The post could not be removed."
      });
    });
});

module.exports = router;