const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const mw = require("../middlewares/auth.js");

router.post("/users", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/users/:userId", mw.auth, userController.getUserData);
router.put("/users/:userId", mw.auth, userController.updateUser);
router.post("/users/:userId/posts", mw.auth , userController.postMesssage)
router.delete("/users/:userId", mw.auth, userController.deleteUser);
module.exports = router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjY0MjdlNmY1YmVjMzhhMjM1OGM0M2YiLCJiYXRjaCI6InRob3JpdW0iLCJvcmdhbmlzYXRpb24iOiJGdW5jdGlvblVwIiwiaWF0IjoxNjUwNzMxMTEyfQ.j9NfH1EBqjQllue-WqNLlz13RQ1wz5sDEQNA5PVGlFs