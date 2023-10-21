// src/api/index.js: beginning of the API
import express from 'express';
import path from 'path';
const __dirname = path.resolve();
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/views/index.html")
});

export default router;