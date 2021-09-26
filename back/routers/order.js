const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
const { SignInCheckMiddleware } = require("../middlewares/auth");

// /api/order 取得 database user_order 的資料
router.get("/", SignInCheckMiddleware, async (req, res, next) => {
    try {
        let member = req.session.member.id;
        // 撈出(主訂單) user_order 中 user_id 為 [2] 的訂單
        let orders = await connection.queryAsync(
            `
            SELECT * FROM user_order
            WHERE user_id = ? && valid =?;`,
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

        res.json(orders);
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;
