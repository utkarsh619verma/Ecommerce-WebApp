const express = require("express");
const Product = require("../Models/Product");
const router = express.Router();

router.post("/create/", async (req, res) => {
  try {
    const newproduct = new Product(req.body);
    const SaveProduct = await newproduct.save();
    res.status(200).json(SaveProduct);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
