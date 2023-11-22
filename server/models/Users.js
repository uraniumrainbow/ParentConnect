const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    // match: regex goes here
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],

});

const Users = model('Users', userSchema);

module.exports = Users;
