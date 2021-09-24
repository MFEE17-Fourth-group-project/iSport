const express = require("express");
const router = express.Router();
const { SignInCheckMiddleware } = require("../middlewares/auth");
const connection = require('../utils/db');
//密碼加密用
const bcrypt=require("bcrypt");

// 這一個 router 的路由都會先經過這個中間件
router.use(SignInCheckMiddleware);


// 跟會員中心有關的路由
// 取得特定會員資料
router.get("/resect",async(req,res,next)=>{
  
  let member = await connection.queryAsync(
      "SELECT * FROM users WHERE account=?",
      [req.session.member.account]
      );
      member = member[0];
  let resetMember={
    account:member.account,
    email:member.email,
    name:member.name,
    phone:member.phone,
    address:member.address,
    birthday:member.birthday,
    gender:member.gender,
    aboutme:member.aboutme,
  };
    console.log("刷新頁面")
    //console.log("我是req.session.member:",req.session.member[0])
    res.json(req.session.member);
});

// 修改會員資料
router.post("/UpdateAccount",async(req,res,next)=>{
  console.log("修改會員資料:",req.body)
  let member =await connection.queryAsync(
    "SELECT*FROM users WHERE account=?;",
    [req.body.account]
);
  let result=await connection.queryAsync(
    "UPDATE users SET (name,account,password,email,phone,address,birthday,about,gender) VALUE(?)",
    [[
        req.body.name,
        req.body.account,
        await bcrypt.hash(req.body.password,10),
        req.body.email,
        req.body.phone,
        req.body.address,
        req.body.birthday,
        req.body.aboutme,
        req.body.gender,
    ]]
)
res.json({message:"修改成功"});
});

//訂單管理
router.post("/cart",(req,res,next)=>{

})

//影片收藏
router.post("/videoCollection",(req,res,next)=>{

})

//文章管理
router.post("/ArticleMyart",(req,res,next)=>{

})



// 整個 app （整個網站）
// app.use

module.exports = router;