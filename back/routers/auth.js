const express = require('express');
const router = express.Router();
const path =require("path")
//上傳檔案用的亂數名稱
const { uuid } = require('uuidv4');
const connection = require('../utils/db');
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

//這是資料驗證套件
const{body,validationResult}=require("express-validator");
//資料驗證規則
const signUpRules=[
    body("email").isEmail().withMessage("Email 格式錯誤"),
    body("password").isLength({min:6}).withMessage("密碼 格式錯誤")
]
//密碼加密用
const bcrypt=require("bcrypt");

//上傳檔案用路由中間件
router.post("/photo",uploader.single("photo"),async(req,res,next)=>{
    console.log(req.file);
    let filename= req.file?"/uploads/"+req.file.filename:"";
    let result=await connection.queryAsync(
        "INSERT INTO users (photo) VALUE(?)",
        [[
            filename
        ]]
    )
    res.json({message:"上傳成功"});
}
)
// 註冊會員資料送至express 中間件寫入資料庫
router.post("/SignUp",signUpRules,async(req,res,next)=>{
    //檢查帳號是否重複
    let account =await connection.queryAsync(
        "SELECT*FROM users WHERE account=?;",
        [req.body.account]
    );
    if(account.length>0){
        return next({
            status:400,
            message:"帳號已重複",
        });
    }
    //資料驗證結果
    const validateResult=validationResult(req);
    console.log(validateResult);
    //把驗證錯誤的內容傳給前端，判斷依據，如果vaildateResult不是空的代表驗證不過，[0]表示顯示第一個錯誤給前端
    if(!validateResult.isEmpty()) {
        let error=validateResult.array();
        console.log(error);
        return res
        .status(400)
        .json({field:error[0].param,message:error[0].msg});
    }
    console.log(req.body);
    let result=await connection.queryAsync(
        "INSERT INTO users (name,account,password,email,phone,address,birthday,about,gender) VALUE(?)",
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
    res.json({message:"收到了"});
});

//取得所有會員路由資料
router.get("/",async(req,res,next)=>{
    let result=await connection.queryAsync("SELECT * FROM users");
    res.json(result);
});

// 取得特定會員資料
router.get("/:account",async(req,res,next)=>{
    let menber = await connection.queryAsync(
        "SELECT * FROM users WHERE account=?",
        [req.params.account]
        );
    res.json(menber);
    // res.send(req.params);
});

router.post("/Signin",async(req,res,next)=>{
    // 檢查是否有帳號
    let account =await connection.queryAsync(
        "SELECT*FROM users WHERE account=?;",
        [req.body.account]
    );
    if(account.length===0){
        return next({
            status:400,
            message:"沒有找到帳號",
        });
    }

    account=account[0];
        // 檢查密碼是否正確
        let result =await       
        bcrypt.compare(req.body.password, account.password);
        if(!result){
            return next({
                status:400,
                message:"密碼錯誤",
            });
        }
    let returMenber={
        id:account.id,
        account:account.account,
        email:account.email,
        name:account.name,
        photo:account.photo,
    };
    req.session.account=returMenber;
    res.json(returMenber);
})

module.exports = router;