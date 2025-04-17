const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect("mongodb+srv://marketingdesign:marketingdesign08@marketingdesign.o4wbn5r.mongodb.net/?retryWrites=true&w=majority&appName=MarketingDesign", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("✅ MongoDB Connected");
});

// Define Mongoose schema
const quoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
  countryCode: String,
  phone: String,
});

const Quote = mongoose.model("Quote", quoteSchema);

// POST route
app.post("/api/quote", async (req, res) => {
  try {
    const { name, email, city, countryCode, phone } = req.body;
    const newQuote = new Quote({ name, email, city, countryCode, phone });
    await newQuote.save();

    return res.status(200).json({ message: "Quote submitted and saved!" });
  } catch (error) {
    console.error("❌ Error submitting quote:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
