const express = require("express");
const Product = require("../Models/Product");
const router = express.Router();

Product.updateMany({}, { $set: { quantity: 0 } });

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
    res.json(products).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productid = req.params.id;
    const productdetails = await Product.findOne({ _id: productid });
    res.status(200).json(productdetails);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
