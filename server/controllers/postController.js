const { Users, Posts, Comments } = require('../models');

const postController = {
    async getPosts(req,res) {
        try {
            const posts = await Posts.find();
            return res.status(200).json(posts)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err)
        }
    },

    async getSinglePost(req, res) {
        try {
            const post = await Posts.findOne({ _id: req.params.postId});

            if (!thought) {
                return res.status(404).json({ message: "Way to go eden you fucked it up" });
            }
            return res.status(200).json(post)
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    async createPost(req, res) {
        try {
            const post = await Posts.create(req.body);

            const user = await Users.findByIdAndUpdate(
                req.body.userId,
                { $addToSet: { posts: post._id } },
                { runValidators: true, new: true }
            );

            return res.status(200).json({ post, user })
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async updatePost(req,res) {
        try {
            const post = await Posts.findOneAndUpdate(
                { _id: req.params.postId },
                { $set: req.body },
                { runValidators: true, new: true }
              )
              if (!post) {
                return res.status(404).json({ message: 'NO POST WITH THIS ID!' });
              }
         
              return res.status(200).json(post)
            } catch (err) {
              console.log(err);
              return res.status(500).json(err);
            }
    },

    async deletePost(req, res) {
        try {
            const post = await Posts.findOneAndDelete({ _id: req.params.postId });

            if (!post) {
                return res.status(404).json({ message: "NO POST WITH THAT ID" });
            }

            return res.status(200).json({ message: "Post and comments deleted" });
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },


}