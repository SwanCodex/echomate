const express = require("express");
const User = require("./models/User");
const cors = require("cors");
const mongoose = require("mongoose");
const Activity = require("./models/Activity");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const app = express();

app.use(cors()); // ✅ ADD THIS LINE
app.use(express.json());

app.get("/", (req, res) => {
  res.send("EcoMate Backend Running");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend connected successfully!" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.post("/api/user", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email
    });

    await user.save();

    res.json({ message: "User created", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/activity", async (req, res) => {
  try {
    const { userId, type, action, carbon } = req.body;

    const activity = new Activity({
      userId,
      type,
      action,
      carbon
    });

    await activity.save();

    res.json({ message: "Activity added", activity });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});