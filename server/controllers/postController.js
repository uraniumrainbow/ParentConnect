import PostMessage from "../modules/postMessage.js";

export const getPosts = async (req,res) => {
    try {
        const posts = await PostMessage.find();
        return res.status(200).json(posts)
    } catch (err) {
        console.log(err);
        return res.status(500).json(err)
    }
}

export const getSinglePost = async (req, res) => {
    try {
        const post = await PostMessage.findOne({ _id: req.params.postId});

        if (!post) {
            return res.status(404).json({ message: "Way to go eden you fucked it up" });
        }
        return res.status(200).json(post)
    } catch (err) {
        return res.status(500).json(err);
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        
        res.status(201).json(newPost);
    } catch (err) {
        console.log(err);
        return res.status(409).json(err);
    }
}

export const updatePost = async (req,res) => {
    try {
        const post = await PostMessage.findOneAndUpdate(
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
}

export const deletePost = async (req, res) => {
    try {
        const post = await PostMessage.findOneAndDelete({ _id: req.params.postId });

        if (!post) {
            return res.status(404).json({ message: "NO POST WITH THAT ID" });
        }

        return res.status(200).json({ message: "Post and comments deleted" });
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

