const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    Username: String,
    Body: String,
  },
  { timestamps: true }
);

PostSchema.index({
  name: "text",
});

const Product = mongoose.model("Product", PosttSchema);

module.exports = Product;
