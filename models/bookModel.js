const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
title: { type: String, required: true },
author: { type: String, required: true },
isbn: { type: String, required: true, unique: true },
genre: { type: String },
publisher: { type: String },
publicationYear: Number,
totalCopies: { type: Number, default: 1 },
availableCopies: { type: Number, default: 1 },
shelfLocation: String,
bookType: String,
status: { type: String, default: "Available" }
});

module.exports = mongoose.model("Book", bookSchema);