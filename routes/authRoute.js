const express = require("express");
const router = express.Router();
var jwttoken = require("../config/jwttoken");
const userContoller = require("../controller/userController");

router.post("/user", userContoller.createUser);

router.get("/user", userContoller.getuser);

router.put("/user", userContoller.updateuserDetail);

router.delete("/user", userContoller.deleteuserDetail);

module.exports = router;
