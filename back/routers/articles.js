const express = require("express");
const router = express.Router();
// 處理formData需要用到的中間件
const multer = require("multer");
//處理 檔案路徑
const path = require("path");
const connection = require("../utils/db");
//上傳檔案用的亂數名稱
const { uuid } = require("uuidv4");
const { SignInCheckMiddleware } = require("../middlewares/auth");

//顯示多筆分類// 'SELECT user_order.recipient, article.title, article.content, article.upload_date, category.name, category_tag.tag, article.photos, article.views FROM article INNER JOIN user_order ON article.user_name=user_order.user_id INNER JOIN category on article.category=category.id INNER JOIN category_tag on article.category_tag=category_tag.id WHERE name="有氧運動"'
router.get("/AerobicExercise", async (req, res, next) => {
  let result = await connection.queryAsync(
    "SELECT * FROM article WHERE valid=1 AND category=1"
  );
  result.map(
    (article) =>
      (article.upload_date = article.upload_date
        .toISOString() //toISOString() 方法可以使用ISO标准将 Date 对象转换为字符串
        .slice(0, 16) //提取字符串的某个部分，并以新的字符串返回被提取的部分
        .replace(/:/gi, "") //正規表達式
        .replace("T", ""))
  );
  res.json(result);
});
router.get("/WeightTraining", async (req, res, next) => {
  let result = await connection.queryAsync(
    "SELECT * FROM article WHERE valid=1 AND category=2"
  );
  result.map(
    (article) =>
      (article.upload_date = article.upload_date
        .toISOString()
        .slice(0, 16)
        .replace(/:/gi, "")
        .replace("T", ""))
  );
  res.json(result);
});
router.get("/TABATATraining", async (req, res, next) => {
  let result = await connection.queryAsync(
    "SELECT * FROM article WHERE valid=1 AND category=3"
  );
  result.map(
    (article) =>
      (article.upload_date = article.upload_date
        .toISOString()
        .slice(0, 16)
        .replace(/:/gi, "")
        .replace("T", ""))
  );
  res.json(result);
});
router.get("/CoreStrength", async (req, res, next) => {
  let result = await connection.queryAsync(
    "SELECT * FROM article WHERE valid=1 AND category=5"
  );
  result.map(
    (article) =>
      (article.upload_date = article.upload_date
        .toISOString()
        .slice(0, 16)
        .replace(/:/gi, "")
        .replace("T", ""))
  );
  res.json(result);
});
router.get("/LeanBulking", async (req, res, next) => {
  let result = await connection.queryAsync(
    "SELECT * FROM article WHERE valid=1 AND category=4"
  );
  result.map(
    (article) =>
      (article.upload_date = article.upload_date
        .toISOString()
        .slice(0, 16)
        .replace(/:/gi, "")
        .replace("T", ""))
  );
  res.json(result);
});
//顯示我的文章
router.get("/MyArticle", SignInCheckMiddleware, async (req, res, next) => {
  let result = await connection.queryAsync(
    "SELECT * FROM article WHERE valid=1 AND user_name=? ",
    [req.session.member.name]
  );
  console.log(req.session.member.name);
  res.json(result);
});

//新增
//資料驗證
const { body, validationResult } = require("express-validator");
const registerRules = [
  body("title").isLength({ max: 100 }).withMessage("最多100字"),
  body("user_name").isLength({ max: 50 }).withMessage("最多50字"),
];
//上傳檔案
// 上傳檔案的位置，diskStorage為本機硬碟
const storage = multer.diskStorage({
  //儲存檔案的位置
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "..", "public", "articles", "uploads"));
  },
  //檔案命名
  filename: function (req, file, callback) {
    // console.log(file);
    // callback(null, file.originalname);
    const ext = file.originalname.split(".").pop();
    callback(null, `member-${uuid()}.${ext}`);
  },
});
const uploader = multer({
  storage: storage,
  //檔案驗證
  fileFilter: function (req, file, callback) {
    console.log(file.mimetype);
    if (
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/jpg" &&
      file.mimetype !== "image/png"
    ) {
      callback(new Error("不接受的檔案型態"), false);
    }
    callback(null, true);
  },
  limits: {
    fileSize: 1024 * 1024,
  },
});

router.post(
  "/", // ('/')
  uploader.single("photos"), //上傳檔案驗證資料
  registerRules, //驗證資料
  async (req, res, next) => {
    console.log(req.params);
    try {
      let filename = req.file ? "" + req.file.filename : "";
      let result = await connection.queryAsync(
        "INSERT INTO article (user_name, title, content, category, photos) VALUES (?);",
        [
          [
            // req.session.member.name,
            req.body.user_name,
            req.body.title,
            // req.body.upload_date,
            req.body.content,
            req.body.category,
            [filename],
          ],
        ]
      );
      res.json(result);
    } catch (e) {
      console.error(e);
    }
  }
);

router
  .route("/:id")
  .get(async (req, res, next) => {
    let articleId = req.params.id;
    let result = await connection.queryAsync(
      "SELECT * FROM article WHERE id=?",
      [articleId]
    );
    console.log(articleId);
    console.log(result);
    res.json(result);
  })
  .put(
    uploader.single("photos"), //上傳檔案驗證資料
    registerRules, //驗證資料
    async (req, res, next) => {
      try {
        let filename = req.file ? "" + req.file.filename : "";
        let result = await connection.queryAsync(
          "UPDATE article SET user_name=?,title=?,content=?,category=?,photos=? WHERE id=?",
          [
            req.body.user_name,
            req.body.title,
            // req.body.upload_date,
            req.body.content,
            req.body.category,
            [filename],
            req.params.id,
          ]
        );
        res.json({ message: "修改文章" });
      } catch (e) {
        console.error(e);
      }
    }
  )
  .delete(async (req, res, next) => {
    try {
      let result = await connection.queryAsync(
        "UPDATE article SET valid=0 WHERE id=?",
        [req.params.id]
      );
      res.json(result);
    } catch (e) {
      console.log(result);
      console.log(e);
    }
  });

module.exports = router;
