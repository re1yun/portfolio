// src/api/index.js: beginning of the API
import express from 'express';
import path from 'path';
const __dirname = path.resolve();
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/views/index.html")
});

router.get('/about', (req, res) => {
    res.sendFile(__dirname + "/src/views/about.html")
});

router.get('/contact', (req, res) => {
    res.sendFile(__dirname + "/src/views/contact.html")
});

router.get('/projects', (req, res) => {
    res.sendFile(__dirname + "/src/views/projects.html")
});

export default router;