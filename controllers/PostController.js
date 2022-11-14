const Post = require("../models/Post");



const PostController = {
  async createPost(req, res) {
    try {
      const post = await Post.create({ ...req.body });
      res.status(201).send(post);
    } catch (error) {
      console.error(error)
      res.status(400)
        .send({ msg: "No es posible crear la publicación", error });
    }
  },

  async getAll(req, res) {
    try {
      const post = await Post.find();
      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "Problema al traer publicaciones",
        error,
      });
    }
  },

  async update(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.send({ msg: "publicación actualizada con exito", post });
    } catch (error) {
      console.error(error);
    }
  },
  async delete(req, res) {
    try {
      const post = await Post.findByIdAndDelete(req.params._id);
      res.send({ post, msg: "Publicación eliminada" });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "No se ha podido eliminar la publicación",
      });
    }
  },

  async getById(req, res) {
    try {
      const post = await Post.findById(req.params._id);
      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "No ha sido posible ver su publicación",
        error,
      });
    }
  },
  async getPostByName(req, res) {
    try {
        if (req.params.title.length > 20) {
          return res.status(400).send("Búsqueda demasiado larga");
        }
        const title = new RegExp(req.params.title, "i");
        const post = await Post.find({ title });
       res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "No ha sido posible ver su publicación",
        error,
      });
    }
}
};




module.exports = PostController;