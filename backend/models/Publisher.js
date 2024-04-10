const mongoose = require('mongoose');

const sentimentSchema = new mongoose.Schema({
  polarity: { type: Number, required: true },
  subjectivity: { type: Number, required: true }
}, { _id: false });

const articleSchema = new mongoose.Schema({
  identifier: { type: String, required: true },
  authors: [{ type: String }],
  city: String,
  country: String,
  date: Date,
  description: String,
  keywords: [{ type: String }],
  language: String,
  publisher_identifier: String,
  summary: String,
  summary_sentiment: sentimentSchema,
  tags: [{ type: String }],
  text: String,
  text_sentiment: sentimentSchema,
  title: String,
  title_sentiment: sentimentSchema
});

module.exports = mongoose.model('Article', articleSchema);
