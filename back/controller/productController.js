const productModel = require('../model/productModel');

//list all product
const listAllProduct = async (req, res, next) => {
    let allProduct = await productModel.getAllProduct(); //array
    let allImg = await productModel.getImgList();

    let imgList = new Map();

    //group img with product_id
    allProduct.forEach(product => {
        let arr = [];
        arr = allImg.filter(img => {
            return product.prduct_id === img.product_id;
        });
        imgList.set(product.prduct_id, arr);
    });

    allProduct.forEach(item => {
        item.img_name = imgList.get(item.prduct_id)[0].img_name;
    })

    res.json(allProduct)
}

module.exports = {
    listAllProduct
};