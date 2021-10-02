const connection = require("../utils/db");

const getCartItems = async (skuId) => {
    return await connection.queryAsync(
        `SELECT product_sku.id AS product_sku_id, sku_code, product_sku.price AS price, product_sku.sku_group AS sku_group,
                product.id AS product_id, product.name AS product_name,
                brand.name AS brand_name
        FROM product
        LEFT JOIN product_sku ON product.id=product_sku.product_id
        LEFT JOIN brand ON product.brand=brand.id
        WHERE product.valid = 1 && product_sku.id IN ?
        `,
        [[skuId]]
    );
};

const getImgs = async (skuId) => {
    return await connection.queryAsync(
        `SELECT product_sku.id AS product_sku_id,
                product_img.img_name AS img_name
        FROM product_sku
        INNER JOIN product_img ON product_sku.product_id=product_img.product_id
        WHERE product_sku.id IN ?
        `,
        [[skuId]]
    );
};

const getTypeValue = async (skuCodeGroup) => {
    return await connection.queryAsync(
        `SELECT type_id, type_value
        FROM product_type_value
        WHERE id IN ?
        `,
        [[skuCodeGroup]]
    );
};

const getType = async () => {
    return await connection.queryAsync(
        `SELECT *
        FROM product_type
        `
    );
};

// - name account email phone address
const getUserData = async (userAccount) => {
    return await connection.queryAsync(
        `SELECT account, name, email, phone, address
        FROM users
        WHERE users.account = ?`,
        [userAccount]
    )
}

module.exports = {
    getCartItems,
    getImgs,
    getTypeValue,
    getType,
    getUserData,
};
