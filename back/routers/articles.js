const express = require('express');
const router = express.Router();

const connection = require('../utils/db');


router.get('/', async (req, res, next) => {
     let result = await connection.queryAsync("SELECT * FROM article");
res.json(result);
 });
 router.post('/', async (req, res, next) => {
  let result = await connection.queryAsync("INSERT INTO article (article_name, added_by, upload_date, content, category, photos) VALUES (?,?,?,?,?,?)");
res.json(result);
});
router.put('/', async (req, res, next) => {
  let result = await connection.queryAsync("UPDATE article SET article_name=?, added_by=?, upload_date=?, content=?, category=? WHERE id=?");
res.json(result);
});
router.delete('/', async (req, res, next) => {
  let result = await connection.queryAsync("UPDATE article SET valid=0  WHERE id=?");
res.json(result);
});

module.exports = router;