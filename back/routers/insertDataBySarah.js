// UPDATE TABLE DATA AT ONE TIME (user_order_detail) ** READ & UPDATE **

const express = require("express");
const router = express.Router();
const connection = require("../utils/db");

router.get("/", async (req, res, next) => {
    try {
        // 1.   讀取 product_sku : id, price
        // 1-2. 讀取 user_order_detail : product_id
        // 1-3. 讀取 product : name
        // 2.   JOIN 三張資料表
        let readData = await connection.queryAsync(`
            SELECT user_order_detail.id AS user_order_detail_id,
                    product_sku.id AS product_sku_id,
                    sku_code,
                    product_sku.price AS product_sku_price,
                    product.name AS product_name
            FROM product_sku
            JOIN user_order_detail ON product_sku.id = user_order_detail.product_id
            JOIN product ON product_sku.product_id = product.id
        `);

        // 用 for 迴圈才要算更新的筆數
        // let count = await connection.queryAsync(`
        //     SELECT COUNT (*) AS total FROM product_sku
        // `);
        // console.log(count);

        // 3. product_id = id 時 insert price
        // 3-1. 取得 user_order_detail 總筆數
        // 3-2. 跑迴圈 insert 資料到 user_order_detail
        readData.forEach(async (element) => {
            await connection.queryAsync(
                `
                    UPDATE user_order_detail
                    SET price = ?, title = ?
                    WHERE id = ?`,
                [
                    element.product_sku_price,
                    element.product_name,
                    element.user_order_detail_id,
                ]
            );

            // 看一下印出來什麼
            // console.log(
            //     "print",
            //     element.product_sku_id,
            //     element.product_sku_price,
            //     element.product_name
            // );
        });

        // console.log(readData);
        // readData 讀到一個陣列，裡面是個物件 --->
        // [ RowDataPacket {
        //     user_order_detail_id: 1,
        //     product_sku_id: 43,
        //     sku_code: '10062011',
        //     product_sku_price: 572,
        //     product_name: '【NIKE 耐吉】上衣 男款 短袖上衣 緊身 快乾 健身 運動 AS M NP TOP SS TIGHT 黑 BV5632-010\r\n'
        // },..... ]
        res.json({ readData });
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;
