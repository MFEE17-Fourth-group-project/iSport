const express = require('express');
const router = express.Router();

const connection = require('../utils/db');

router.get('/', (req, res, next) => {
    res.send('hello');
});

module.exports = router;