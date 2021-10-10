const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");
const { SignInCheckMiddleware } = require("../middlewares/auth");

router.post("/", cartController.cartItemData);
router.post("/userData", SignInCheckMiddleware, cartController.userData);

module.exports = router;
