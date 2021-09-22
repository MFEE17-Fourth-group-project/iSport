const express = require('express');
const router = express.Router();
// 處理 multipart/form-data 
const multer = require("multer");
//處理 檔案路徑
const path = require("path");
const connection = require('../utils/db');

//顯示多筆
router.get('/Read', async (req, res, next) => {
  let result = await connection.queryAsync("SELECT * FROM article");
  result.map(article => article.upload_date = article.upload_date.toISOString().slice(0, 16).replace(/:/gi, '').replace('T', ''));
res.json(result);
});

//顯示單筆
// router.get('/Read/:Id', async (req, res, next) => {
  // let articleId = req.params.id;
//      let result = await connection.queryAsync("SELECT * FROM article WHERE id=?",
//      [req.params.Id]);
// res.json(result);
//  });

//顯示多筆分類
 router.get('/Read/AerobicExercise', async (req, res, next) => {
  let result = await connection.queryAsync('SELECT user_order.recipient, article.added_by, article.content, article.upload_date, category.name, category_tag.tag, article.photos, article.views FROM article INNER JOIN user_order ON article.article_name=user_order.user_id INNER JOIN category on article.category=category.id INNER JOIN category_tag on article.category_tag=category_tag.id WHERE name="有氧運動"');
  res.json(result);
})
router.get('/Read/WeightTraining', async (req, res, next) => {
  let result = await connection.queryAsync('SELECT user_order.recipient, article.added_by, article.content, article.upload_date, category.name, category_tag.tag, article.photos, article.views FROM article INNER JOIN user_order ON article.article_name=user_order.user_id INNER JOIN category on article.category=category.id INNER JOIN category_tag on article.category_tag=category_tag.id WHERE name="重量訓練"');
  res.json(result);
})
router.get('/Read/TABATATraining', async (req, res, next) => {
  let result = await connection.queryAsync('SELECT * FROM iSport.article WHERE valid=1 AND category=3');
  res.json(result);
})
router.get('/Read/CoreStrength', async (req, res, next) => {
  let result = await connection.queryAsync('SELECT * FROM iSport.article WHERE valid=1 AND category=4');
  res.json(result);
})
router.get('/Read/LeanBulking', async (req, res, next) => {
  let result = await connection.queryAsync('SELECT * FROM iSport.article WHERE valid=1 AND category=5');
  res.json(result);
})

//新增
// //資料驗證
// const registerRules = [
//   body("added_by").isLength({max:100}).withMessage("最多100字"),
//   body("article_name").isLength({max:50}).withMessage("最多50字"),];
// //上傳檔案
// // 檔案存在硬碟 => diskStorage
// const storage = multer.diskStorage({
//   //儲存檔案的地方
//   destination: function (req, file, callback){
//     callback(null, path.join(__dirname, "..", "public", "articles", "uploads"));
//   },
//   //檔案命名
//   filename:function(req, file, callback){
//     console.log(file);
//     callback(null,file.originalname);
//   },
// });
// const uploader=multer({
//   storage:storage,
//   //檔案驗證
//   fileFilter: function (req, file, callback) {
//     console.log(file.mimetype);
//     if (
//       file.mimetype !== "image/jpeg" &&
//       file.mimetype !== "image/jpg" &&
//       file.mimetype !== "image/png"
//     ) {
//       cb(new Error("不接受的檔案型態"), false);
//     }
//     cb(null, true);
//   },
//   limits: {
//     // 1M: 1024*1024
//     // 1K: 1024
//     fileSize: 1024 * 1024,
//   },
// });


//  router.post('/Create',
//  uploader.single("photo"),//上傳檔案驗證資料
//  registerRules,//驗證資料
//   async (req, res, next) => {
//   let result = await connection.queryAsync("INSERT INTO article (article_name, added_by, upload_date, content, category, photos) VALUES (?);",
//   [[req.body.article_name, req.body.added_by, req.body.upload_date, req.body.content, req.body.category, req.body.photos]]);
// res.json({});
// });
// console.log(req.body);
// console.log(req.file);

//修改
// router.put('/Update', async (req, res, next) => {
//   let result = await connection.queryAsync("UPDATE article SET article_name=?, added_by=?, upload_date=?, content=?, category=? WHERE id=?");
// res.json(result);
// });
//刪除
// router.delete('/Delete', async (req, res, next) => {
//   let result = await connection.queryAsync("UPDATE article SET valid=0  WHERE id=?");
// res.json(result);
// });

module.exports = router;