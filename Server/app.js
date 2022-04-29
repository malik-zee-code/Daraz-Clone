const express = require("express");
const productRoutes = require("./Routes/productRoutes");
const userRoute = require("./Routes/userRoute");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb://0.0.0.0:27017/daraz")
  .then(() => console.log("database Connected"))
  .catch((e) => console.log(e.message));

app.use("/", productRoutes);
app.use("/", userRoute);

app.listen(3001, console.log("Listening to port 3001"));
