const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  userName: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  title: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true, 
    unique: true,
  },
  caption: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Posts = model('Posts', postSchema);

module.exports = Posts;
