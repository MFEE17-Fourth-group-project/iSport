const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
const { SignInCheckMiddleware } = require("../middlewares/auth");

// api/cart 取得 database product_sku jon product join brand 的資料
router.get("/", SignInCheckMiddleware, async (req, res, next) => {
    try {
        let result = await connection.queryAsync(`
            SELECT product_sku.id AS product_sku_id, sku_code, sku_group, product_sku.price AS product_sku_price, product.name AS product_name, brand.name AS brand_name
            FROM product
            LEFT JOIN product_sku ON product.id=product_sku.product_id
            LEFT JOIN brand ON product.brand=brand.id
        `);

        res.json(result);
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;
