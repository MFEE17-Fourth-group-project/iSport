const connection = require("../utils/db");

const getCartItems = async (skuCodes) => {
    return await connection.queryAsync(
        `SELECT product_sku.id AS product_sku_id, sku_code, product_sku.price AS price,
                product.id AS product_id, product.name AS product_name,
                brand.name AS brand_name
        FROM product
        LEFT JOIN product_sku ON product.id=product_sku.product_id
        LEFT JOIN brand ON product.brand=brand.id
        WHERE product.valid = 1 && product_sku.sku_code IN ?
        `,
        [[skuCodes]]
    );
};

const getImgs = async (skuCodes) => {
    return await connection.queryAsync(
        `SELECT product_sku.id AS product_sku_id,
                product_img.img_name AS img_name
        FROM product_sku
        INNER JOIN product_img ON product_sku.product_id=product_img.product_id
        WHERE product_sku.sku_code IN ?
        `,
        [[skuCodes]]
    );
};

const getType = async (skuCode) => {
    return await connection.queryAsync(
        `SELECT product_sku.id AS product_sku_id,
                product_type_value.id AS type_value_id, type_value,
                product_type.name_frontend AS type_name
        FROM product_type_value
        LEFT JOIN product_type ON product_type.id = product_type_value.type_id    
        WHERE product_sku.sku_code = ?
        `,
        [skuCode]
    );
};

module.exports = {
    getCartItems,
    getImgs,
    getType,
};
