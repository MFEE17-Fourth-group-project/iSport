const express = require("express");
const router = express.Router();
const connection = require("../utils/db");
const { SignInCheckMiddleware } = require("../middlewares/auth");
const cartController = require("../controller/cartController");

// api/cart 取得 database product_sku jon product join brand 的資料
router.post("/", cartController.cartItemData); // FIXME: method 改回 post

router.get("/img", cartController.cartItemImg); // FIXME: method 改回 post

router.get("/type", cartController.cartItemData); // FIXME: method 改回 post

module.exports = router;
