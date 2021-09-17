const express = require('express');
const router = express.Router();

const connection = require('../utils/db');

router.route('/')
    .get(async (req, res, next) => {
        let result = await connection.queryAsync('SELECT * FROM video_file WHERE valid=1 ORDER BY views DESC');
        res.json(result);
    });

router.route('/:id')
    .get(async (req, res, next) => {
        let videoId = req.params.id;
        let result = await connection.queryAsync(
            'UPDATE video_file SET views=views+1 WHERE id=?',
            [videoId]
        );
        result = await connection.queryAsync(
            'SELECT * FROM video_file WHERE id=? AND valid=1',
            [videoId]
        );
        res.json(result);
    });


module.exports = router;