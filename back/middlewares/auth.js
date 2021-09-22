// 登入確認權限自訂中間件
module.exports={
    SignInCheckMiddleware:function(req,res,next){
        if(!req.session.account){
            return next({
                status:401,
                mseeage:"請先登入會員",
            });
        }else{
            next();
        }
    },
};