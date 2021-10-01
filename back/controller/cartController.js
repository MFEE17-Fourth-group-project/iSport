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
            cartMap[item.id] = item.qty;
        });
        // console.log("cartMap", cartMap);
        // cartMap = { '15': 1, '53': 2, '176': 1 }

        let skuId = myCartFromLocalStorage.map((item) => {
            return item.id;
        });
        // console.log("skuId", skuId);
        // skuId = [ 15, 53, 176 ]

        let cartItems = await cartModel.getCartItems(skuId);
        let cartItemImgs = await cartModel.getImgs(skuId);

        let myCart = await Promise.all(
            cartItems.map(async (item) => {
                // TODO: TYPE and TYPEVALUE 更好的方法？
                let rawSkuGroup = item.sku_group;
                let strSkuGroup = rawSkuGroup.split(",");
                let skuGroup = strSkuGroup.map((strSkuGroupValue) =>
                    parseInt(strSkuGroupValue, 10)
                );
                console.log("skuGroup", skuGroup); // [ 3, 8 ]

                let cartItemTypes = await cartModel.getTypeValue(skuGroup);
                let getTypes = await cartModel.getType();
                console.log("cartItemType", cartItemTypes);
                console.log("getType", getTypes);

                cartItemTypes.map((cartItemType) => {
                    const index = getTypes.findIndex(
                        (getType) => cartItemType.type_id === getType.id
                    );
                    cartItemType.type_name = getTypes[index].name_frontend;
                    console.log(cartItemType);
                    return cartItemType;
                });

                item.typeValue = cartItemTypes;
                console.log(item.typeValue);
                item.qty = cartMap[item.product_sku_id];
                item.amount = item.price * cartMap[item.product_sku_id];
                item.img = cartItemImgs.find((cartItemImg) => {
                    return item.product_sku_id === cartItemImg.product_sku_id;
                });
                return item;
            })
        );

        console.log("mycart", myCart);

        // 1. 計算總金額
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
        let cartItemImg = await cartModel.getImgs([1, 5, 10]);
        console.log(cartItemImg);
        res.json({ cartItemImg });
    } catch (e) {
        console.error(e);
    }
};

const userData = async (req, res, next) => {
    try {
        // FIXME: let member = req.session.member.account;
        let result = await cartModel.getUserData("admin1");
        res.json(result);
    } catch (e) {
        console.error(e);
    }
};

const cartItemType = async (req, res, next) => {
    try {
        let cartItemType = await cartModel.getTypeValue([3, 8]);
        // [
        //     {
        //       "type_id": 1,
        //       "type_value": "黑色"
        //     },
        //     {
        //       "type_id": 2,
        //       "type_value": "S"
        //     }
        // ]

        let getType = await cartModel.getType();
        // [
        //     {
        //       "id": 1,
        //       "name_frontend": "顏色",
        //       "name_backend": "color"
        //     },
        //     {
        //       "id": 2,
        //       "name_frontend": "尺寸",
        //       "name_backend": "size"
        //     },...
        // ]

        cartItemType.map((item) => {
            const index = getType.findIndex(
                (typeItem) => item.type_id === typeItem.id
            );
            item.type_name = getType[index].name_frontend;
        });
        res.json({ cartItemType });
    } catch (e) {
        console.error(e);
    }
};

module.exports = { cartItemData, cartItemImg, cartItemType, userData };
