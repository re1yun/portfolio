// src/api/index.js: beginning of the API
import express from 'express';
import path from 'path';
const __dirname = path.resolve();
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs', {
        title: 'home'
    });
});

router.get('/about', (req, res) => {
    res.render('index.ejs', {
        title: 'about'
    });
});

router.get('/contact', (req, res) => {
    res.render('index.ejs', {
        title: 'contact'
    });
});

router.get('/projects', (req, res) => {
    res.render('index.ejs', {
        title: 'projects'
    });
});

export default router;