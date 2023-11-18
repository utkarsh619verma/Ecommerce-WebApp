const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  detailurl: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: Object,
    required: true,
  },
  price: {
    type: Object,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: false,
  },
  tagline: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
