const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv"); // allows you to load environment variables from a file named .env into process.env
const productroute = require("./Routes/product");
const authroute = require("./Routes/auth");

dotenv.config(); //The dotenv package provides a function called config() that you can use to load the environment variables from a file. //After calling dotenv.config(), the environment variables from the specified .env file will be available in process.env.
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/seller/product", productroute);
app.use("/api/auth", authroute);

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Successfully Connected to Database");
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT, () => {
  ConnectDB();
  console.log("Server Listening on Port " + process.env.PORT);
});
