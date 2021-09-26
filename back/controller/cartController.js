const cartModel = require("../model/cartModel");

const cartItemData = async (req, res, next) => {
    try {
        console.log("req.body", req.body);
        let skuCode = req.body.skuCode;
        console.log("req.body.skuCode", skuCode);
        let cartItem = await cartModel.getCartItem(skuCode);
        let cartItemImg = await cartModel.getImg();
        let cartItemType = await cartModel.getType();
        // let type = cartItemType.map((item) => {
        //     return item.sku_group;
        // });
        // console.log(type);
        // type --> 取得 ['1,4',   '1,5',   '1,6',   '1,7',   '1,8',   '2,4',   '2,5'....]

        res.json({ cartItem, cartItemImg, cartItemType });
    } catch (e) {
        console.error(e);
    }
};

// const CartItemImg = async (req, res, next) => {
//     try {
//         let cartItemImg = await cartModel.getImg();
//         res.json({ CartItemImg });
//     } catch (e) {
//         console.error(e);
//     }
// };

module.exports = { cartItemData };
