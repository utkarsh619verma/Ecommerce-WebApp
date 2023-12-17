const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Models/User");
const jwt = require("jsonwebtoken");

//USER REGISTER

router.post("/register", async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    if (!username || !email || !password || !phone)
      return res
        .status(400)
        .send("All fields are required!! Kindly check the form");
    const newSalt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, newSalt);
    const newUser = new User({
      username,
      email,
      password: hashedpassword,
      phone,
    });
    const saveUser = newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//USER LOGIN

router.post("/login", async (req, res) => {
  try {
    const { email, phone, password } = req.body;
    if (!email) return res.status(400).send("Please enter email/phone no.");
    let user;
    if (email) {
      user = await User.findOne({ email: email });
      if (!user) {
        console.log("EMail wrong");
        return res.status(500).send("Email not found!");
      }
    } else {
      user = await User.findOne({ phone: phone });
      if (!user) return res.status(500).send("Phone no. not found!");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(500).json("Incorrect Password!");
    }
    const jwtToken = jwt.sign(
      { _id: user._id, username: user.username, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    res.cookie("jwttoken", jwtToken).status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//USER LOGOUT

router.get("/logout", async (req, res) => {
  try {
    res
      .clearCookie("jwttoken", { sameSite: "none", secure: true })
      .status(200)
      .send("Logged Out Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

//REFETCH USER

router.get("/refetch", (req, res) => {
  const token = req.cookies.jwttoken;
  jwt.verify(token, process.env.SECRET_KEY, {}, async (err, data) => {
    if (err) {
      console.log("dsad");
      return res.status(500).json(err);
    }
    console.log("Asd");
    res.status(200).json(data);
  });
});

module.exports = router;
