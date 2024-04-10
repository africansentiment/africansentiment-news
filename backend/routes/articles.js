const express = require('express');
const Article = require('../models/Article');

const router = express.Router();

// Get all articles
router.get('/', async (req, res) => {
    try {
        let query = Article.find();
        
        // Example filter: by country
        if (req.query.country) {
            query = query.where('country').equals(req.query.country);
        }

        // Example filter: by sentiment polarity
        if (req.query.polarity) {
            query = query.where('text_sentiment.polarity').gte(req.query.polarity);
        }

        const articles = await query.exec();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single article by identifier
router.get('/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) return res.status(404).json({ message: 'Article not found' });
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
