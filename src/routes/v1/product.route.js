const express = require("express")
const userValidation = require("../../validations/product.validation");
const userController = require("../../controllers/product.controller");
const validate = require("../../middlewares/validate");

const router = express.Router();


//create user
router.post(
    "/create-user",
    validate(productValidation.createproduct),
    productController.createproduct,
);

module.exports = router;