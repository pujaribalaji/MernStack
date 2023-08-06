const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./models/database");
const User = require("./models/User");
const bycrpt = require("bcrypt");

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use(cors());

app.post("/user/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "Email address already exists" });
    }
    const hashedPassword = await bycrpt.hash(password, 10);

    const newUser = new User({ name, email,
       password:hashedPassword
       });
    await newUser.save();
    res.json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("User registration error:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

app.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Received email:", email);
    const user = await User.findOne({ email });
    if (!user) {
      res.send("User not found!");
      return;
    }

    const passwordMatch = await bycrpt.compare(password, user.password);
    if (!passwordMatch) {
      res.send("Incorrect password!");
      return;
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

app.listen(port, () => {
  console.log(`App is Running at ${port}`);
});
