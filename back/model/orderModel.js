const connection = require("../utils/db");

const getUserOrders = async (userId) => {
    return await connection.queryAsync(
        `
            SELECT * FROM user_order
            WHERE user_id = ? && valid =?
            ORDER BY user_order.order_date DESC;`,
        [userId, 1]
    );
};

const getOrderDetails = async (orderIds) => {
    return await connection.queryAsync(
        `
        SELECT user_order_detail.*, user_order_detail.product_name AS product_name,
                product.id AS product_id,
                product_sku.sku_group AS sku_group,
                brand.name AS brand_name
        FROM user_order_detail
        LEFT JOIN product_sku ON product_sku.id=user_order_detail.sku_id
        LEFT JOIN product ON product.id=product_sku.product_id
        LEFT JOIN brand ON brand.id=product.brand
        WHERE order_id IN ?;`,
        [[orderIds]]
    );
};

const createOrder = async (data) => {
    return await connection.queryAsync(
        `
        INSERT IGNORE INTO user_order (user_id, recipient, phone, email, address, order_date, order_no, paytype, delivery, subtotal, delivery_fee, total_amount, order_status, valid) VALUES (?)
        ;`,
        [
            [
                data.user_id,
                data.recipient,
                data.phone,
                data.email,
                data.address,
                data.order_date,
                data.order_no,
                data.paytype,
                data.delivery,
                data.subtotal,
                data.delivery_fee,
                data.total_amount,
                data.order_status,
                data.valid,
            ],
        ]
    );
};

const orderId = async () => {
    return await connection.queryAsync(
        `
        SELECT id FROM user_order
        ORDER BY id DESC;`
    );
};

const createOrderDetail = async (detail) => {
    return await connection.queryAsync(
        `
        INSERT IGNORE INTO user_order_detail (order_id, sku_id, qty, price, product_name) VALUES (?)
        ;`,
        [
            [
                detail.id,
                detail.sku_id,
                detail.qty,
                detail.price,
                detail.product_name,
            ],
        ]
    );
};

module.exports = {
    getUserOrders,
    getOrderDetails,
    createOrder,
    orderId,
    createOrderDetail,
};
