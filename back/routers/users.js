const express = require("express");
const router = express.Router();
const { SignInCheckMiddleware } = require("../middlewares/auth");
const connection = require('../utils/db');
//密碼加密用
const bcrypt=require("bcrypt");


//  跟會員中心有關的路由

// 這一個 router 的路由都會先經過這個中間件
router.use(SignInCheckMiddleware);

// 取得特定會員資料
router.get("/",async(req,res,next)=>{
  console.log(req.session.member)
  let member = await connection.queryAsync(
      "SELECT * FROM users WHERE account=?",
      [req.session.member.account]
      );
      let returnMember={
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
    req.session.member=returnMember;
    res.json( req.session.member);
});

router.post("/UpdateAccount",async(req,res,next)=>{
  let member =await connection.queryAsync(
    "SELECT*FROM users WHERE account=?;",
    [req.body.account]
);
  let result=await connection.queryAsync(
    "UPDATE users SET (name,account,password,email,phone,address,birthday,about,gender,valid) VALUE(?)",
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
        req.body.valid,
    ]]
)
res.json({message:"修改成功"});
});

// 整個 app （整個網站）
// app.use

module.exports = router;