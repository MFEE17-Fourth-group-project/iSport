const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");
const { SignInCheckMiddleware } = require("../middlewares/auth");

// /api/order 取得 database user_order 的資料
router.post("/", SignInCheckMiddleware, orderController.userOrders);

router.post("/createOrder", SignInCheckMiddleware, orderController.createOrder);

// router.get("/test", orderController.orderDetail);

module.exports = router;
