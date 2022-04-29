const Product = require("../models/product");
const { Dummy_Data } = require("./data");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/daraz")
  .then(() => console.log("database Connected"))
  .catch((e) => console.log(e.message));

const saveData = async () => {
  await Product.deleteMany({});
  for (let i of Dummy_Data) {
    const product = new Product(i);
    await product.save();
  }
};

saveData().then(() => mongoose.connection.close());
