const { Users, Posts, Comments } = require('../models');

const commentController = {
    async getComments(req, res) {
        try {
            const comments = await Comments.find();
            return res.status(200).json(comments);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async getSingleComment(req, res) {
        try {
            const comment = await Comments.findOne({ _id: req.params.commentId});

            if (!comment) {
                return res.status(404).json({ message: "NO COMMENT W THAT ID" });
            }
            return res.status(200).json(comment)
        } catch (err) {
            return res.status(500).json(err)
        }
    },

    async createComment(req, res) {
        try {
            const comment = await Comments.create(req.body);

            const post = await Posts.findByIdAndUpdate(
                req.body.postId,
                { $addToSet: { comments: comment._id } },
                { runValidators: true, new: true }
            );

            return res.status(200).json({ comment, post });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async updateComment(req, res) {
        try {
            const comment = await Comments.findOneAndUpdate(
                { _id: req.params.commentId },
                { $set: req.body },
                { runValidators: true, new: true }
            )
            if (!comment) {
                return res.status(404).json({ message: "NO COMMENT W THAT ID "});
            }
            return res.status(200).json(comment);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err)
        }
    },

    async deleteComment(req, res) {
        try {
            const comment = await Comments.findOneAndDelete({
                _id: req.params.commentId,
            });
            if (!comment) {
                return res.status(404).json({ message: "NO COMMENT W THAT ID" } );
            }
            return res.status(200).json({ message: "message deleted" });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err)
        }
    }
}
module.exports = commentController