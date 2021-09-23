const express = require("express");
const router = express.Router();
const { SignInCheckMiddleware } = require("../middlewares/auth");
const connection = require('../utils/db');


//  跟會員中心有關的路由

// 這一個 router 的路由都會先經過這個中間件
router.use(SignInCheckMiddleware);

// router.get("/", (req, res, next) => {
//   res.json(req.session.member);
//     // //jwt 用
//     // res.json(req.account);
//   console.log(req.session.member);
//   console.log("api成功取得資料")
// });

// 取得特定會員資料
router.get("/",async(req,res,next)=>{
  console.log(req.session.member)
  let member = await connection.queryAsync(
      "SELECT * FROM users WHERE account=?",
      [req.session.member.account]
      );
      let returnMember={
        // id:account.id,
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
  // res.send(req.params);
});

// 整個 app （整個網站）
// app.use

module.exports = router;