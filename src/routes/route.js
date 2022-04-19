const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")

const commonMW = require ("../middlewares/commonMiddlewares")






router.get("/api1", UserController.basicCode)
router.get("/api2", UserController.basicCode)
router.get("/api3", UserController.basicCode)



module.exports = router;