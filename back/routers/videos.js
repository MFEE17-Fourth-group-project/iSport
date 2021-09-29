const express = require('express');
const router = express.Router();

const connection = require('../utils/db');

router.route('/')
    .get(async (req, res, next) => {
        let result = await connection.queryAsync('SELECT * FROM video_file WHERE valid=1 ORDER BY views DESC');
        result.map(video => video.upload_date = video.upload_date.toISOString().slice(0, 16).replace(/:/gi, '').replace('T', ''));
        res.json(result);
    });

router.route('/category')
    .get(async (req, res, next) => {
        let result = await connection.queryAsync(
            'SELECT id, name FROM category WHERE valid=1'
        );
        res.json(result);
    });

router.route('/suggestVideos')
    .get(async (req, res, next) => {
        let result = await connection.queryAsync(
            'SELECT id, title, filePath, views, upload_date, likes FROM video_file ORDER BY RAND() LIMIT 5'
        );
        res.json(result);
    });

router.route('/suggestArticles')
    .get(async (req, res, next) => {
        let result = await connection.queryAsync(
            'SELECT id, article_name, title, views, upload_date FROM article ORDER BY RAND() LIMIT 5'
        );
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