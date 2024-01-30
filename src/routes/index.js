const express = require("express");

const router = express.Router();

const a = "hello";

router.get("/", function (req, res, next) {
  res.status(200).send({ success: true });
});

module.exports = router;
