const express = require('express');
const router = express.Router();

const connection = require('../utils/db');

const productController = require('../controller/productController')

router.get('/', (req, res, next) => {
    res.send('hello');
});

router.get('/all',productController.listAllProduct)

// router.get('/clothes', async (req, res, next) => {
//     let result = await connection.queryAsync('SELECT * FROM iSport.product WHERE valid=1 AND category=1');
//     res.json(result);
// })

// router.get('/shoe', async (req, res, next) => {
//     let result = await connection.queryAsync('SELECT * FROM iSport.product WHERE valid=1 AND category=2');
//     res.json(result);
// })
// router.get('/equipment', async (req, res, next) => {
//     let result = await connection.queryAsync('SELECT * FROM iSport.product WHERE valid=1 AND category=3');
//     res.json(result);
// })
// router.get('/food', async (req, res, next) => {
//     let result = await connection.queryAsync('SELECT * FROM iSport.product WHERE valid=1 AND category=4');
//     res.json(result);
// })

module.exports = router;