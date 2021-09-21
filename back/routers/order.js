const express = require("express");
const router = express.Router();

const connection = require("../utils/db");

// /api/order 取得 database user_order 的資料
router.get("/", async (req, res, next) => {
    try {
        // 撈主訂單
        let orders = await connection.queryAsync(`
            SELECT * FROM user_order
            WHERE user_id = ?;`,
            [2]
        );

        let orderIds = orders.map((order) => {
            return order.id;
        });
        console.log(orderIds);

        // 撈 user_order_detail
        let details = await connection.queryAsync(`
            SELECT * FROM user_order_detail
            WHERE order_id IN ?;`,
            [[orderIds]]
        );

        // 合併主訂單與 user_order_detail
        details.map((detail) => {
            let order = orders.find((order) => {
                return order.id == detail.order_id;
            });
            if (!order.detail) {
                order.detail = [];
            }
            order.detail.push(detail);
            // console.log(detail, order);
        });

        // let result = await connection.queryAsync(`
        //     SELECT *, order_status.status, product_id
        //     FROM user_order
        //     LEFT JOIN order_status ON user_order.order_status=order_status.id
        //     LEFT JOIN user_order_detail ON user_order.id=user_order_detail.order_id
        // `);
        // res.json(result);
        res.json(orders);
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;
