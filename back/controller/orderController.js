const orderModel = require("../model/orderModel");
const cartModel = require("../model/cartModel");
const Promise = require("bluebird");
const moment = require("moment");

// 取得使用者訂單
const userOrders = async (req, res, next) => {
    try {
        const useId = req.session.member.id;
        const getTypes = await cartModel.getTypes();
        let orders = await orderModel.getUserOrders(useId);

        let orderIds = orders.map((order) => {
            return order.id;
        });
        // console.log("orderIds", orderIds); // orderIds: [ 10, 20 ]

        // ORDER DETAIL
        let orderDetails = await orderModel.getOrderDetails(orderIds);
        skuId = orderDetails.map((item) => {
            return item.sku_id;
        }); // [ 163, 134 ]

        RawSkuGroup = orderDetails.map((item) => {
            return item.sku_group.split(",");
        }); // RawSkuGroup [ '142', '113' ]
        let skuGroup = [...new Set(RawSkuGroup)].flat();
        // console.log("skuGroup", skuGroup);

        let typeMap = {};
        getTypes.map((type) => {
            typeMap[type.id] = type;
        });

        let typeValues = await cartModel.getTypeValue(skuGroup);
        typeValues.map((typeValue) => {
            typeValue.type_name = typeMap[typeValue.type_id].name_frontend;
            return typeValue;
        });
        // console.log("typeValues", typeValues);
        // [
        //     {
        //       id: 113,
        //       type_id: 4,
        //       type_value: '2kg',
        //       type_name: '重量'
        //     },
        //     {
        //       id: 142,
        //       type_id: 5,
        //       type_value: '法式香草(5磅)',
        //       type_name: '口味'
        //     }
        // ]

        let itemImgs = await cartModel.getImgs(skuId);
        // console.log(itemImgs);
        orderDetails.map((item) => {
            item.img = itemImgs.find((itemImg) => {
                return item.sku_id === itemImg.product_sku_id;
            });
            let detailSkuGroup = item.sku_group.split(",");
            // console.log("detailSkuGroup", detailSkuGroup); // [ '106', '108' ]

            detailSkuGroup.forEach((detailSku) => {
                item.typeValue = typeValues.filter((typeValue) => {
                    return typeValue.id == detailSku;
                });
            });
        });
        // console.log("orderDetails", orderDetails);

        // 合併 user_order 與 user_order_detail 撈出來的資料
        orders.map((order) => {
            // 如果 order 沒有 detail 屬性，就給他一個 []
            order.detail = orderDetails.filter((orderDetail) => {
                return order.id === orderDetail.order_id;
            });
        });

        res.json({ orders });
    } catch (e) {
        console.error(e);
    }
};

