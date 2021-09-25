const express = require('express');
const router = express.Router();
const path =require("path")
const connection = require('../utils/db');
//這是資料驗證套件
const{body,validationResult}=require("express-validator");
//資料驗證規則
const signUpRules=[
    body("email").isEmail().withMessage("Email 格式錯誤"),
    body("password").isLength({min:6}).withMessage("密碼 格式錯誤")
]
//密碼加密用
const bcrypt=require("bcrypt");
const { JsonWebTokenError } = require('jsonwebtoken');


// 註冊會員資料送至express 中間件寫入資料庫
router.post("/SignUp",signUpRules,async(req,res,next)=>{
    //檢查帳號是否重複
    let member =await connection.queryAsync(
        "SELECT*FROM users WHERE account=?;",
        [req.body.account]
    );
    if(member.length>0){
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
    res.json({message:"註冊成功"});
});

const jwt =require("jsonwebtoken")
router.post("/Signin",async(req,res,next)=>{
    // 檢查是否有帳號
    let member =await connection.queryAsync(
        "SELECT*FROM users WHERE account=?;",
        [req.body.account]
    );
    if(member.length===0){
        return next({
            status:400,
            message:"沒有找到帳號",
        });
    }

    member=member[0];
        // 檢查密碼是否正確
        let result =await       
        bcrypt.compare(req.body.password, member.password);
        if(!result){
            return next({
                status:400,
                message:"密碼錯誤",
            });
        }
        console.log("登入成功")
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
        photo:member.photo,

    };
    //這是取得會員全部資料
    // req.session.account=account;
    // 這是取得會員部分資料
    req.session.member=returnMember;
    res.json(req.session.member);

    // //簽發一個token jwt用
    // const token =jwt.sign(returnMember,process.env.JWT_SECRET,{expiresIn:"24h",
    // });
    //回覆前端
    // res.json({
    //     name:member.name,
    //     photo:member.photo,
    //     // token:token,
    // });
});

router.get("/logout", (req, res, next) => {
    req.session.member = null;
    res.sendStatus(202);
    console.log("登出成功")
  }
  );
  

module.exports = router;