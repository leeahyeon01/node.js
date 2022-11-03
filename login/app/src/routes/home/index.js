"use strict";
const express = require("express");
const router = express.Router();
const ctroller = require("./home.ctroller");

// ⭐루트경로 지정 => ⭐⭐라우팅⭐⭐
router.get("/", ctroller.output.hello);
router.get("/login", ctroller.output.login);
router.post("/login", ctroller.process.login);

module.exports = router;
