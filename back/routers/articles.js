const express = require('express');
const router = express.Router();

const connection = require('../utils/db');


router.get('/', async (req, res, next) => {
     let result = await connection.queryAsync("SELECT * FROM article");
res.json(result);
 });
 router.get('/AerobicExercise', async (req, res, next) => {
  let result = await connection.queryAsync('SELECT * FROM iSport.article WHERE valid=1 AND category=1');
  res.json(result);
})
router.get('/WeightTraining', async (req, res, next) => {
  let result = await connection.queryAsync('SELECT * FROM iSport.article WHERE valid=1 AND category=2');
  res.json(result);
})
router.get('/TABATATraining', async (req, res, next) => {
  let result = await connection.queryAsync('SELECT * FROM iSport.article WHERE valid=1 AND category=3');
  res.json(result);
})
router.get('/CoreStrength', async (req, res, next) => {
  let result = await connection.queryAsync('SELECT * FROM iSport.article WHERE valid=1 AND category=4');
  res.json(result);
})
router.get('/LeanBulking', async (req, res, next) => {
  let result = await connection.queryAsync('SELECT * FROM iSport.article WHERE valid=1 AND category=5');
  res.json(result);
})

//  router.post('/', async (req, res, next) => {
//   let result = await connection.queryAsync("INSERT INTO article (article_name, added_by, upload_date, content, category, photos) VALUES (?,?,?,?,?,?)");
// res.json(result);
// });
// router.put('/', async (req, res, next) => {
//   let result = await connection.queryAsync("UPDATE article SET article_name=?, added_by=?, upload_date=?, content=?, category=? WHERE id=?");
// res.json(result);
// });
// router.delete('/', async (req, res, next) => {
//   let result = await connection.queryAsync("UPDATE article SET valid=0  WHERE id=?");
// res.json(result);
// });

module.exports = router;