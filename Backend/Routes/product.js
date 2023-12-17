const express = require("express");
const Product = require("../Models/Product");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const newproduct = new Product(req.body);
    const SaveProduct = await newproduct.save();
    res.status(200).json(SaveProduct);
  } catch (error) {
    console.log(error);
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    console.log("succss");
    res.json(products).status(200);
  } catch (error) {
    console.log("post not loaded");
    res.send(error).status(500);
  }
});

module.exports = router;
