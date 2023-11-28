const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: "Posts",
    },
  ],
  userName: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comment: {
    type: String,
    allowNull: false,
    trim: true,
  },
});

const Comments = model("Comments", commentSchema);

module.exports = Comments;
