const cartModel = require("../model/cartModel");

const cartItemData = async (req, res, next) => {
    try {
        // console.log("req.body", req.body.myCartItem);
        let myCartFromLocalStorage = req.body.myCartItem;
        let myCart = myCartFromLocalStorage.map(async (item) => {
            let skuCode = item.sku_code;
            let count = item.qty;
            // console.log("count", count);
            let cartItem = await cartModel.getCartItem(skuCode);
            let cartItemImg = await cartModel.getImg(skuCode);

            cartItem.map((item) => {
                item.img = cartItemImg.filter((itemImg) => {
                    return item.product_sku_id === itemImg.product_sku_id;
                });
            });

            // item.qty = count;

            // console.log("cartItem", cartItem);
            return cartItem;
            // res.json({ cartItem });
        });
        myCart = await myCart;
        console.log("myCart", myCart);
        // let skuCode = req.body.skuCode;
        // let qty = req.body.qty;
        // console.log("req.body.skuCode", skuCode);
        // let cartItem = await cartModel.getCartItem(); // FIXME: 參數改回skuCode [10011034]
        // let cartItemImg = await cartModel.getImg();
        // let cartItemType = await cartModel.getType(skuCode);

        // cartItem.map((item) => {
        //     item.img = cartItemImg.filter((itemImg) => {
        //         return item.product_sku_id === itemImg.product_sku_id;
        //     });
        // qty.forEach((element) => {
        //     item.qty = element;
        // }); [{123: 1},{34352: 4 }]
        // });
        // let type = cartItemType.map((item) => {
        //     return item.sku_group;
        // });
        // console.log(type);
        // type --> 取得 ['1,4',   '1,5',   '1,6',   '1,7',   '1,8',   '2,4',   '2,5'....]
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
