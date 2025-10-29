const express = require("express");
const router = express.Router();
const User = require("../models/User"); // import the model

// --- Show Add User Form ---
router.get("/add", (req, res) => {
  res.render("add", { title: "Add User" });
});

// --- Handle Add User POST ---
router.post("/add", async (req, res, next) => {
  try {
    const user = new User(req.body); // body contains all form fields
    await user.save();
    res.redirect("/users"); // redirect to list page after saving
  } catch (err) {
    next(err);
  }
});

// --- List All Users ---
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find().sort({ lastName: 1, firstName: 1 });
    res.render("list", { title: "Users", users });
  } catch (err) {
    next(err);
  }
});

// --- Show Update Form ---
router.get("/edit/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.render("update", { title: "Update User", user });
  } catch (err) {
    next(err);
  }
});

// --- Handle Update POST ---
router.post("/edit/:id", async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
    });
    res.redirect("/users");
  } catch (err) {
    next(err);
  }
});

// --- Handle Delete (from update page) ---
router.delete("/delete/:id", async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/users");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
