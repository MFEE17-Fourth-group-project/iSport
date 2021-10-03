const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
const { SignInCheckMiddleware } = require("../middlewares/auth");

// /api/order 取得 database user_order 的資料  // FIXME: 補上中間件 SignInCheckMiddleware
router.get("/", async (req, res, next) => {
    try {
        // let member = req.session.member.id;
        // 撈出(主訂單) user_order 中 user_id 為 [2] 的訂單
        let orders = await connection.queryAsync(
            `
            SELECT * FROM user_order
            WHERE user_id = ? && valid =?
            ORDER BY user_order.order_date DESC;`,
            [2, 1]
            // FIXME: [member, 1]
        );
        console.log("orders", orders);

        let orderIds = orders.map((order) => {
            return order.id;
        });
        console.log(orderIds); // orderIds: [ 10, 20 ]

        // 撈出 user_order_detail 中 order_id 為 [ 10, 20 ] 的訂單
        let details = await connection.queryAsync(
            `
            SELECT * FROM user_order_detail
            WHERE order_id IN ?;`,
            [[orderIds]]
        );

        // 合併 user_order 與 user_order_detail 撈出來的資料
        orders.map((order) => {
            // 如果 order 沒有 detail 屬性，就給他一個 []
            order.detail = details.filter((detail) => {
                return order.id === detail.order_id;
            });
        });

        res.json({ orders });
    } catch (e) {
        console.error(e);
    }
});

// router.post("/orderConfirmed", async (req, res, next) => {
//     let get =
//     // 檢查帳號是否重複
//     let member = await connection.queryAsync(
//         "SELECT * FROM members WHERE email = ?;",
//         [req.body.email]
//     );
//     if (member.length > 0) {
//         // next()裡面有參數 --> 會跑到錯誤處理函式
//         return next({
//             // code: "330002",
//             status: 400,
//             message: "已經註冊過了",
//         });
//     }

//     // STEP 2. 確認資料有拿到（看network）
//     console.log(req.body);

//     // 確認 file 有拿到（如果 multer 有成功的話）
//     console.log(req.file);
//     let filename = req.file ? "/uploads/" + req.file.filename : "";

//     let hashPassword = await bcrypt.hash(req.body.password, 10);
//     let result = await connection.queryAsync(
//         "INSERT INTO members (email, password, name, photo) VALUES (?);",
//         [[req.body.email, hashPassword, req.body.name, filename]]
//     );

//     res.json({});
// });

module.exports = router;
