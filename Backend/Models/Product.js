const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: false,
  },
  id: { type: Number, required: true, unique: true },
  images: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: { type: Number },
  stock: {
    type: Number,
    required: true,
  },
  thumbnail: { type: String },
  title: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
