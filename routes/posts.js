const express = require ("express")
const PostController = require("../controllers/PostController")
const { authentication } = require("../middlewares/authentication")
const router = express.Router()

router.post("/createPost", authentication, PostController.createPost)
router.get("/getAllpost",PostController.getAll)
router.get("/getPostByName/:name",PostController.getPostByName)
router.get("/getById/:_id",PostController.getById)
router.put("/update/:_id",authentication, PostController.update)
router.delete("/deletePost/:_id",authentication, PostController.delete)



module.exports = router