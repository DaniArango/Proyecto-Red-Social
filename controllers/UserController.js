const Post = require("../models/Post");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();



const UserController = {
    async createUser(req, res, next) {
        try {
            const password = await bcrypt.hash(req.body.password, 10);
            const user = await User.create({ ...req.body, password, role: "user" });
            await Post.findByIdAndUpdate(
                req.user._id,
                { $push: { userId: user._id } },
                { new: true }
            )
            res.status(201).send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
            next(error);
        }
    },
    async getAllUsers(req, res) {
        try {
            const user = await User.find();
            res.send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                msg: "Problema al traer los usuarios",
                error,
            });
        }
    },

    async login(req, res) {
        try {
            const user = await User.findOne({
                email: req.body.email,
            });
            if (!user) {
                return res.status(400).send("Correo o contraseña incorrectos");
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send("Correo o contraseña incorrectos");
            }
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
            if (user.tokens.length > 4) user.tokens.shift();
            user.tokens.push(token);
            await user.save();
            res.send({ msg: "Bienvenid@ " + user.name, token });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async logout(req, res) {
        try {
            await User.findByIdAndUpdate(req.user._id, {
                $pull: { tokens: req.headers.authorization },
            });
            res.send({ message: "Desconectado con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "Hubo un problema al intentar desconectar al usuario",
            });
        }
    },

    async getInfo(req, res) {
        try {
            const user = await User.findById(req.user._id)
                .populate({
                    path: "postIds",
                    populate: {
                        path: "comments",

                    },
                });
            res.send(user);
        } catch (error) {
            console.error(error);
        }
    }
};




module.exports = UserController;