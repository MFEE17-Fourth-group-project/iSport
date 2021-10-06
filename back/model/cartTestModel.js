const connection = require("../utils/db");

const getProductType = async () => {
    return await connection.queryAsync(
        `SELECT *
        FROM product_type
        `
    );
}

const getUserOrder = async (userId) => {
    return await connection.queryAsync(
        `SELECT *
        FROM user_order
        WHERE user_id=?
        `,
        [userId]
    );
};

const getUserOrderDetail = async (orderIdGroup) => {
    return await connection.queryAsync(
        `SELECT * 
        FROM user_order_detail
        WHERE order_id IN ?
        `,
        [[orderIdGroup]]
    )
}

const getProductSku = async (skuId) => {
    return await connection.queryAsync(
        `SELECT *
        FROM product_sku
        WHERE id IN ?
        `,
        [[skuId]]
    )
}

const getProductList = async(productId) => {
    return await connection.queryAsync(
        `SELECT *
        FROM product
        WHERE id IN ?
        `,[[productId]]
    )
}

const getProductTypeValue = async (typeValueId) => {
    return await connection.queryAsync(
        `SELECT *
        FROM product_type_value
        WHERE id IN ?
        `,
        [[typeValueId]]
    )
}



module.exports = {
    getProductType,
    getUserOrder,
    getUserOrderDetail,
    getProductSku,
    getProductList,
    getProductTypeValue,
}