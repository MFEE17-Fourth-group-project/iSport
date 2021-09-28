const cartModel = require("../model/cartModel");
const Promise = require("bluebird");

// TODO: 2. TYPE

const cartItemData = async (req, res, next) => {
    try {
        let myCartFromLocalStorage = req.body.myCartItem;
        // console.log("myCartFromLocalStorage", myCartFromLocalStorage);
        // myCartFromLocalStorage = [{"id":1,"product_id":43,"sku_code":10062011,"qty":1},{"id":2,"product_id":5,"sku_code":10011015,"qty":2},{"id":3,"product_id":24,"sku_code":30013010,"qty":1}]

        let cartMap = {};
        myCartFromLocalStorage.map((item) => {
            cartMap[item.sku_code] = item.qty;
        });
        // console.log("cartMap", cartMap);
        // cartMap = { '10011015': 2, '10062011': 1, '30013010': 1 }

        let skuCodes = myCartFromLocalStorage.map((item) => {
            return item.sku_code;
        });
        // console.log("skuCodes", skuCodes);
        // skuCodes = [ 10062011, 10011015, 30013010 ]
        let cartItems = await cartModel.getCartItems(skuCodes);
        let cartItemImgs = await cartModel.getImgs(skuCodes);
        let myCart = cartItems.map((item) => {
            item.qty = cartMap[item.sku_code];
            item.amount = item.price * cartMap[item.sku_code];
            item.img = cartItemImgs.find((cartItemImg) => {
                return item.product_sku_id === cartItemImg.product_sku_id;
            });
            // console.log(item);
            return item;
        });

        // TODO: 1. 計算總金額
        let totalAmount = 0;
        myCart.forEach((item) => {
            totalAmount += item.amount;
        });
        console.log(totalAmount);

        res.json({ myCart, totalAmount });
    } catch (e) {
        console.error(e);
    }
};

const cartItemImg = async (req, res, next) => {
    try {
        let cartItemImg = await cartModel.getImg();
        console.log(cartItemImg);
        res.json({ cartItemImg });
    } catch (e) {
        console.error(e);
    }
};

module.exports = { cartItemData, cartItemImg };
