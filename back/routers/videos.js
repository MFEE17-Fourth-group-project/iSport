const express = require('express');
const router = express.Router();

const connection = require('../utils/db');

router.route('/')
    .get(async (req, res, next) => {
        if (req.query.orderBy === 'date') {
            let result = await connection.queryAsync('SELECT * FROM video_file WHERE valid=1 ORDER BY upload_date DESC');
            res.json(result);
        } else if (req.query.orderBy === 'views') {
            let result = await connection.queryAsync('SELECT * FROM video_file WHERE valid=1 ORDER BY views DESC');
            res.json(result);
        } else {
            res.json({ message: 'Not Found' });
        }

    });

router.get('/');

module.exports = router;