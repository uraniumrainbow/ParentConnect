const router = require('express').Router();

const {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("../../controllers/postController");

router.route("/").get(getPosts).post(createPost);

router
  .route("/:postId")
  .get(getPosts)
  .put(updatePost)
  .delete(deletePost);

router.route("/:postId/comments/:commentId").post(addComment).delete(deleteComment)

module.exports = router