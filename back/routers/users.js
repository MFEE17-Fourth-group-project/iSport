// 跟會員中心有關的路由
const express = require("express");
const router = express.Router();
const { SignInCheckMiddleware } = require("../middlewares/auth");
const connection = require('../utils/db');
//密碼加密用
const bcrypt=require("bcrypt");
//上傳檔案用的亂數名稱
const { uuid } = require('uuidv4');
// 處理formData需要用到的中間件
const multer=require("multer");
//設定上傳檔案的位置，diskStorage為本機硬碟
const storage=multer.diskStorage({
    // 檔案存取位置
    destination:function(req,file,callback){
        callback(null,path.join(__dirname,"../","public","uploads"));
    },
    // 檔案命名
    filename:function(req,file,cb){
        const ext=file.originalname.split(".").pop();
        cb(null,`member-${uuid()}.${ext}`);
    }
    });
const uploader=multer({
    storage:storage,
    // 檔案驗證，限定檔案類型
    fileFilter:function(req,file,cb){
        if(
            file.mimetype !=="image/jpeg" &&
            file.mimetype !=="image/jpg" &&
            file.mimetype !=="image/png"
        
        ){
            cb(new Error("檔案類型錯誤"),false);
        }
        cb(null,true);
    },
    //檔案大小1024*1024等於1M
    limits:{
        fileSize:1024*1024,
    }
});

// 這一個 router 的路由都會先經過這個中間件
router.use(SignInCheckMiddleware);
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
    photo:member.photo,
  };
    console.log("刷新頁面")
    //console.log("我是req.session.member:",req.session.member[0])
    req.session.member=resetMember
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

//會員上傳檔案用路由中間件
router.post("/photo",uploader.single("photo"),async(req,res,next)=>{
  console.log(req.file);
  let filename= req.file?"/uploads/"+req.file.filename:"";
  let result=await connection.queryAsync(
      "INSERT INTO users (photo) VALUE(?)",
      [[
          filename
      ]]
  )
}
)

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