const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./models/database");
const User = require("./models/User");

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
  
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.json({ message: "User registered successfully!" });
    } catch (error) {
      console.error("User registration error:", error);
      res.status(500).json({ error: "Something went wrong!" });
    }
  });
  

app.listen(port, () => {
  console.log(`App is Running at ${port}`);
});
