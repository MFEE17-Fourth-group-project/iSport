const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
const { SignInCheckMiddleware } = require("../middlewares/auth");
const cartController = require("../controller/cartController");

// api/cart 取得 database product_sku jon product join brand 的資料
router.post("/", cartController.cartItemData);

router.post("/checkedItem", async (req, res, next) => {
    try {
        let result = await connection.queryAsync(
            `SELECT product_sku.id AS product_sku_id, sku_code, product_sku.price AS price,
                    product.id AS product_id, product.name AS product_name,
                    brand.name AS brand_name
            FROM product
            LEFT JOIN product_sku ON product.id=product_sku.product_id
            LEFT JOIN brand ON product.brand=brand.id
        `
        );

        res.json({ result });
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;
