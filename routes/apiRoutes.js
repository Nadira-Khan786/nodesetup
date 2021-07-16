const express = require("express");
const router = express.Router();
const { user } = require("./index");


router.use("/", user);
module.exports = router;
