const Post = require("../models/Post");
const User = require("../models/User");



const PostController = {
  async createPost(req, res) {
    try {
      const post = await Post.create({ ...req.body });
      await User.findByIdAndUpdate(
        req.user._id,
        { $push: { postIds: post._id } },
        { new: true }
      )
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
  },
  async insertComment(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params._id,
        { $push: { comments: { comment: req.body.comment, userId: req.user._id } } },
        { new: true }
      );
      res.send({ msg: "comentario creado", post });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Hay un problema con tu comentario" });
    }
  },
  async like(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params._id,
        { $push: { likes: req.user._id } },
        { new: true }
      );
      await User.findByIdAndUpdate
      (req.user._id, { new: true });
      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Hay un problema con tu like" });
    }
  },
  async dislike(req, res) {
    try {
      await Post.findByIdAndUpdate(req.params._id, {
        $pull: { likes: req.user._id },
      });
      res.send({ msg: "Ya no te gusta esta publicacion" });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "Hubo un problema al quitar tu like",
      });
    }
  },
};




module.exports = PostController;