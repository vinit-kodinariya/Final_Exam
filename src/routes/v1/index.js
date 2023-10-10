const express = require("express");

const userRoute = require("./user.route.js");
const productRoute = require("./product.route.js");
const orderRoute = require("./order.route.js");

const router = express.Router();

router.use("/user", userRoute);
router.use("/product", productRoute);
router.use("/order", orderRoute);

module.exports = router;