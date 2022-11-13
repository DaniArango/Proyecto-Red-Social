const Post = require("../models/Post");

const PostController = {
    async createProduct(req, res) {
        try {
            const post = await Post.create(req.body);
            res.status(201).send(product);
        } catch (error) {
            console.error(error);
            res
                .status(500)
                .send({ msg: "Ha habido un problema creando la publicacion", error });
        }
    }
},




    module.exports = PostController;