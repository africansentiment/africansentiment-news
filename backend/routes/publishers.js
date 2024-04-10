const express = require("express");
const Publisher = require("../models/Publisher");

const router = express.Router();

// Get all publishers
router.get("/", async (req, res) => {
  try {
    const publishers = await Publisher.find();
    res.json(publishers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single publisher by ID
router.get("/:id", async (req, res) => {
  try {
    const publisher = await Publisher.findById(req.params.id);
    if (!publisher)
      return res.status(404).json({ message: "Publisher not found" });
    res.json(publisher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
