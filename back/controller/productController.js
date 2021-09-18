const productModel = require('../model/productModel');

//list all product
const listAllProduct = async (req, res, next) => {
    let allProduct = await productModel.getAllProduct(); //array
    let allImg = await productModel.getImgList();
    let brandList = await productModel.getBrandList();

    let imgList = new Map();

    //group img with product_id
    allProduct.forEach(product => {
        let arr = [];
        arr = allImg.filter(img => {
            return product.product_id === img.product_id;
        });
        imgList.set(product.product_id, arr);
    });

    allProduct.forEach(item => {
        item.img_name = imgList.get(item.product_id)[0].img_name;
    })

    
    res.json({'allProduct':allProduct , 'brandList':brandList})
}

module.exports = {
    listAllProduct
};