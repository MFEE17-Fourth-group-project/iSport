const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");
const { SignInCheckMiddleware } = require("../middlewares/auth");

// /api/order 取得 database user_order 的資料  // FIXME: 補上中間件 SignInCheckMiddleware
router.post("/", orderController.userOrders);

router.post("/createOrder", orderController.createOrder);

module.exports = router;
