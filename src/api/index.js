// src/api/index.js: beginning of the API
import express from 'express';
import path from 'path';
const __dirname = path.resolve();
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs', {
        title: 'Home'
    });
});

router.get('/about', (req, res) => {
    res.render('index.ejs', {
        title: 'About'
    });
});

router.get('/contact', (req, res) => {
    res.render('index.ejs', {
        title: 'Contact'
    });
});

router.get('/projects', (req, res) => {
    res.render('index.ejs', {
        title: 'Projects'
    });
});

export default router;