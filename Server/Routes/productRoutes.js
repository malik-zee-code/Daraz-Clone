const express = require("express");
const Product = require("../models/product");
const catchAsync = require("../utils/catchAsync");
const router = express.Router();

router
  .route("/")
  .get(
    catchAsync(async (req, res) => {
      const product = await Product.find({});
      res.send(product);
    })
  )
  .post(
    catchAsync(async (req, res) => {
      const { title, description, rating, image } = req.body;
      const product = new Product({ title, description, rating, image });
      console.log(req.body);
      res.send("added");
      await product.save();
    })
  );
module.exports = router;