// 建立新訂單
const createOrder = async (req, res, next) => {
    try {
        const checkItems = req.body.cartItems; // [ { id: 1, product_id: 1, sku_code: '10011011', qty: 1 } ]
        const recipient = req.body.recipient;
        const userId = req.session.member.id;
        const order_no =
            moment().format("YYMM") +
            `ORD` +
            moment().format("DD") +
            Math.floor(Math.random() * 90 + 10);
        // console.log('order_no', order_no);

        let skuId = checkItems.map((item) => {
            return item.id;
        });
        // console.log("skuId", skuId);
        // skuId = [ 15, 53, 176 ]

        // --------- 訂購產品資訊 --------

        let cartItems = await cartModel.getCartItems(skuId);
        let cartItemImgs = await cartModel.getImgs(skuId);
        let getTypes = await cartModel.getTypes();

        let checkItemsMap = {};
        checkItems.map((checkItem) => {
            checkItemsMap[checkItem.id] = checkItem.qty;
        });
        // console.log("checkItemsMap", checkItemsMap);
        // checkItemsMap = { '15': 1, '53': 2, '176': 1 }

        let typeMap = {};
        getTypes.map((type) => {
            typeMap[type.id] = type;
        });
        // console.log("typeMap", typeMap);
        // {'1': { id: 1, name_frontend: '顏色', name_backend: 'color' },{...}}

        let myCart = await Promise.all(
            cartItems.map(async (item) => {
                let rawSkuGroup = item.sku_group;
                let skuGroup = rawSkuGroup.split(",");
                // console.log("skuGroup", skuGroup);
                // [ '3', '8' ]

                let typeValues = await cartModel.getTypeValue(skuGroup);
                // console.log("typeValues", typeValues);

                typeValues.map((typeValue) => {
                    typeValue.type_name =
                        typeMap[typeValue.type_id].name_frontend;
                    return typeValue;
                });

                item.typeValue = typeValues;
                item.qty = checkItemsMap[item.product_sku_id];
                item.amount = item.price * checkItemsMap[item.product_sku_id];
                item.img = cartItemImgs.find((cartItemImg) => {
                    return item.product_sku_id === cartItemImg.product_sku_id;
                });
                return item;
            })
        );

        let totalAmount = 0;
        myCart.forEach((item) => {
            totalAmount += item.amount;
        });
        // console.log(totalAmount);
        // ------------------

        // INSERT columns: user_id, recipient, phone, email, address, order_date, order_no, paytype, delivery, subtotal, delivery_fee, total_amount, order_status, valid
        const date = new Date();
        const data = {
            user_id: userId,
            recipient: recipient.recipient,
            phone: recipient.phone,
            email: recipient.email,
            address: recipient.address,
            order_date: date,
            order_no: order_no,
            paytype: 2,
            delivery: recipient.delivery,
            subtotal: 123241,
            delivery_fee: 0,
            total_amount: totalAmount,
            order_status: 4,
            valid: 1,
        };
        await orderModel.createOrder(data);

        // get last order id
        const orderIds = await orderModel.orderId();
        const lastOrderId = orderIds[0].id;
        console.log("lastOrderId", lastOrderId);

        // INSERT columns: order_id, sku_id, qty
        for (let i = 0; i < checkItems.length; i++) {
            const detail = {
                id: lastOrderId,
                sku_id: checkItems[i].id,
                qty: checkItems[i].qty,
            };
            await orderModel.createOrderDetail(detail);
        }

        res.json({ myCart, totalAmount });
    } catch (e) {
        console.error(e);
    }
};

// FIXME: test
// const orderDetail = async (req, res, next) => {
//     try {
//         let data = await orderModel.getOrderDetails([10]);
//         let getTypes = await cartModel.getTypes();
//         skuId = data.map((item) => {
//             return item.sku_id;
//         }); // [ 163, 134 ]
//         RawSkuGroup = data.map((item) => {
//             return item.sku_group;
//         }); // RawSkuGroup [ '142', '113' ]
//         let skuGroup = [...new Set(RawSkuGroup)];
//         // console.log("skuGroup", skuGroup);
//         let typeMap = {};
//         getTypes.map((type) => {
//             typeMap[type.id] = type;
//         });
//         let typeValues = await cartModel.getTypeValue(skuGroup);
//         typeValues.map((typeValue) => {
//             typeValue.type_name = typeMap[typeValue.type_id].name_frontend;
//             return typeValue;
//         });
//         // console.log("typeValues", typeValues);
//         // [
//         //     {
//         //       id: 113,
//         //       type_id: 4,
//         //       type_value: '2kg',
//         //       type_name: '重量'
//         //     },
//         //     {
//         //       id: 142,
//         //       type_id: 5,
//         //       type_value: '法式香草(5磅)',
//         //       type_name: '口味'
//         //     }
//         // ]
//         let itemImgs = await cartModel.getImgs(skuId);
//         // console.log(itemImgs);
//         data.map((item) => {
//             item.img = itemImgs.find((itemImg) => {
//                 return item.sku_id === itemImg.product_sku_id;
//             });
//             item.type = typeValues.find((typeValue) => {
//                 return typeValue.id == item.sku_group;
//             });
//         });

//         res.json(data);
//     } catch (e) {
//         console.error(e);
//     }
// };

module.exports = {
    userOrders,
    createOrder,
    // orderDetail,
};
