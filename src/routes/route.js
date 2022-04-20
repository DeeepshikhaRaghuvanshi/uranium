const express = require('express');
const router = express.Router();
const mw = require("../middlewares/commonMiddlewares")
const userControlller = require("../controllers/userController")
const orderController = require("../controllers/orderController")
const productController = require("../controllers/productController")



router.post("/createUser", mw.mid1 , userControlller.createUser )

router.post("/createOrder", mw.mid1 ,  orderController.createOrder)

router.post("/createProduct" , productController.createProduct)




module.exports = router;