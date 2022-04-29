const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  rate: {
    type: Number,
  },
  count: {
    type: Number,
  },
});

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: { type: ratingSchema },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
