const express = require("express");
const router = express.Router();

const connection = require("../utils/db");

// /api/order 取得 database user_order 的資料
router.get("/", async (req, res, next) => {
    try {
        let result = await connection.queryAsync(`
            SELECT *, order_status.status, product_id
            FROM user_order 
            LEFT JOIN order_status ON user_order.order_status=order_status.id
            LEFT JOIN user_order_detail ON user_order.id=user_order_detail.order_id
        `);
        res.json(result);
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;
