const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");
const { SignInCheckMiddleware } = require("../middlewares/auth");

// api/cart 取得 database product_sku jon product join brand 的資料
router.post("/", cartController.cartItemData);

router.get("/img", cartController.cartItemImg); // FIXME: method 改回 post (前後端)

router.get("/type", cartController.cartItemType); // FIXME: method 改回 post

router.post("/userData", cartController.userData); // FIXME: method 改回 post


module.exports = router;
