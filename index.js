/**
 * Student: Vikramjit Singh Saini
 * CNumber: C0944618
 *
 * Full Stack JS CRUD App - Assignment 1
 * Connects to MongoDB Atlas and starts Express server with Pug templates
 */

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
const port = process.env.PORT || 3000;

// --- Middleware ---
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method")); // for DELETE/PUT via forms

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const userRoutes = require("./routes/users");
app.use("/users", userRoutes);
app.get("/", (req, res) => res.redirect("/users"));

// --- MongoDB connection ---
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected!"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// --- Basic route ---
app.get("/", (req, res) => {
  res.send("Hello, Full Stack JS Assignment!");
});

// --- Start server ---
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

// 323ySikevxqW1n67
// vikramjitpersonal_db_user
