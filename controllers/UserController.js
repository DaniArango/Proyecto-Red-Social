const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const { jwt_secret } = require('../config/keys.js')

const UserController = {
    async createUser(req, res) {
        try {
            const password = await bcrypt.hash(req.body.password, 10);
            const user = await User.create({ ...req.body, password, role: "user" });
            res.status(201).send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
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
            const token = jwt.sign({ _id: user._id }, jwt_secret);
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
            res.send({ msg: "Desconectado con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                msg: "No hasido posible desconectar usuario",
            });
        }
    },
    async getInfo(req, res) {
        try {
          const user = await User.findById(req.user._id).populate({
            path: "postIds",
          }).populate("wishList")
          ;
    
          res.send(user);
        } catch (error) {
          console.error(error);
        }
      },
    };




module.exports = UserController;