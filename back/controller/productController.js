const productModel = require('../model/productModel');

//list all product
const listAllProduct = async (req, res, next) => {
    res.json(await productModel.getAllProduct());
}

module.exports = {
    listAllProduct
};